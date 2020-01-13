// index.js is the main bitch, for every javascript code, ever.

import React    from 'react';
import ReactDOM from 'react-dom';

import Router from './router'; // ../ (back) or ./ (in folder) means it's a local file

import './index.css';

ReactDOM.render(<Router />, document.getElementById('root'));
