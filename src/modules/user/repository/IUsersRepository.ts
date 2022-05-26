import { IRegisterDTO } from "../dtos/IRegisterDTO";

interface IUserRepository {
  registerUser({firstName,lastName,userName,email,password}: IRegisterDTO): Promise<any>;
  findByEmail(email:string):Promise<any>;
  generateToken(id:string):Promise<any>;
  deleteById(id:string):Promise<any>;
}

export { IUserRepository };
