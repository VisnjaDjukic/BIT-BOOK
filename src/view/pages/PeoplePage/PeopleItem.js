import React from 'react';
import './PeopleItem.css';
import { Link } from 'react-router-dom';


const PeopleItem = ({ users }) => {

    const { userId, name, aboutShort, lastPostDate, avatarUrl } = users;
    const urlImg = "https://via.placeholder.com/150"
    const date = new Date(lastPostDate).toLocaleDateString("en-GB").split("/").join(".")
    return (


        <div className="cardList col s12 m7 container">
            <Link to={`/people/${userId}`}><div className="card horizontal">

                <div className="card-image">
                    {!avatarUrl ?
                        <div className="listImg" style={{ backgroundImage: `url(${urlImg})` }}></div> :
                        <div className="listImg" style={{ backgroundImage: `url(${avatarUrl})` }}></div>
                    }
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h3>{name}</h3>
                        <p>{aboutShort}</p>
                    </div>
                    <div className="card-action">
                        <span><p>Last Post:{date}</p></span>
                    </div>
                </div>

            </div></Link>
        </div>

    )
}

export { PeopleItem }