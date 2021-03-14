/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 0.10rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

export const Logo = styled.img`
  width: 5rem;
  margin-bottom: 1rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(80rem, 100%);
`

export const  StyledBurger = styled.menu<{ open: boolean }>`
width: 2rem;
height: 2rem;
position: fixed;
top: 80px;
right: 20px;
z-index: 20;
display: none;


@media (max-width: 768px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}

div {
  width: 2rem;
  height: 0.25rem;
  background-color: ${({ open }) => open ? '#F39A4A' : '#F39A4A'};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;

  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }

  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`
export const Nav = styled.nav`
  width: 100%;
  height:60px;
  border-bottom: 0.2px solid #FF6146;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  opacity: 0.80;
  font-size:18px;

 
  }
`
export const Ul = styled.ul<{open:boolean}>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #FF6146;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
      font-size:15px;

    }
  }
`