import React, { Component, Fragment } from 'react';

class UpdateProfileModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>


                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="input_text" type="url" />
                                <label htmlFor="input_text"></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Full Name" id="first_name" type="text" className="validate" data-length="30" />
                                <label htmlFor="first_name"></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea placeholder="Description" id="textarea1" className="materialize-textarea"></textarea>
                                    <label htmlFor="textarea1"></label>
                                </div>
                            </div>

                        </div>
                    </form>
                </div >

            </Fragment >
        )
    }
}

export { UpdateProfileModal }