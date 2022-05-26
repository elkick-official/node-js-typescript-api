import { RoleRepository } from "../../../role/repository/implementations/RoleRepository";
import { UserRoleRepository } from "../../../userRole/repository/implementations/UserRoleRepository";
import { UserRepository } from "../../repository/implementations/UsersRepository";
import { RegisterController } from "./RegisterController";
import { RegisterUseCase } from "./RegisterUseCase";

const roleRepository = new RoleRepository();
const userRepository = new UserRepository();
const userRoleRepository = new UserRoleRepository();
const registerUseCase = new RegisterUseCase(userRepository,roleRepository,userRoleRepository);
const registerController = new RegisterController(registerUseCase);

export { registerController };
