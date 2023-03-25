import { Router, Request, Response } from "express";
//Controller recebe a requisição do cliente
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();
//Cadastro de usuário
router.post("/users", new CreateUserController().handle);
//Login de usuário
router.post("/session", new AuthUserController().handle);
//Detalhes do usuário
router.get("/me", isAuthenticated, new DetailUserController().handle);
export { router };
