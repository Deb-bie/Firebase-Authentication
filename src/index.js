import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/App/PrivateRoute';
// import reportWebVitals from './reportWebVitals';
// import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
<AuthProvider>
    {/* <PrivateRoute> */}
        <App />
    {/* </PrivateRoute> */}
</AuthProvider>,
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
