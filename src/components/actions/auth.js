import { types } from "../../types/types";
import { googleAuthProvider,firebase } from "../../firebase/firebaseConfig";
import { finishLoading, startLoading } from "./ui";

import Swal from 'sweetalert2'


/* 
    MIDLESWARES
*/
export const startLoginEmailPassword = (email,password)=>{
    return (dispatch)=>{

        dispatch( startLoading ())

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(({user}) =>{
                
                dispatch( login(user.uid,user.displayName))

                dispatch( finishLoading())

            })
            .catch(({message}) =>{
                console.log(message);

                dispatch( finishLoading())

                Swal.fire('Error',message,'error')
            })
        
        
    }
}

export const startRegisterWithEmailPasswordName = (email,password,name)=>{
    return (dispatch)=>{

        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then( async({user}) =>{
                await user.updateProfile({displayName: name})
                
                dispatch( 
                    login(user.uid,user.displayName) 
                )
            })
            .catch(({message}) => {

                Swal.fire('Error',message,'error')
            })
    }
}

export const startGoogleLogin= ()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) =>{
                dispatch( login(user.uid,user.displayName) )
            })
    }
}

export const logoutFirebase= ()=>{
    return async (dispatch)=>{

        await firebase.auth().signOut()

        dispatch(logout())
        

    }
}


/*
    ACTIONS OF AUTH REDUCERS
*/
export const login = (uid, displayName)=>(
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)

export const logout = ()=>(
    {
        type: types.logout
    }
)

