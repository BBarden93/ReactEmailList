import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    signups: [
      {name: "A", email: "a@gmail.com"},
      {name: "B", email: "b@gmail.com"},
      {name: "C", email: "c@gmail.com"}
    ]
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const {name, email} = this.refs
    const newSignup = {name: name.value, email: email.value}
    
    this.setState({
      signups: [...this.state.signups, newSignup]
    })
    name.value = ""
    email.value = ""
    name.focus()
  }

  render() {
    const {signups} = this.state
    return (
      <div className="App">
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input ref="name" type="text" placeholder="Name"/>
            <input ref="email" type="text" placeholder="Email"/>
            <button>Sign Up</button>
          </form>
          <h3>Number of signups: {signups.length}</h3>
          <ul>
            {signups.map((person, index) => {
              return (
                <li key={index} onClick={() => {console.log(person)}}>{person.name}</li>
              )
            })}
          </ul>
      </div>
    );
  }
}

export default App;
