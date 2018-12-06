import React, { Component } from 'react';
import Modal from 'react-modal';
import { ProfileEditForm } from './ProfileEditForm';

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
            name: this.props.profile.name,
            description: this.props.profile.aboutShort,
            imageUrl: this.props.profile.avatarUrl,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onUpdateClick = this.onUpdateClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.profile.name,
            description: nextProps.profile.aboutShort,
            imageUrl: nextProps.profile.avatarUrl,
        });
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    onUpdateClick() {
        const { modalIsOpen, ...profile } = this.state;
        console.log('profile from edit profile comp:', profile);

        this.props.onSubmit(profile)
    }

    render() {
        const { modalIsOpen, ...form } = this.state;

        return (
            <>
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >

                        <h4>Update Profile</h4>

                        <ProfileEditForm
                            onFormUpdate={updatedForm => this.setState(updatedForm)}
                            form={form}
                        />

                        <button onClick={this.onUpdateClick} className="btn orange" >Update</button>
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