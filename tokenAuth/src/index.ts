import express, { Request, RequestHandler } from "express";
import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const client = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cookieParser());

type CreateUserBody = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

type JWTBody = {
  userId: number
}

type RequestWithJWTBody = Request & {
  jwtBody?: JWTBody
}

const authenticationMiddleware: RequestHandler = async (req: RequestWithJWTBody, res, next) => {
  // TODO parse token and find user

  const token = req.headers.authorization?.split(" ")[1];
  try {
    const jwtBody = jwt.verify(token || '', process.env.ENCRYPTION_KEY!!) as JWTBody;
    req.jwtBody = jwtBody;
  } catch (error) {
    console.log("token failed validation");
  } finally {
    next();
  }

}

app.use(authenticationMiddleware);

//sign up
app.post('/users', async (req, res) => {
  const {firstName, lastName, email, password} = req.body as CreateUserBody;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await client.user.create({
    data: {
      firstName,
      lastName,
      email,
      passwordHash,
    },
  });

  const token = jwt.sign({
    userId: user.id
  }, process.env.ENCRYPTION_KEY!!, {
    expiresIn: '1m'
  });

  res.json({ user, token });
});

type LoginBody = {
  email: string,
  password: string
}

// log in
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

  const token = jwt.sign({
    userId: user.id
  }, process.env.ENCRYPTION_KEY!!, {
    expiresIn: '10m'
  });
  res.json({
    user,
    token
  })
});

app.get("/me", async (req: RequestWithJWTBody, res) => {
  const userId = req.jwtBody?.userId;
  if (!userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const user = await client.user.findFirst({
    where: {
      id: userId
    }
  });

  res.json({ user });
  // TODO get the user
})

app.get("/", (req, res) => {
  res.send(`<h1>Hello, world!</h1>`);
});

app.listen(parseInt(process.env.PORT || "3000", 10), () => {
  console.log(`App running on port ${process.env.PORT}`);
});
