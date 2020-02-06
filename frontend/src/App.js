// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// 
// ReactDOM.render(<App />, document.getElementById('root'));
// 
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import axios from 'axios';
import './App.css';

function handleSubmit(event) {
  const text = document.querySelector('#char-input').value

  axios
    .get(`/char_count?text=${text}`).then(({data}) => {
      document.querySelector('#char-count').textContent = `${data.count} characters!`
    })
    .catch(err => console.log(err))
}

function App() {
  return(
    <div className="App">
      <div>
        <label htmlFor='char-input'>How many characters does</label>
        <input id='char-input' type='text' />
        <button onClick={handleSubmit}>have?</button>
      </div>
      <div>
        <h3 id='char-count'></h3>
      </div>
    </div>
  );
}

export default App;
