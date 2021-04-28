import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default function IsUserLoggedIn({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{ pathname: loggedInPath, state: { from: location } }}
            />
          );
        }

        return null;
      }}
    />
  );
}

IsUserLoggedIn.propTypes = {
    user: PropTypes.object,
    loggedInPath: PropTypes.string,
    children: PropTypes.object,
}