function newLinkSubscribe(parent,args,context,info){
    return context.prisma.$subscribe.link({mutation_in : ['CREATED']})
}


const newLink = {
    subscribe : newLinkSubscribe,
    resolve : payload => {
        return payload
    }
}

module.exports = {
    newLink
}