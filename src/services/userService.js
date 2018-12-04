import { User } from "../entities/User"
import BITBOOK_API_BASE_URL from "../shared/constants"

const fetchUsers = () => {
    const users = "/users"
    const url = BITBOOK_API_BASE_URL + `${users}`;

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
        .then((userData) => {
            // console.log(userData)
            const usersList = userData.map(user => {
                return new User(user.userId, user.name, user.aboutShort, user.lastPostDate, user.avatarUrl)
            })
            return usersList;

        })
}

const fetchMyProfile = () => {
    const profile = "/profile"
    const url = BITBOOK_API_BASE_URL + profile;

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
        .then((user) => {
            const { userId, name, aboutShort, avatarUrl, postsCount, commentsCount } = user
            return new User(userId, name, aboutShort, null, avatarUrl, postsCount, commentsCount)
        })
}

const fetchSingleUser = (userId) => {
    const user = `/users/${userId}`;
    const urlUser = BITBOOK_API_BASE_URL + user;

    return fetch(urlUser, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Key": "bitbookdev",
            "SessionId": "2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE"
        }
    })
        .then(response => response.json())
        .then(user => {
            console.log("myUser", user);
            // const { userId, name, aboutShort, avatarUrl, postsCount, commentsCount } = user;
            // return new User(userId, name, aboutShort, null, avatarUrl, postsCount, commentsCount)
        })
}



export {
    fetchSingleUser,
    fetchUsers,
    fetchMyProfile
}