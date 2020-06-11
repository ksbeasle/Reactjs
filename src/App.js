import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'



class App extends Component {

  state={
    characters:  [],
  }

  removePerson = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((c, i) =>{
        return i !== index
      })
    })
  }

  submit = (character) => {
    this.setState({ characters: [this.state.characters, character]})
  }

  render() {
    const { characters } = this.state
        return (
      <div className="container">
        <Table cdata={characters} removePerson={this.removePerson} />
        <Form submit={this.submit}/>
      </div>
    )
  }
}

export default App 