import BITBOOK_API_BASE_URL from '../shared/constants';
import Comment from '../entities/Comment';


const fetchComments = (id) => {

    const postId = "/comments?postId=" + id;
    const urlComments = BITBOOK_API_BASE_URL + `${postId}`

    return fetch(urlComments, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbookdev",
            "SessionId": "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
        }
    })
        .then(response => response.json())
        .then(commentsListData => {
            console.log(commentsListData);
            return commentsListData.map(({ body, id, authorName}) => {
                return new Comment(body, id, authorName);
            })
        })
}
export { fetchComments }
