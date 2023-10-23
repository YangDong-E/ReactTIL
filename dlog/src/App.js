import React from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
    const host = async () => {
        axios.get('/api/host').then((res) => console.log(res.data.host));
    };

    useEffect(() => {
        host();
    });

    return (
        <div className="App">
            <h3>
                Welcome to <u>{host}</u> Blog!{' '}
            </h3>
        </div>
    );
}

export default App;
