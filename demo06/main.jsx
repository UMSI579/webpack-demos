const React = require('react');
const ReactDOM = require('react-dom');
// const style = require('./app.css');
import style from './app.css';

ReactDOM.render(
  <div>
    <h1 className={style.someH1Style}>Hello React (red because it was directly given the class via JS)</h1>
    <h2 className="someH2Style">Hello React (blue because it has the "someH2Style" class)</h2>
  </div>,
  document.getElementById('example')
);
