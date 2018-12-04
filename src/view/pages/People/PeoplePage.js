import React, { Component } from 'react';
import * as userService from "../../../services/userService"

class PeoplePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        userService.fetchUsers()
            .then(userList => {
                this.setState({
                    users: userList,
                })
                console.log("users", userList)
            })
    }
    render() {

        if (!this.state.users) {
            return <h1>Loading...</h1>
        }
        const { name, aboutShort, lastPostDate, avatarUrl } = this.state.users;
        const urlImg = "https://via.placeholder.com/150"
        const date = new Date(lastPostDate).toLocaleDateString("en-GB").split("/").join(".");
        return (
            <div class="row">
                <div class="col s12">

                    <div class="card horizontal">

                        <div className="card-image">
                            {!avatarUrl ?
                                <div id="profileImg" style={{ backgroundImage: `url(${urlImg})` }}></div> :
                                <div id="profileImg" style={{ backgroundImage: `url(${avatarUrl})` }}></div>}
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <h3>{name}</h3>
                                <p>{aboutShort}</p>
                            </div>
                            <div class="card-action">
                                <span><p>Last Post: {date}</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export { PeoplePage }