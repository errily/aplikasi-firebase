import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useFirebase } from './FirebaseProvider';

export default function PrivateRoute({component: Component
    ,... restProps}) {

        //const user = {name : 'erril'};
        //const user = null;
        const {user} = useFirebase();
        console.log(user);
    return (
            <Route
            {...restProps}

            render={props => {
                    return user ? 
                    <Component {...props} user={user}/>
                    :
                    <Redirect to={{
                        pathname:"/login",
                        state:{
                            from : props.location
                        }
                    }} />
            }}
            />
    );
}
