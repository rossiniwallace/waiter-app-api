import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import http from "node:http"
import { Server } from "socket.io"
import {router} from "./router";
import path from "node:path";

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

const port = 4000

app.use(cors({
    origin: "*"
}));


app.use((_req: Request, res:Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
});

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(express.json());

app.use(router)

io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});

server.listen(port,() => {
    console.log(`🚀 Server is running`);
})
