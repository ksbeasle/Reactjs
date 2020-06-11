import React, {Component} from 'react'





class Form extends Component {

    
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

    changeEvent = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]:value,
        })
    }

    submitForm = () => {
        this.props.submit(this.state)
        this.setState(this.initialState)
    }
    
    render(){
        const {name,job} = this.state
        return(
            <form>

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.changeEvent} 
                />

                <label htmlFor="name">Job</label>
                <input 
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.changeEvent} 
                />

                <input
                type="button"
                value="Submit"
                onClick={this.submitForm}
                />
            </form>
        )
    }
    
}

export default Form