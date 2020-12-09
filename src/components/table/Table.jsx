import React from 'react'
import { Table, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux';

import './Table.css'

const TableComponent = ({ titles, attributes, datas, deleteAction, editUrl }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onDelete = (id) => {
        dispatch(deleteAction(id))
    }

    return (
        <div id='hold-table'>
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        {
                            titles.map((title, index) => {
                                return (
                                    <th key={index}>{title}</th>
                                )
                            })
                        }
                        <th style={{ display: "flex", justifyContent: "center" }} >#</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((data, index) => {
                            return (
                                <tr key={index}>
                                    {
                                        attributes.map((attr, index2) => {
                                            return (
                                                <td key={index2}>{data[attr]}</td>
                                            )
                                        })
                                    }
                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                        <Button variant="outline-warning" onClick={() => history.push(`${editUrl}/${data._id}`)} >Editar</Button>
                                        <Button variant="outline-danger" onClick={() => onDelete(data._id)}>Deletar</Button>
                                    </div>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div >
    )
}

TableComponent.propTypes = {
    titles: PropTypes.array,
    attributes: PropTypes.array,
    datas: PropTypes.array,
    children: PropTypes.any,
    click: PropTypes.any,
    deleteAction: PropTypes.func,
    editUrl: PropTypes.string,
}

export default TableComponent