import React from 'react'
import styled from '@emotion/styled'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    color: white;
    width: 100%;
    padding: 10px;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    border-radius: 5px;
    transition: background-color .3s;

    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`
export const Formulario = () => {
  return (
    <form>
        <InputSubmit 
            type="submit" 
            value='Cotizar' 
        />
    </form>
  )
}
