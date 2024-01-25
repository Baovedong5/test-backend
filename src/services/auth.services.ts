import User from "~/schemas/user.schema";
import { LoginReqBody, RegisterReqBody } from "~/types/auth";
import { checkPassword, hash } from "~/utils/bcrypt";

class AuthService {
  async register(payload: RegisterReqBody) {
    const newUser = await User.create({
      ...payload,
      role: "USER",
      password: hash(payload.password),
    });

    return {
      _id: newUser._id,
    };
  }

  async login(payload: LoginReqBody) {
    const userDB = await User.findOne({
      email: payload.email,
    });

    if (userDB === null) {
      throw new Error("Email or password invalid");
    }

    const isMatchPassword = checkPassword(payload.password, userDB?.password);
    if (!isMatchPassword) {
      throw new Error("Email or password invalid");
    }

    const { _id, name, email, role } = userDB;

    return {
      user: {
        _id,
        name,
        email,
        role,
      },
    };
  }
}

const authService = new AuthService();

export default authService;
