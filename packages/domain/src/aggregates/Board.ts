import { ICommentEntity } from '../entities/Comment';

export interface IBoardEntity {
	id: number;
	author: string;
	content: string;
	createAt: Date;
	comments: Array<ICommentEntity>;
	pushComment(commentList: Array<ICommentEntity>): this;
}

export interface IBoardData {
	id: number;
	author: string;
	content: string;
	createAt: Date;
}

class Board implements IBoardEntity {
	private readonly _id: number;
	private readonly _author: string;
	private readonly _content: string;
	private readonly _createAt: Date;
	private _comments: Array<ICommentEntity>;

	constructor(params: IBoardData) {
		this._id = params.id;
		this._author = params.author;
		this._content = params.content;
		this._createAt = params.createAt;
		this._comments = [];
	}

	pushComment(commentList: Array<ICommentEntity>) {
		this._comments = this._comments.concat(commentList);
		return this;
	}

	get id() {
		return this._id;
	}

	get comments() {
		return this._comments;
	}

	get author() {
		return this._author;
	}

	get content() {
		return this._content;
	}

	get createAt() {
		return this._createAt;
	}
}

export default Board;
