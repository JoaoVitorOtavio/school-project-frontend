import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import './Turmas.css'

import TableComponent from '../../components/table'

import { getTurmas, deleteTurmas } from '../../store/turmas'

const Turmas = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getTurmas()); }, [dispatch]);
    const turmas = useSelector(state => state.turmas.list)


    return (
        <div>
            <div className='hold-title-page'>
                <p className='title-page'>Gerenciamento de turmas.</p>
            </div>
            <div className='hold-btn-escolas'>
                <button className='commom-btn btn-alunos' onClick={() => history.push('/turmas/form')}>Cadastrar</button>
            </div>
            <TableComponent
                titles={['Nome']}
                attributes={['nome']}
                datas={turmas}
                deleteAction={deleteTurmas}
                editUrl={'/turmas/form'}
            />

        </div>
    )
}

export default Turmas