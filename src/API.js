import React, { Component } from "react"
 

class App extends Component {
    state = {
        jsonData: [],
    }


    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*"

        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                jsonData: res
            })
        })
    }

    render() {
        const {jsonData} = this.state
        const res = jsonData.map((val, index) => {
            return <li key={index}>
                {val}
            </li>
        })

        return <ul>{res}</ul>
    }
}




export default App