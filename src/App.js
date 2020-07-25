import React, { Component } from 'react';
import './App.css';
import InsertForm from './Components/InsertForm';
import Contacts from './Components/Contacts';
import EditForm from './Components/EditForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      contacts: [
        {
          name: 'Edinson Requena',
          number: '555 555 555'
        },
        {
          name: 'Will Smith',
          number: '999 999 999'
        }
      ],
      newName: '',
      newNumber: '',
      updateName: '',
      updateNumber: ''
    }
  }

  // Set state of the name the user will insert
  newNameFunc = (e) => {
    this.setState({
      newName: e.target.value
    })
  }

  // Set state of the number the user will insert
  newNumberFunc = (e) => {
    this.setState({
      newNumber: e.target.value    
    })
  }

  // Insert the name & number from the state
  submitForm = (e) => {
    e.preventDefault();
    if (!(this.state.newName === '' || this.state.newNumber === '')) {
      let newContacts = this.state.contacts;
      newContacts.push({
        name: this.state.newName,
        number: this.state.newNumber
      });
      this.setState({
        contacts: newContacts,
        newName: '',
        newNumber: ''
      });
    }
  }

  removeContact = (i) => {
    let contacts = this.state.contacts;
    contacts.splice(i, 1);
    this.setState({
      contacts: contacts
    });
  }

  // Set state of updateName, this value will be used in the "editContact" function
  updateNameFunc = (e) => {
    this.setState({
      updateName: e.target.value
    })
  }

  // Set state of updateNumber, this value will be used in the "editContact" function
  updateNumberFunc = (e) => {
    this.setState({
      updateNumber: e.target.value
    })
  }

  // This is used to show the correct information when showing the popup
  editContact = (index) => {
    this.setState({
      show: true
    });
    this.state.contacts.forEach((contact, i) => {
      if (i === index) {
        return (
          this.setState({
            updateName: contact.name,
            updateNumber: contact.number,
            editIndex: i
          })
        )
      }
    })
  }

  // In this function we are changing the contacts array with the updated values
  updateSelectedContact = (e) => {
    e.preventDefault();
    let newContacts = this.state.contacts;
    newContacts.forEach((contact, i) => {
      if (i === this.state.editIndex) {
        contact.name = this.state.updateName;
        contact.number = this.state.updateNumber;
      }
    });
    this.setState({
      contacts: newContacts,
      show: false,
      updateName: '',
      updateNumber: '',
      editIndex: undefined
    })
  }

  fadeAwayEditForm = (e) => {
    if (e.target.className === 'popup' || e.target.id === 'cross') {
      this.setState({
        show: false
      })
    }
  }
  
  render() {
    return (
      <div className="container">
        <h1>Contact book</h1>
        <InsertForm
          newName={this.state.newName}
          newNumber={this.state.newNumber}
          newNameFunc={this.newNameFunc}
          newNumberFunc={this.newNumberFunc}
          submitForm={this.submitForm} />

        <Contacts
          editContact={this.editContact}
          removeContact={this.removeContact}
          contacts={this.state.contacts} />

        <EditForm 
          updateSelectedContact={this.updateSelectedContact}
          updateNameFunc={this.updateNameFunc}
          updateNumberFunc={this.updateNumberFunc}
          show={this.state.show}
          updateName={this.state.updateName}
          updateNumber={this.state.updateNumber}
          fadeAwayEditForm={this.fadeAwayEditForm} />
      </div>
    );
  }
}

export default App;