import React from 'react';
import List from './components/list/list';
import ExampleDetail from './components/exampledetail/exampledetail';

/**
 * Dit is onze hoofdcomponent. Alles valt binnen deze component
 */
class App extends React.Component {

    constructor() {
        super();
        
        this.state = {
            currentExample : undefined
        };
    }

    render() {
        return (
            <div className="app">
                <div className="app__title">
                    Code Examples
                </div>
                <div className="app__container">
                    <List
                        label="Je voorbeelden:"
                        onItemSelected={item => this.setState({currentExample : item})}
                    />
                    <ExampleDetail
                        {...this.state.currentExample}
                    />
                </div>
            </div>
        );
    }
}

export default App;