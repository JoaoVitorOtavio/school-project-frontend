import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import './Alunos.css'

import TableComponent from '../../components/table'

import { getAlunos, deleteAlunos } from '../../store/alunos'

const Turmas = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getAlunos()); }, [dispatch]);
    const alunos = useSelector(state => state.alunos.list)


    return (
        <div>
            <div className='hold-title-page'>
                <p className='title-page'>Gerenciamento de alunos.</p>
            </div>
            <div className='hold-btn-escolas'>
                <button className='commom-btn btn-alunos' onClick={() => history.push('/alunos/form')}>Cadastrar</button>
            </div>
            <TableComponent
                titles={['Nome', 'Turma']}
                attributes={['nome', 'turma']}
                datas={alunos}
                deleteAction={deleteAlunos}
                editUrl={'/alunos/form'}
                // click={() => deleteEscolas()}
            />

        </div>
    )
}

export default Turmas