// // import React, { Children } from 'react';
// // import { useAuth } from '../../contexts/AuthContext';
// // import { SIGN_IN, HOME } from '../../constants/routes';
// // import { useNavigate } from 'react-router';


// // // the private route is just a wrapper around the current route
// // // it makes it possible for someone who is not loged in not to be able access
// // // the landing page or log out


// // function PrivateRoute() {

// //     const { currentUser } = useAuth()
// //     const navigate = useNavigate()

// //     return (
// //         currentUser ? navigate(HOME) : navigate(SIGN_IN)
// //     );

// // }

// // export default PrivateRoute



// import { Route, useNavigate } from 'react-router-dom';
  
//   function PublicRoute({ children, isAuthenticated, ...rest }) {

    
//     return (
//       <Route
//         {...rest}
//         render={
//           ({ location }) => (
//             !isAuthenticated ? (
//               children
//             ) : (
//               <Redirect
//                 to={{
//                   pathname: '/home',
//                   state: { from: location }
//                 }}
//               />
//             ))
//         }
//       />
//     );
//   }
  
//   export default PublicRoute;
