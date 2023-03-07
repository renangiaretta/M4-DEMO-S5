import { Repository } from 'typeorm';
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { ILogin } from "../../interfaces/login.interfaces";



const createLoginService = async ( loginData: ILogin ): Promise<string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const user: User | null = await userRepository.findOneBy({
        email: loginData.email
    })
    if(!user) {
        throw new AppError('Wrong e-mail or passwordss.', 401)
    }

    const passwordMatch:boolean = await compare(loginData.password, user.password)

    if(!passwordMatch) {
        throw new AppError(`email: ${loginData.email} e password: ${loginData.password}, ${user.email}, ${user.password}, ${passwordMatch}`, 401)
    }
    const token: string = jwt.sign({
        birthDate: user.birthDate
    },
    process.env.SECRET_KEY!,
    {
        expiresIn: '24h',
        subject: String(user.id)
    }
    
    )
    return token
    
}


export { createLoginService }