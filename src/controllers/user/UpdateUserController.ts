import { Request, Response } from "express";
import { UpdateUSerService } from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { password } = req.body;
    const user_id = req.user_id;
    const updateUserService = new UpdateUSerService();
    const user = await updateUserService.execute({
      user_id,

      password,
    });
    return res.json(user);
  }
}

export { UpdateUserController };
