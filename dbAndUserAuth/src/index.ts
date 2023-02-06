import express from "express";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
const app = express();

app.use(express.json());

type CreateUserBody = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

app.post('/users', async (req, res) => {
  const {firstName, lastName, email, password} = req.body as CreateUserBody;
  const user = await client.user.create({ data: {
    firstName,
    lastName,
    email,
    password
  }});
  res.json({ user });
});

app.get("/users", async (req, res) => {
  const users = await client.user.findMany({
    include: {
      sessions: {
        include: {
          user: true
        }
      }
    }
  });
  res.json({ users });
})

app.get("/", (req, res) => {
  res.send(`<h1>Hello, world!</h1>`);
});

app.listen(3000, () => {
  console.log("I got started!");
});