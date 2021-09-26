import Contact from "./Contact";
import { FooterContainer, FooterBrand, About, Copyright } from "./index.style";

const Footer = () => {
  return (
    <FooterContainer className="rwd-container">
      <About>
        <h3> Adam Jałocha </h3>
        <p>
          I'm not good at self-descriptions, so I thought that I could give you
          a reason why I chose that road. I find it fascinating how even minor
          changes like colors, element positioning can change our perception on
          idea, topic or product. Also, the fact how many people I can help or
          provide fun by creating a website is astonishing.
        </p>
        <span>It's quite cool, don't you think?</span>
      </About>
      <Contact />
      <Copyright> © 2021 Adam Jałocha </Copyright>
    </FooterContainer>
  );
};

export default Footer;
