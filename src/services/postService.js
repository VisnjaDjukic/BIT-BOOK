
import Image from "../entities/Image";
import Text from "../entities/Text";
import Video from "../entities/Video";
import BITBOOK_API_BASE_URL from '../shared/constants';

export const fetchSinglePost = (postId, type) => {

    let postsEndpoint;
    switch (type) {
        case "image":
            postsEndpoint = `/ImagePosts/${postId}`
            break;
        case "video":
            postsEndpoint = `/VideoPosts/${postId}`
            break;
        default:
            postsEndpoint = `/TextPosts/${postId}`
            break;
    }

    const url = BITBOOK_API_BASE_URL + postsEndpoint;

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbookdev",
            "SessionId": "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
        }
    })
        .then(response => response.json())
        .then(post => {
            switch (post.type) {
                case "image":
                    return new Image(post)
                case "video":
                    return new Video(post)
                case "text":
                    return new Text(post)
                default:
                    throw new Error("Invalid type")
            }
        })
}


export const fetchPosts = () => {
    const post = "/posts"
    const url = BITBOOK_API_BASE_URL + `${post}`;

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbookdev",
            "SessionId": "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
        }
    })
        .then(response => {
            return response.json()
        })
        .then(allPosts => {
            const posts = allPosts
                .filter((post) => {
                    if (post.videoUrl) {
                        return post.videoUrl.includes('https://www.youtube.com/embed')
                    }
                    return true;
                })
                .map(post => {
                    switch (post.type) {
                        case "image":
                            return new Image(post)
                        case "video":
                            return new Video(post)
                        case "text":
                            return new Text(post)
                        default:
                            throw new Error("Invalid type")
                    }

                })
            return posts;
        })
}
// export { fetchPosts }
