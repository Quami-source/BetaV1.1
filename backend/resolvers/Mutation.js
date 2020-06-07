const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../src/utils');



async function signup(parent,args,context,info){
    const hashedPassword = await bcrypt.hash(args.password,10)

    const {password, ...user} = await context.prisma.createUser({...args, password:hashedPassword})

    const token = jwt.sign({userId: user.id}, APP_SECRET)


    return{
        token,
        user
    }
}


async function login(parent, args, context, info) {
    // 1
    const {password, ...user} = await context.prisma.user({ email: args.email })
    if (!user) {
      throw new Error('No such user found')
    }
  
    // 2
    const valid = await bcrypt.compare(args.password, password)
    if (!valid) {
      throw new Error('Invalid password')
    }
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    // 3
    return {
      token,
      user,
    }
}

post = (root, args, context) => {
    const userId = getUserId(context)
    return context.prisma.createLink({
         description: args.description,
         url: args.url,
         postedBy: {connect : {id: userId}}
    })
}
  
module.exports = {
    signup,
    login,
    post,
}