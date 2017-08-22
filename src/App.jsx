import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            api_key: 'c8303e90962e3a5ebd5a1f260a69b138',
            limit: null,
            artist: null,
            country: null,
            dataArtist: null
        }
    }
    search(){
        const BASE_URL = 'http://api.musicgraph.com/api/v2/artist/suggest?';
        const FETCH_URL = `${BASE_URL}api_key=${this.state.api_key}&prefix=${this.state.query}&limit=${this.state.limit}`;
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({dataArtist: json.data});
        });
    }
    render(){
        return(
            <div className="App">
                <div className="App-title">Music Master From App</div>
                <form>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text" placeholder="Enter An Artist" 
                                value={this.state.query} 
                                onChange={event => {this.setState({query: event.target.value})}}
                                onKeyPress={event => {
                                    console.log(event.key);
                                    if (event.key === 'Enter'){
                                        this.search()
                                    }
                                }}
                                />
                            <InputGroup.Addon onClick={() => {this.search()}}>
                                <Glyphicon glyph="search"></Glyphicon>
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </form>
                <Profile data={this.state.dataArtist}/>
                <div className="gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;