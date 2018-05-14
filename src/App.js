import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc']
        }
    }
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <ColorPicker/>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting/>
                        <Reset/>
                    </div>
                    <Result/>
                </div>
            </div>
        );
    }
}

export default App;
