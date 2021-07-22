import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        <Name name='John'></Name>
                        <Name name='Syed'></Name>
                        <Name name='Robert'></Name>
                        <Name name='Ronaldo'></Name>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
