import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ACCOUNT, ADMIN, HOME, LANDING, PAGE_NOT_FOUND, PASSWORD_FORGET, SIGN_IN, SIGN_UP } from '../../constants/routes';
import Home from '../Home';
import Landing from '../Landing';
// import * as ROUTES from '../../constants/routes'


import Navigation from '../Navigation/index'
import PasswordForget from '../PasswordForget';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Account from '../Account';
import Admin from '../Admin';
import PrivateRoute from './PrivateRoute';
import PageNotFound from '../../PageNotFound';


const App = () => {

    return (
        <Router>
            <Fragment>
            <Navigation />

            <hr />

            <Routes>

                {/* setting the routing for the landing page */}
                <Route exact path={LANDING} element={<Landing/> } />

                <Route path={SIGN_UP} element={<SignUp />} />

                <Route path={SIGN_IN} element={<SignIn />} />

                <Route path={PASSWORD_FORGET} element={<PasswordForget />} />

                <Route path={HOME} element={<Home />} />

                <Route path={ACCOUNT} element={<Account />} />

                <Route path={ADMIN} element={<Admin />} />

                <Route path={PAGE_NOT_FOUND} element={<PageNotFound />} />

            </Routes>
            </Fragment>              

        </Router>
    )
};

export default App
