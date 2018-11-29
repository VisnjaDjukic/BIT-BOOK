import Post from "./Post";

export class Text extends Post {
    constructor(post) {
        super(post.id, post.userId, post.type)
        this.text = post.text
    }
};
