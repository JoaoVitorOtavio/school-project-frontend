import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import './Escolas.css'

import TableComponent from '../../components/table'

import { getEscolas, deleteEscolas } from '../../store/escolas'

const Escolas = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getEscolas()); }, [dispatch]);
    const escolas = useSelector(state => state.escolas.list)


    return (
        <div>
            <div className='hold-title-page'>
                <p className='title-page'>Gerenciamento de escolas.</p>
            </div>
            <div className='hold-btn-escolas'>
                <button className='commom-btn btn-alunos' onClick={() => history.push('/escolas/form')}>Cadastrar</button>
            </div>
            <TableComponent
                titles={['Nome', 'Cnpj']}
                attributes={['nome', 'cnpj']}
                datas={escolas}
                deleteAction={deleteEscolas}
                editUrl={'/escolas/form'}
            />

        </div>
    )
}

export default Escolas