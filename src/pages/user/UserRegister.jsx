import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


import './User.css'

import { postUser } from '../../store/user'

const UserRegister = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div className='hold-form' style={{ display: "flex", alignItems: 'center' }} >
            <div className='form-container' >
                <div className='hold-title-register' >
                    <h1 className='title-register'>Registro de novo usúario</h1>
                </div>
                <div className='hold-input-form'>
                    <div className='hold-name-form'>
                        <p className='name-form'>Usúario:</p>
                    </div>
                    <div className='input-form'>
                        <input
                            className='input-register'
                            placeholder='Voldemort'
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>
                </div>
                <div className='hold-input-form'>
                    <div className='hold-name-form'>
                        <p className='name-form'>Senha:</p>
                    </div>
                    <div className='input-form'>
                        <input
                            type='password'
                            className='input-register'
                            placeholder='*****'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                </div>
                <div className='hold-input-form'>
                    <div className='hold-name-form'>
                        <p className='name-form'>Email:</p>
                    </div>
                    <div className='input-form'>
                        <input
                            className='input-register'
                            placeholder='harry@mail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div style={{ padding: '30px 30px 0px 30px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <button
                        style={{ width: '48%' }}
                        className='commom-btn'
                        onClick={() => dispatch(postUser(usuario, senha, email))}>
                        Registrar
                    </button>
                    <button style={{ width: '48%' }} className='commom-btn' onClick={() => history.push('/')}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}


export default UserRegister