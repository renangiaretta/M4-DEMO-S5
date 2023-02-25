import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { TUser, TUserListReturn, TUserReturn } from "../../interfaces/users.interface";
import { returnListUserSchema } from '../../schemas/user.schemas';






const listUsersService = async (): Promise<TUserListReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find({
        take: 3, //Como se fosse o LIMIT
        skip: 3 * ( 1 - 1 ), // Como se fosse o OFFSET
        order: {
            name: 'ASC'
        }
    })

    const users: TUserListReturn = returnListUserSchema.parse(findUsers)

    return users


}


export { listUsersService }