
const BITBOOK_API_BASE_URL = "http://bitbookapi.azurewebsites.net/api";

const fetchInputData = (value, postType) => {

    const post = value;
    const url = BITBOOK_API_BASE_URL + `${post}+`;

    return fetch(url, value, postType, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbookdev",
            "SessionId": "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
        }
    }
    )
        .then(response => {
            return response.json()
        })
    // .then(post => {
    //     switch (postType) {
    //         case "image":
    //             return new Image(post);
    //         case "video":
    //             return new Video(post);
    //         case "text":
    //             return new Text(post);
    //         default:
    //             throw new Error("Invalid type");
    //     }
    // })
}

export { fetchInputData }