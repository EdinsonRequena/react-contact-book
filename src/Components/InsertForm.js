import React, { Component } from 'react';

class InsertForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.submitForm}>
                    <input value={this.props.newName} onChange={this.props.newNameFunc} placeholder="Name" />
                    <br />
                    <input value={this.props.newNumber} onChange={this.props.newNumberFunc} placeholder="Number" />
                    <br />
                    <button className="btn btn-default">Add contact</button>
                </form>
            </div>
        );
    }
}

export default InsertForm;