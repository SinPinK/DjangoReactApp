import logo from './logo.svg';
import './App.css';

import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

function App() {
    const [content, setContent] = useState('Go Hack!')

    useEffect(() => {
        axios({
            method: 'GET',
            url: window.location.origin+'/api/test/',
        }).then(response => {
            setContent(JSON.parse(response.data)['test'])
        }).catch(error => {
            console.log('error from useEffect in App.js:', error)
        })
    }, [])

  return (
    <Fragment className="App">
        <h1>{content}</h1>
    </Fragment>
  );
}

export default App;
