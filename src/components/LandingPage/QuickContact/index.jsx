import { Link } from "react-scroll"
import github from '../images/github.svg'
import mail from '../images/mail.svg'
import { QuickContactList, VerticalLine } from './index.style'

const QuickContact = () => {
  return (
    <QuickContactList>
      <VerticalLine />
      <li>
        <a href="https://github.com/energywraith" rel="noopener noreferrer">
          <img src={github} alt="github logo" />
        </a>
      </li>
      <li>
        <Link to="Contact" smooth={true} duration={1000} style={{ cursor: "pointer" }}>
          <img src={mail} alt="mail icon" />
        </Link>
      </li>
      <VerticalLine />
    </QuickContactList>
  )
}

export default QuickContact