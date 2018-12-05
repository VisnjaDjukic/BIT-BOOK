import React, { Component } from 'react';
import Modal from 'react-modal';
import { UpdateProfileModal } from './UpdateProfileModal';

const customStyles = {
    content: {
        width: '500px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);


    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        this.subtitle.style.color = 'orange';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    // uploadPhoto = () => {

    // }
    render() {

        return (
            <>
                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal">

                        <h4 ref={subtitle => this.subtitle = subtitle}>Update Profile</h4>

                        <UpdateProfileModal />
                        {/* <button onClick={this.closeModal} className="waves-effect waves-light btn">close</button> */}
                        <button onSubmit={this.submitInput} className="btn orange" >Post</button>
                        <button onClick={this.closeModal} className="btn orange" >Cancel</button>
                    </Modal>
                </div>
                <div className="fixed-action-btn">
                    <a onClick={this.openModal} className="btn-floating btn-large red" style={{ position: "relative", bottom: "100px" }}>

                        <i className="large material-icons">mode_edit</i>
                    </a>
                </div>
            </>
        )
    }
}

export { EditProfile }