const React = require('react')
const ReactDOM = require('react-dom')

const { Routes } = require('./browser/Routes')

ReactDOM.render(
  <Routes />,
  document.getElementById('content')
);