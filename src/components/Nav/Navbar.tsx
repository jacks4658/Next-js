/* eslint-disable prettier/prettier */
import React from 'react'
import Burger from './Burger'
import * as S from '../Main/styles'

const Navbar = () => {
  return (
    <S.Nav>
      <S.Logo
        src="https://firebasestorage.googleapis.com/v0/b/aplicativo-35650.appspot.com/o/jk%20System_DobleColor.png?alt=media&token=99702801-aceb-4737-98ea-cc6b04e9e0e1"
        alt="Imagem do logo jk sytem escrito ao lado."
      />
      <Burger />
    </S.Nav>
  )
}

export default Navbar
