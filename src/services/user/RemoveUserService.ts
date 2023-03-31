import prismaClient from "../../prisma";

interface RemoveUserRequest {
  user_id: string;
}

class RemoveUserService {
  async execute({ user_id }: RemoveUserRequest) {
    const user = await prismaClient.user.delete({
      where: {
        id: user_id,
      },
    });
    return user;
  }
}

export { RemoveUserService };
