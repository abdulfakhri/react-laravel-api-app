import React from 'react';
import { PureComponent } from 'react';

class Name extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            name: '',

        };


    

    render() {
        return (

            < div >
                <input onChange={this.handleInputChange.bind(this)} />
                <p>Hello {this.state.name}</p>
            </div >

        );
    }

}

export default Name;


