/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import RightNav from './RightNav'
import * as S from '../Main/styles'
const Burger = () => {
const [open, setOpen] = useState(false)

  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <RightNav open={open} />
    </>
  )
}

export default Burger
