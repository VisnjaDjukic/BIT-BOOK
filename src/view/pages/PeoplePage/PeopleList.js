import React, { Fragment } from 'react';
import { PeopleItem } from "./PeopleItem.js"

const PeopleList = ({ users }) => {

    const peopleList = users.map((user, i) => {
        return <PeopleItem users={user} key={i} />
    })

    return (
        <Fragment>
            {peopleList}
        </Fragment>
    )
}

export { PeopleList }