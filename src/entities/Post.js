class Post {
    constructor(id, userId, type) {
        this.id = id;
        this.userId = userId;
        this.type = type
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
