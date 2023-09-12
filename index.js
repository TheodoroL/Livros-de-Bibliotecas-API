import {fastify} from "fastify"
import {databasememory} from "./dabaseMemory.js"

const server = fastify()
const db = new databasememory()


// vai pegar todos os livrque existe 
server.get("/livros",  async(request)=>{
    // return "ola mundo"
    return await db.list(request)
})

// aqui você cria livros no banco de dados 
server.post("/livros", async (request, response)=>{
    const {title, author, description, categ} = request.body
    await db.create({
        title, 
        author, 
        description, 
        categ,
    }

    )

    return response.status(201).send() // se der tudo certo, vai aparecer essa mensagem 

})

/* atualiza todos os detalhes do livro, como por exemplo 

titulo
autor 
descrição 
e a categoria do livro 

*/
server.put("/livros/:id", async(request, response )=>{
    const livrosid = request.params.id 
    const {title,author, description, categ} = request.body 

    await db.update(livrosid, {
        title, 
        author, 
        description, 
        categ

    })

    return response.status(204).send() // quando terminar o trabalho da api, vai aparecer 204 

    
})

// aqui você só mudao titulo
server.put("/livros/title/:id", async(resquest, response)=>{
    const livrosid = resquest.params.id
    const titulo  = resquest.body    


    await db.updateTitle(livrosid, titulo)

    return response.status(204).send()

})

// muda a descrição 
server.put("/livros/description/:id", async(request, response)=>{
    const livrosid = request.params.id
    const description  = request.body    


    await db.updatedescription(livrosid, description)

    return response.status(204).send()
})

// muda só o autor 
server.put("/livros/author/:id", async(request, response)=>{
    
    const livrosid = request.params.id
    const author  = request.body    


    await db.updateauthor(livrosid, author)

    return response.status(204).send()


})

// deleta o livro especifico 
server.delete("/livros/:id", async(request)=>{
    
    const livrosid = request.params.id
    await db.delete(livrosid)

})

server.listen({
    port:3333
})