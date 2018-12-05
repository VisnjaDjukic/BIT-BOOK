import React, { Component } from 'react';
import * as userService from "../../../services/userService"
import "./MyUserProfile.css"

class MyUserProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: null,
            userId: null
        }
    }

   
    componentDidMount() {
        userService.fetchMyProfile()
            .then(myProfile => {
                this.setState({
                    profile: myProfile,
                    userId: myProfile.userId
                })
                console.log("profile", myProfile)
            })
            
    }
    componentDidUpdate() {
        this.localStorage()
    }


    localStorage = ()=>{
        localStorage.setItem('userId', this.state.userId)
   }
    

    render() {

        if (!this.state.profile) {
            return <h1>Loading...</h1>
        }

        const {userId, name, aboutShort, avatarUrl, postsCount, commentsCount } = this.state.profile;
        const urlImg = "https://via.placeholder.com/150"
        return (
            <div className="container">
                <div className="row">
                                           <div className="card">
                            <div className="card-image">
                                {!avatarUrl ?
                                    <div id="profileImg" style={{ backgroundImage: `url(${urlImg})` }}></div> :
                                    <div id="profileImg" style={{ backgroundImage: `url(${avatarUrl})` }}></div>}
                            </div>
                            <div className="card-content">
                                <span className="card-title">{name}</span>
                                <p>{aboutShort}</p>
                            </div>
                            <div className="card-action">
                                <span><p>Posts Count: {postsCount}</p></span>
                                <span><p>Comments Count: {commentsCount}</p></span>
                            </div>
                        </div>
                                    </div>
            </div>
        )
    }
}

export { MyUserProfile }