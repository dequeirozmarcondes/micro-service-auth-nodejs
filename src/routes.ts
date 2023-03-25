import { Router, Request, Response } from "express";
//Controller recebe a requisição do cliente
import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();
//Cadastro de usuário
router.post("/users", new CreateUserController().handle);

export { router };
