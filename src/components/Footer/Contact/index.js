import { Lists, List, ListHeader, LinkStyled } from './index.style'

const Contact = () => {
  return (
    <Lists>
      <List>
        <ListHeader> Quick Links </ListHeader>
        <li> <LinkStyled to="Home" smooth={true} duration={1000}> Home </LinkStyled> </li>
        <li> <LinkStyled to="Projects" smooth={true} duration={500}> Projects </LinkStyled> </li>
      </List>
      <List>
        <ListHeader> Contact </ListHeader>
        <li> jalochadev@gmail.com </li>
        <li> <a href="https://github.com/energywraith" rel="noopener noreferrer"> Github </a> </li>
      </List>
    </Lists>
  )
}

export default Contact