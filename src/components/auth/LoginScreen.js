import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import {startGoogleLogin, startLoginEmailPassword } from '../actions/auth';


export const LoginScreen = () => {

    const dispatch = useDispatch()
    const {msgError, loading} = useSelector(state => state.ui)

    const [formvalues, handleInputChange] =useForm({
        email: 'anitalaculebrita@gmail.com',
        password: '123456'
    })
    const {email, password} = formvalues;

    const handleLogin = e =>{
        e.preventDefault();
        //validar
        
        if(isFormValid(email,password)){
            //Accion login
            
            dispatch(startLoginEmailPassword(email,password))
        }

        
    }

    const isFormValid = (email,password)=>{
        let errorMessage;  
        
        if( !validator.isEmail(email)  ){
            errorMessage= 'Email valid is required'
            dispatch(setError(errorMessage))
            return false
        }
        else if(password.length<6){
            errorMessage = 'Password must be longer than five characters'
            dispatch(setError(errorMessage))
            return false
        }

        dispatch(removeError())
        return true;
    }

    const handleGoogleLogin = ()=>{

        dispatch(startGoogleLogin())
    }

    return (
      <>
        <h3 className="auth__title">Loging</h3>

        <form
            onSubmit={handleLogin}
        >
            {
                msgError
                &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
            }
            <input 
                type="text" 
                placeholder="Email" 
                name="email"   
                className="auth__input"
                value={ email }
                onChange={ handleInputChange }
            />
            <input 
                type="password" 
                placeholder="Password" 
                name="password" 
                className="auth__input"
                value={ password }
                onChange={ handleInputChange }
            />
            <button 
                type="submit" 
                className="btn btn-primary btn-block"
                disabled = {loading}
            >
                Login
            </button>

            
            <div className="auth__social-networks">
                <p>Login with Social Networks</p>

                <div 
                    className="google-btn"
                    onClick = {handleGoogleLogin}
                >
                    <div className="google-icon-wrapper">
                    <img
                        className="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="google button"
                    />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            </div>

            <Link
                className="link"
                to="/auth/register"
            >
                Create new account
            </Link>
            
        </form>
      </>
    );
}
