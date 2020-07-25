
import React, { Component } from 'react';

class ContactItem extends Component {
    render() {
        const { i, contact, removeContact, editContact } = this.props;
        return (
            <React.Fragment>
                <tr>
                    <td>{i+1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.number}</td>
                    <td>
                        <button onClick={editContact.bind(this, i)} className="btn btn-blue mr-1">Edit</button>
                        <button onClick={removeContact.bind(this, i)} className="btn btn-red">Remove</button>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

export default ContactItem;