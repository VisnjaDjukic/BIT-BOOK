import React, { Component } from 'react';
import * as userService from "../../../services/userService"

class MyUserProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: null
        }
    }

    componentDidMount() {
        userService.fetchMyProfile()
            .then(myProfile => {
                console.log("profile", myProfile)
                this.setState({
                    profile: myProfile,
                })
            })
    }
    render() {
        return <div>

        </div>
    }
}


export { MyUserProfile }