// import React from 'react';
// import Firebase from '.';


// // creating only one instance of the Firebase class  to be used by the various react components.
// // this will prevent multiple instannces of firebase to be called making it less error prone

// // The createContext() function essentially creates two components. 
// // The FirebaseContext.Provider component is used to provide a Firebase 
// // instance once at the top-level of your React component tree, which we will do in this section; 
// // and the FirebaseContext.Consumer component is used to retrieve the Firebase instance if it is needed in the React component.




// const FirebaseContext = React.createContext(null);

// export const withFirebase = Component => props => (
//     <FirebaseContext.Consumer>
//         {Firebase => <Component {...props} />}
//     </FirebaseContext.Consumer>
// );

// export default FirebaseContext;


