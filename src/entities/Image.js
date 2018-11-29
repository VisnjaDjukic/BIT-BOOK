import Post from './Post';

class Image extends Post {
    constructor(post) {
        super(post.id, post.userId, post.type)
        this.imageUrl = post.imageUrl
    }
}

export default Image;

