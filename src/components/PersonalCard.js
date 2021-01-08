import React, {Component} from 'react';

class personalCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ageOnChange: this.props.age
        };
    }

    handleClick = e => {
        this.setState({
            ageOnChange: this.state.ageOnChange +1 
        })
    }
   
    render(){

        const { firstName, lastName, color} = this.props;
        const { ageOnChange } = this.state;

        return(
            <div>
            <h2>{firstName}, {lastName}</h2>
            <ul>
                <li>Age: {ageOnChange} </li>
                <li>Hair Color: {color}</li>
            </ul>
            <button onClick={this.handleClick} >Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default personalCard;