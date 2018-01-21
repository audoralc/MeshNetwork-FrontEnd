import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill';

import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';

import App from 'containers/App';
import './app.css';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));

if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// import '!file-loader?name=[name].[ext]!./favicon.ico';
// import '!file-loader?name=[name].[ext]!./manifest.json';

// import App from 'containers/App';


// ReactDOM.render((
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
// ), document.getElementById('app'));

// if (process.env.NODE_ENV === 'production') {
//   require('offline-plugin/runtime').install(); // eslint-disable-line global-require
// }


