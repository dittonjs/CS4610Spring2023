import { Request } from "express"

export type JWTBody = {
  userId: number
}

export type RequestWithJWTBody = Request & {
  jwtBody?: JWTBody
}