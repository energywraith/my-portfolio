import { FooterContainer, FooterBrand, Lists, List, ListHeader, LinkStyled, Copyright } from "./index.style"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBrand />
      <Lists>
        <List>
          <ListHeader> Quick Links </ListHeader>
          <li> <LinkStyled to="Home" smooth={true} duration={1000}> Home </LinkStyled> </li>
          <li> <LinkStyled to="Projects" smooth={true} duration={500}> Projects </LinkStyled> </li>
        </List>
        <List>
          <ListHeader> Contact </ListHeader>
          <li> Email@Email.com </li>
          <li> <a href="https://github.com/energywraith" rel="noopener noreferrer"> Github </a> </li>
        </List>
      </Lists>
      <Copyright> © 2021 Adam Jałocha </Copyright>
    </FooterContainer>
  )
}

export default Footer