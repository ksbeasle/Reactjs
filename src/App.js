import React, { Component } from 'react'
import Table from './Table'



class App extends Component {

  state={
    characters: [
      {
        "name": "bob1",
        "job": "lettuce1"
      },
      {
        "name": "bob2",
        "job": "lettuce2"
      },
      {
        "name": "bob3",
        "job": "lettuce3"
      },
      {
        "name": "bob4",
        "job": "lettuce4"
      },
    ],
  }

  removePerson = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((c, i) =>{
        return i !== index
      })
    })
  }

  render() {
    const { characters } = this.state
        return (
      <div className="container">
        <Table cdata={characters} removePerson={this.removePerson} />
      </div>
    )
  }
}

export default App 