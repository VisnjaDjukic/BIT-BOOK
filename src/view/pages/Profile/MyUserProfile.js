import React, { Component, Fragment } from 'react';
import * as userService from "../../../services/userService"
import "./MyUserProfile.css"
import { UserProfile } from './UserProfile'
import { EditProfile } from './EditProfile';

class MyUserProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: {},
            name: "",
            email: "",
            aboutShort: "",
            about: "",
            avatarUrl: ""
        }
    };


    componentDidMount() {
        this.loadEditInput()
        this.submitInput()
        const userId = this.props.match.params.id;

        if (userId) {
            this.loadSingleUserProfile(userId);
        } else {
            this.loadProfileData();
        }
    }

    loadProfileData = () => {
        userService.fetchMyProfile()
            .then(myProfile => {
                this.setState({
                    profile: myProfile,
                })
            })
    }

    loadSingleUserProfile(userId) {
        userService.fetchSingleUser(userId)
            .then(myUser => {
                this.setState({ profile: myUser })
            })
    }

    // editProfile(data) {
    //     userService.editProfile(data)
    //         .then(myResponse => {
    //             console.log(myResponse)
    //         })
    // }

    submitInput = () => {
        const data = {
            name: "",
            email: "",
            aboutShort: "",
            about: "",
            avatarUrl: ""
        }
        userService.editProfile(data)
            .then((profile) => {
                this.setState({
                    name: profile.name,
                    email: profile.email,
                    aboutShort: profile.aboutShort,
                    about: profile.about,
                    avatarUrl: profile.avatarUrl
                })

                this.loadEditInput()
            })
    }

    loadEditInput() {
        userService.editProfile()
            .then(data => {
                console.log(data)
                this.setState({})
            })
    }

    render() {

        if (!this.state.profile) {
            return <h1>Loading...</h1>
        }

        return (
            <Fragment>
                <UserProfile userId={this.state.profile.userId}
                    name={this.state.profile.name}
                    aboutShort={this.state.profile.aboutShort}
                    avatarUrl={this.state.profile.avatarUrl}
                    postsCount={this.state.profile.postsCount}
                    commentsCount={this.state.profile.commentsCount} />

                <EditProfile onSubmit={this.submitInput} />
            </Fragment>

        )
    }
}

export { MyUserProfile }