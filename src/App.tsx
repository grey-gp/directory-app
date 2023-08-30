import { Component } from 'react';
import './App.css';

type nameState = {
    name: string
}

class App extends Component<{}, nameState> {

    state: nameState = {
        name: 'Graham'
    };

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <p>Hi {this.state.name}</p>
                    <button onClick={
                        () => {
                            this.setState((state, props) => {
                                return {
                                    name: 'Anessa'
                                };
                            }, () => {})
                        }
                    }>Click Me</button>
                </header>
            </div>
        );
    }
}

export default App;
