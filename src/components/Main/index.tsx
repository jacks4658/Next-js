/* eslint-disable prettier/prettier */

import * as S from './styles'
import Navbar from '../Nav/Navbar'
const Main = ({
  title = 'Jk System',
  description = 'Jk System Desenvolvido com TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  
  
  <S.Wrapper>
 
<Navbar></Navbar>

    
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="https://firebasestorage.googleapis.com/v0/b/aplicativo-35650.appspot.com/o/imagens%2FAplicativoDes.gif?alt=media&token=3287bc0e-11f6-4ab2-9d50-5289195b8744"
      alt="Demonstração do Software Desktop em produção."
    
    
    />
    
  </S.Wrapper>
)

export default Main
