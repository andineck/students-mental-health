const React = require('react')
const ReactDOM = require('react-dom')

const { IndexPage } = require('./browser/indexPage')

ReactDOM.render(
  <IndexPage />,
  document.getElementById('content')
);