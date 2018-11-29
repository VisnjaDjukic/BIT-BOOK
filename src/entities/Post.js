class Post {
    constructor(id, userId, type, commentsNum) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.commentsNum = commentsNum;
    }

    isImage() {
        return this.type === "image";
    }

    isVideo() {
        return this.type === "video";
    }

    isText() {
        return this.type === "text";
    }

}

export default Post
