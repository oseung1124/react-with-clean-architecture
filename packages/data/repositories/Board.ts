import { IBoardDTO } from 'domain/src/dto/BoardDTO';
import { ICommentDTO } from 'domain/src/dto/CommentDTO';

export abstract class BoardRepository {
	abstract getBoards(): Promise<Array<IBoardDTO>>;
	abstract insertBoard(author: string, content: string): Promise<boolean>;
	abstract getComments(): Promise<Array<ICommentDTO>>;
}
