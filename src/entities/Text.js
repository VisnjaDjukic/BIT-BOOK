import Post from "./Post";

class Text extends Post {
    constructor(post) {
        super(post.id, post.userId, post.type, post.commentsNum)
        this.text = post.text
    }
};

export default Text;

