// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        astronauts: []
    }

    componentDidMount () {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => this.setState({
            astronauts: data
        }))
    }

    render () {
        let astronauts = this.state.astronauts
        let astronautsArray = astronauts.map(ast => <h1>{ast.name}</h1>)
        return(
            {astronautsArray}
        )
    }
}

export default App