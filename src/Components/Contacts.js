import React, { Component } from 'react';
import ContactItem from './ContactItem';

class Contacts extends Component {
    render() {
        return (
            <div className="scroll">
                <h2>All Contacts</h2>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Number</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map((contact, i) => {
                            return (<ContactItem editContact={this.props.editContact} removeContact={this.props.removeContact} key={i} i={i} contact={contact} />)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Contacts;