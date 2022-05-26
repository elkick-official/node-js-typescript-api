import jwt from 'jsonwebtoken'
import { User } from "../../domain/model/User";
import { IRegisterDTO } from "../../dtos/IRegisterDTO";
import { IUserRepository } from "../IUsersRepository";
const authConfig = require('../../../../config/auth.json');

class UserRepository implements IUserRepository {
  async registerUser({firstName,lastName,userName,email,password}: IRegisterDTO): Promise<any> {
    return await User.create({
      first_name: firstName,
      last_name: lastName,
      user_name: userName,
      email:email,
      password: password,
    });
  }
  async findByEmail(email:string):Promise<any>{
    return await User.findOne({where:{email:email}});
  };

  async generateToken(id:string):Promise<any>{
    return jwt.sign({ id: id }, authConfig.secret, {
      expiresIn: 86400,
    })
  };

  async deleteById(id:string):Promise<any>{
    return await User.destroy({where:{id:id}});
  };
}
export { UserRepository };
