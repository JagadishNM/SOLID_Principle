import * as fs from 'fs';

export interface Post {
	id: number;
	title: string;
	body: string;
	postBy: string;
}

export interface IPostService {
	getAll(): Promise<Post[]>;
	save(post: Post): Promise<void>;
}

export class MockPostService implements IPostService {
	private _fileName: string = 'posts.json';
	posts: Post[] = [];
	constructor() {
		this.posts = [
			{ id: 1, title: 'Test Post 1', body: 'Test Post 1', postBy: 'Me' },
			{ id: 2, title: 'Test Post 2', body: 'Test Post 2', postBy: 'Me' },
			{ id: 3, title: 'Test Post 3', body: 'Test Post 3', postBy: 'Me' },
			{ id: 4, title: 'Test Post 4', body: 'Test Post 4', postBy: 'Me' },
			{ id: 5, title: 'Test Post 5', body: 'Test Post 5', postBy: 'Me' },
		];
	}
	getAll(): Promise<Post[]> {
		return Promise.resolve(this.posts);
	}
	save(post: Post): Promise<void> {
		this.posts.push(post);
		return Promise.resolve();
	}
}

export class PostsService implements IPostService {
	private _fileName: string = 'posts.json';

	constructor() {}

	getAll(): Promise<Post[]> {
		return new Promise((resolve, reject) => {
			fs.readFile(this._fileName, 'utf-f8', (err, data) => {
				if (err) {
					reject(err);
				}
				resolve(data);
			});
		});
	}

	save(post: Post): Promise<void> {
		return new Promise((resolve, reject) => {
			this.getAll().then((posts) => {
				posts.push(post);
				fs.writeFile(this._fileName, posts, (err) => {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
				});
			});
		});
	}
}

export class NewsFeed {
	constructor(private _service: PostsService) {}

	show() {
		this._service.getAll().then((posts) => {
			posts.forEach((post: Post) => {
				console.log(`${post.title} - ${post.body}`);
			});
		});
	}
}

let newsFeed = new NewsFeed(new PostsService());
newsFeed.show();

let mockNewsFeed = new NewsFeed(new MockPostService());
mockNewsFeed.show();
