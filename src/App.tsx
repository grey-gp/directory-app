import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

export interface directoryEntry {
    name: string,
    id: number,
    email: string
}

export interface directoryState {
    directory: directoryEntry[]
}

class App extends Component<{}, directoryState> {

    state: directoryState = {
        directory: [ 
            {
                name: 'Graham',
                id: 0,
                email: 'graham@com'
            },
            {
                name: 'Anessa',
                id: 1,
                email: 'anessa@com'
            },
            {
                name: 'Marie',
                id: 2,
                email: 'marie@com'
            },
        ]
        
    };

    render() {

        return (
            <div className="App">
                <CardList directory={this.state.directory} />
            </div>
        );
    }
}

export default App;
