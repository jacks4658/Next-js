/* eslint-disable prettier/prettier */
import React from 'react'
import * as S from '../Main/styles'


function RightNav({ open }) {


  return (
    <S.Ul open={open}>
      <li>Home</li>
      <li>Sobre</li>
      <li>Contatos</li>
      <li>Portifolio</li>
    
    </S.Ul>
  )
}

export default RightNav
