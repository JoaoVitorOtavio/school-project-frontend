import React, { useState } from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { postUserSignin } from '../../store/user'


const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div className='background'>
            <div className='hold-title'>
                <h1 className='login-title'>Project FrontEnd !</h1>
            </div>
            <div className='hold-content'>
                <div className='login-img' style={{ width: '50%' }}>

                </div>
                <div className='login-contents'>
                    <div className='hold-simple-text' >
                        <p className='simple-text'>Hello :) </p>
                        <p className='simple-text'> Welcome to my project. </p>
                    </div>
                    <div className='hold-centered-text'>
                        <p className='simple-text'>Login<span style={{ color: '#949292' }}> your account.</span> </p>
                        <p className='placeholder-login'>Usúario</p>
                        <input className='input-login' value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        <p className='placeholder-login'>Senha</p>
                        <input className='input-login' value={senha} type='password' onChange={(e) => setSenha(e.target.value)} />
                        <p className='recover' onClick={() => console.log('Sorry, maybe in V2 :(')}>forget password?</p>
                    </div>
                    <div className='hold-btn-login'>
                        <button onClick={() => dispatch(postUserSignin(usuario, senha))} className='login-btn'>Login</button>
                    </div>
                    <p className='create' onClick={() => history.push('/user/register')}> Create Account.</p>
                </div>
            </div>
        </div >
    )
}

export default Login