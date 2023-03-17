import BoardRepositoryImpl from 'adapter/src/repositories/Board';
import SessionRepositoryImpl from 'adapter/src/repositories/Session';
import { IInfrastructures } from './infrastructures';
import { BoardRepository } from 'packages/data/repositories/Board';
import { SessionRepository } from 'packages/data/repositories/Session';

export interface IRepositories {
	session: SessionRepository;
	board: BoardRepository;
}

export default (infrastructure: IInfrastructures): IRepositories => {
	const baseURL = 'http://localhost:7777';
	return {
		session: new SessionRepositoryImpl(baseURL, infrastructure.http, infrastructure.storage),
		board: new BoardRepositoryImpl(baseURL, infrastructure.http),
	};
};
