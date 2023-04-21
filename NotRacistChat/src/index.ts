import express from "express";
import { Message, PrismaClient } from "@prisma/client";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const client = new PrismaClient();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("Connection made");
  // io.emit("new-client");
  socket.on("new-message", async (data: Message) => {
    const createdMessage = await client.message.create({
      data,
    });

    io.emit("new-message", createdMessage);
  });

});

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hello, world!</h1>`);
});

server.listen(3000, () => {
  console.log("I got started!");
});