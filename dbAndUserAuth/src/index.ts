import express from "express";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
const app = express();
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

app.use(express.json());

type CreateUserBody = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

//sign up
app.post('/users', async (req, res) => {
  const {firstName, lastName, email, password} = req.body as CreateUserBody;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await client.user.create({ data: {
    firstName,
    lastName,
    email,
    passwordHash,
  }});
  res.json({ user });
});

type LoginBody = {
  email: string,
  password: string
}

app.post("/sessions",  async (req, res) => {
  const {email, password} = req.body as LoginBody;
  const user = await client.user.findFirst({
    where: {
      email,
    }
  });
  if (!user) {
    res.status(404).json({ message: "Invalid email or password" });
    return;
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    res.status(404).json({ message: "Invalid email or password" });
    return;
  }

  const token = uuidv4();
  const session = await client.session.create({
    data: {
      userId: user.id,
      token,
    }
  })

  res.cookie("session-token", session.token, {
    httpOnly: true,
  })

});


app.get("/", (req, res) => {
  res.send(`<h1>Hello, world!</h1>`);
});

app.listen(3000, () => {
  console.log("I got started!");
});