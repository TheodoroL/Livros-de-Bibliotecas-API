import { randomUUID } from "node:crypto";
import {sql} from "./db.js"
export class databasememory{

    async create(livros){
        const LivrosId = randomUUID()
        const {categ, description,author,title} = livros 

        await sql`INSERT INTO livros(id, title, author, description, categ) VALUES (${LivrosId},${title}, ${author},${description},${categ})`


    }


    async list(){
        return await sql`select * from livros`



    }

    async update(id, livros){

        const {title, author, description, categ} = livros

        await sql`update livros set title=${title}, author=${author}, description=${description}, categ=${categ} WHERE id=${id}`


    }


    async updateTitle(id, titulo){
        const {title} = titulo

        await sql`update livros set title=${title} WHERE id=${id}`
    }

    async updatedescription(id, descriçao){
        const {description} = descriçao

        await sql`update livros set description=${description} WHERE id=${id}`
    }
    async updateauthor(id, autor){
        const {author} = autor

        await sql`update livros set author=${author} WHERE id=${id}`
    }

    async delete(id){

        await sql`delete from livros  where id=${id}` 


    }

}