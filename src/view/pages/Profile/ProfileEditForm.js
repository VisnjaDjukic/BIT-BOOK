import React, { Fragment } from 'react';

const ProfileEditForm = ({ onFormUpdate, form }) => {
    const onFormChange = (event) => {
        const { name, value } = event.target;
        onFormUpdate({ ...form, [name]: value });
    }

    return (
        <Fragment>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Image" id="image" value={form.imageUrl} name="imageUrl" type="text" onChange={onFormChange} />
                            <label htmlFor="image"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Full Name" id="first_name" name="name" value={form.name} onChange={onFormChange} type="text" className="validate" />
                            <label htmlFor="first_name"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea placeholder="Description" id="textarea1" name="description" value={form.description} onChange={onFormChange} className="materialize-textarea"></textarea>
                                <label htmlFor="textarea1"></label>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </Fragment >
    );
}

export { ProfileEditForm }