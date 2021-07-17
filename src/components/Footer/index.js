import Contact from "./Contact"
import { FooterContainer, FooterBrand, Copyright } from "./index.style"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBrand />
      <Contact />
      <Copyright> © 2021 Adam Jałocha </Copyright>
    </FooterContainer>
  )
}

export default Footer