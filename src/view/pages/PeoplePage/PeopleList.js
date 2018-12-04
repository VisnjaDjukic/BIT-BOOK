import React, {Fragment} from 'react';
import {PeopleItem} from "./PeopleItem.js"

const PeopleList = ({users})=> {

const peopleList = users.map ((user) =>{
    return <PeopleItem users={user}/>
})

    return (
        <Fragment>
            {peopleList}
        </Fragment>
    )
}

export {PeopleList}