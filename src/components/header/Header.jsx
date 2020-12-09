import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signout } from '../../store/user'

import './Header.css'

import logo from '../../assets/logo.png';

const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div className='hold-menu'>
            <div className='hold-icon-menu' style={{ height: '50px' }}>
                <img src={logo} style={{ objectFit: 'contain', height: '100%' }} />
            </div>
            <div className='hold-items'>
                <p className='menu-item' onClick={() => history.push('/escolas')}>Escolas</p>
                <p className='menu-item' onClick={() => history.push('/turmas')}> Turmas</p>
                <p className='menu-item' onClick={() => history.push('/alunos')}> Alunos</p>
                <p className='menu-item' onClick={() => dispatch(signout())} >Sair</p>
            </div>
        </div>
    )
}

export default Header