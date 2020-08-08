import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
  //   console.log(rest.path);
  //   if (rest.path === "/") {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
  //   } else {
  //     return (
  //       <Route
  //         {...rest}
  //         render={(props) =>
  //           authenticated === true ? (
  //             <Redirect to="/" />
  //           ) : (
  //             <Component {...props} />
  //           )
  //         }
  //       />
  //     );
  //   }
};
const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
  };
};

export default connect(mapStateToProps)(AuthRoute);
