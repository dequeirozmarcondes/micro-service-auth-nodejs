import { Router, Request, Response } from "express";
//Controller recebe a requisição do cliente
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();
//Cadastro de usuário
router.post("/users", new CreateUserController().handle);
//Login de usuário
router.post("/session", new AuthUserController().handle);
export { router };
