
import React, { Component } from 'react';

class EditForm extends Component {
    render() {
        return (
            <div onClick={this.props.fadeAwayEditForm} className="popup" id={this.props.show ? 'show' : 'not'}>
                <div className="form-container">
                    <h2>Edit contact</h2>
                    <form>
                        <input onChange={this.props.updateNameFunc} value={this.props.updateName} />
                        <input onChange={this.props.updateNumberFunc} value={this.props.updateNumber} />
                        <button className="btn btn-green" onClick={this.props.updateSelectedContact}>Edit contact</button>
                    </form>
                    <i id="cross" className="fas fa-times"></i>
                </div>
            </div>
        );
    }
}

export default EditForm;