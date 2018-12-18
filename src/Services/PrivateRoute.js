import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserService } from './UserService';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route 
        {...rest}
        render = { props => 
           UserService.IsLogin() ? (
                <Component {...props} />
            ) : (
                <Redirect to={"/login?redirect=" + encodeURIComponent(props.location.pathname)} />
            )
        }
    />
);

// PrivateRoute.propTypes = {
//     UserService: UserService
// };

export default PrivateRoute;