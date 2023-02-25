import { TUser, TUserReturn } from "../../interfaces/users.interface"
import { AppDataSource } from "../../data-source"
import { Repository } from "typeorm"
import { User } from "../../entities"
import { returnUserSchema } from "../../schemas/user.schemas"



const createUserService = async ( userData: TUser ): Promise<TUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    //cria objeto de usuario
    const user: User = userRepository.create(userData) 
    // cria uma query INSERT INTO e coloca no DB
    await userRepository.save(user)

    const newUser: TUserReturn = returnUserSchema.parse(user)

    return newUser
}

export { createUserService }