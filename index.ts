import fastify from "fastify";
import { FastifyInstance } from "fastify/types/instance";

const app : FastifyInstance = fastify()

app.get('/',(request,reply)=>{
    reply.send("Hello World");
})

app.listen({port : 3000},(err,address)=>{
    if(err){
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`server listening on ${address}`)
})