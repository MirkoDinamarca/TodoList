import React from 'react'

const Input = ({search, onChangeHandler}) => {

    return (
        <input type="text" value={search} placeholder='Buscar...' onChange={onChangeHandler} />
    )
}

export default Input