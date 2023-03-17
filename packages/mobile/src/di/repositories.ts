import { Platform } from 'react-native';

import BoardRepositoryImpl from 'adapter/src/repositories/Board';
import SessionRepositoryImpl from 'adapter/src/repositories/Session';
import { IInfrastructures } from './infrastructures';

export interface IRepositories {
	session: SessionRepositoryImpl;
	board: BoardRepositoryImpl;
}

export default (infrastructure: IInfrastructures): IRepositories => {
	const baseURL = Platform.OS === 'ios' ? 'http://localhost:7777' : 'http://10.0.2.2:7777';
	return {
		session: new SessionRepositoryImpl(baseURL, infrastructure.http, infrastructure.storage),
		board: new BoardRepositoryImpl(baseURL, infrastructure.http),
	};
};
