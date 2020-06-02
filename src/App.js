import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {

    const characters = [
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
    ]


    return (
      <div className="container">
        <Table cdata={characters}/>
      </div>
    )
  }
}

export default App 