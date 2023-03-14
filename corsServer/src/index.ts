import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const client = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

app.post('/users', async (req, res) => {
  const user = await client.user.create({
    data: {
      firstName: "Joseph",
      lastName: "Ditton",
      email: "joseph.ditton@usu.edu",
      passwordHash: "q23oejklnvzlskjfdnf"
    }
  });
  res.json({ user });
});

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json({ users });
})

app.get("/random", (req, res) => {
  res.json({ num: Math.random( )});
})

app.listen(3000, () => {
  console.log("I got started!");
});