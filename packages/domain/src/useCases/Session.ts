import { IUserDTO } from '../dto/UserDTO';
import { SessionRepository } from '../../../data/repositories/Session';

class SessionUseCase {
	constructor(private readonly sessionRepo: SessionRepository) {}

	async login(userDTO: IUserDTO): Promise<string> {
		const token = await this.sessionRepo.login(userDTO);
		this.setToken(token);
		return token;
	}

	getToken(): Promise<string> {
		return this.sessionRepo.getToken();
	}

	setToken(token: string): void {
		this.sessionRepo.setToken(token);
	}

	removeToken(): void {
		this.sessionRepo.removeToken();
	}
}

export default SessionUseCase;
