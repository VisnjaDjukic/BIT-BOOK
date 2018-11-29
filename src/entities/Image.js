import Post from './Post';

class Image extends Post {
    constructor(post) {
        super(post.id, post.userId, post.type, post.commentsNum)
        this.imageUrl = post.imageUrl
    }
}

export default Image;

