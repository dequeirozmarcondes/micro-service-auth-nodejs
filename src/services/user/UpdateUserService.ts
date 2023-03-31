import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  user_id: string;
  password: string;
}

class UpdateUSerService {
  async execute({ user_id, password }: UserRequest) {
    try {
      const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
          id: user_id,
        },
      });
      if (!userAlreadyExists) {
        throw new Error("Usuário não cadastrado!");
      }
      const passwordHash = await hash(password, 8);
      const userUpdate = await prismaClient.user.update({
        where: {
          id: user_id,
        },
        data: {
          password: passwordHash,
        },
      });

      return userUpdate;
    } catch (err) {
      console.log(err);
      throw new Error("Erro ao atualizar cadastro!");
    }
  }
}
export { UpdateUSerService };
