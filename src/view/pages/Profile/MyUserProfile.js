import React, { Component } from 'react';
import * as userService from "../../../services/userService"
import "./MyUserProfile.css"
import { UserProfile } from './UserProfile'
// import { ModalPostVideo } from '../NewPosts/ModalPostVideo';

class MyUserProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: null,
            user: []
        }
    }

    componentDidMount() {
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

    render() {

        if (!this.state.profile) {
            return <h1>Loading...</h1>
        }

        return (
            <UserProfile name={this.state.profile.name} aboutShort={this.state.profile.aboutShort} avatarUrl={this.state.profile.avatarUrl} postsCount={this.state.profile.postsCount} commentsCount={this.state.profile.commentsCount} />
        )
    }
}

export { MyUserProfile }