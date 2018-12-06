import React, { Component } from 'react';
import M from 'materialize-css'
import "./DropDown.css"



class DropDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: null
        }
    }

    componentDidMount() {
        const elem = document.querySelector('.dropdown-trigger');
        M.Dropdown.init(elem, null)
    }

    render() {
        const { showPost } = this.props;
        return (
            <div className='dropdown'>
                <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>All Posts</a>

                <ul id='dropdown1' className='dropdown-content'>
                    <li><a onClick={() => showPost('imageUrl')}> Image</a></li>
                    <li><a onClick={() => showPost('videoUrl')}>Video</a></li>
                    <li><a onClick={() => showPost('text')}> Text</a></li>
                </ul>
            </div>
        )
    }
}

export { DropDown }

