import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './index.css'



const Navigation = () => {
    // we are creating the navbar
    return(
    <nav>
        <div className="containers">
        <ul>
            <li>
                <Link className="Link" to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>

            <li>
                <Link className="Link" to={ROUTES.LANDING}>Landing</Link>
            </li>

            {/* <li>
                <Link className="Link" to={ROUTES.HOME}>Home</Link>
            </li> */}

            {/* <li>
                <Link className="Link" to={ROUTES.ACCOUNT}>Account</Link>
            </li> */}

            {/* <li>
                <Link className="Link" to={ROUTES.ADMIN}>Admin</Link>
            </li> */}

            <li>
                <Link className="Link" to={ROUTES.SIGN_UP}>Sign Up</Link>
            </li>
        </ul>
        </div>

    </nav>
    )
}

export default Navigation;
