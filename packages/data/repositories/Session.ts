import { IUserDTO } from 'domain/src/dto/UserDTO';

export abstract class SessionRepository {
	abstract login(userDTO: IUserDTO): Promise<string>;
	abstract getToken(): Promise<string>;
	abstract setToken(token: string): void;
	abstract removeToken(): void;
}
