import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import {firebase} from '../firebase/firebaseConfig'
import { useDispatch } from 'react-redux';
import { login } from '../components/actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [ checking, setchecking ] = useState(true)
    const [ isLogged, setIsLogged ] = useState(false)

    useEffect(() => {

        firebase.auth().onAuthStateChanged( (user) =>{
            if( user?.uid ){
               dispatch(login(user.uid , user.displayName))

               setIsLogged(true)
            }else{
                setIsLogged(false)
            }

           setchecking(false)
        })

    }, [ dispatch, setchecking, setIsLogged ])


    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }


    return (
        <Router>
            <div>       
                <Switch>
                    <PublicRoute 
                        isLogged= {isLogged}
                        path = "/auth"
                        component = { AuthRouter }
                    />
                    <PrivateRoute
                        isLogged= {isLogged}
                        exact
                        path="/"
                        component={JournalScreen}
                    />
                    <Redirect                    
                        to="/auth/login"
                    />  
                </Switch>
            </div>
      </Router>
    )
}
