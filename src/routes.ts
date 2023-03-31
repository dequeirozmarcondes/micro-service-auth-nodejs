import { Router, Request, Response } from "express";
//Controller recebe a requisição do cliente
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();
//Cadastro de usuário
router.post("/users", new CreateUserController().handle);
//Login de usuário
router.post("/session", new AuthUserController().handle);
//Detalhes do usuário
router.get("/user-detail", isAuthenticated, new DetailUserController().handle);
//Atualiza dados do usuário
router.put("/users", isAuthenticated, new UpdateUserController().handle);
//Deletar usuário
router.delete("/user", isAuthenticated, new RemoveUserController().handle);

export { router };
