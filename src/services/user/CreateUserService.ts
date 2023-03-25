interface UserRequest {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, lastname, email, password }: UserRequest) {
    return { name: name };
  }
}

export { CreateUserService };
