import React, { Component, Fragment } from 'react'
import * as userService from "../../../services/userService"

import { PeopleList } from "./PeopleList.js"

class PeoplePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            search: ''
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

    fetchSingleUser = (userId) => {
        userService.fetchSingleUser(userId)
            .then(user => {
                console.log("myUser", user)
            })
    }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        if (!this.state.users) {
            return <h1>Loading...</h1>
        }

        const allUsers = this.state.users.filter(user =>
            (user.name.toLowerCase().includes(this.state.search.toLowerCase()) ? user.name : null)

        )

        return (
            <Fragment>
                <nav className="container">
                    <div className="nav-wrapper orange">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" onChange={this.handleSearch} required />
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>

                <PeopleList users={allUsers} />
            </Fragment>
        )

    }
}

export { PeoplePage }