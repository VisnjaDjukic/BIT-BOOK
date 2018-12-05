import React, { Component } from 'react';
import M from 'materialize-css'
import "./DropDown.css"

class DropDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nesto: 1
        }
    }


    componentDidMount() {
        const elem = document.querySelector('.dropdown-trigger');
        M.Dropdown.init(elem, null)
    }


    render() {
        return (
            <div className='dropdown'>
                <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>All Posts</a>

                <ul id='dropdown1' class='dropdown-content'>
                    <li><a href="#!">Image</a></li>
                    <li><a href="#!">Video</a></li>
                    <li><a href="#!">Text</a></li>
                </ul>
            </div>
        )
    }
}

export { DropDown }

