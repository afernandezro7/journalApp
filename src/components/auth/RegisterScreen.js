import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { startRegisterWithEmailPasswordName } from '../actions/auth';

export const RegisterScreen = () => {

    const [registerFormValues,  handleInputChange] = useForm({
        name: 'Anabel',
        email: 'anitalaculebrita@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const {name, email, password, password2 }= registerFormValues
    
    const dispatch = useDispatch()
    const {msgError} = useSelector(state => state.ui)

 

    const handleFormSubmit = e =>{
        e.preventDefault();
        
        //validar campos
        if(isFormValid(name,email,password,password2)){

            //crear usuario en la base de datos
            dispatch(startRegisterWithEmailPasswordName( email,password, name))
            

        }

        
    }
    
    
    const isFormValid = (name,email,password,password2)=>{
        let errorMessage;  
        
        if(name.trim().length === 0 ){
            errorMessage='Name is required'
            dispatch(setError(errorMessage))
            return false
        }else if( !validator.isEmail(email)  ){
            errorMessage= 'Email valid is required'
            dispatch(setError(errorMessage))
            return false
        }else if(password.trim().length === 0 || password2.trim().length === 0){
            errorMessage = 'Password is required'
            dispatch(setError(errorMessage))
            return false
        }
        else if(password !== password2){
            errorMessage = 'Passwords need to be equal'
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

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form
                onSubmit={ handleFormSubmit }
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
                    placeholder="Name" 
                    name="name"   
                    className="auth__input" 
                    value = { name }  
                    onChange ={ handleInputChange }               
                />
                <input 
                    type="text" 
                    placeholder="Email" 
                    name="email"   
                    className="auth__input" 
                    value = { email }  
                    onChange ={ handleInputChange }                  
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    className="auth__input"
                    value = { password }  
                    onChange ={ handleInputChange }
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="password2" 
                    className="auth__input"
                    value = { password2 }  
                    onChange ={ handleInputChange }
                />
                <button 
                    type="submit" 
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>


                <Link
                    className="link"
                    to="/auth/login"
                >
                    Back to Login
                </Link>
                
            </form>
        </>
    )
}
