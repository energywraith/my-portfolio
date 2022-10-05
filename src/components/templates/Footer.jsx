import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import List from 'components/core/List';
import MailIconSVG from 'assets/mail.svg';
import GithubIconSVG from 'assets/github.svg';
import OldSchoolMacJPG from 'assets/mac-old-school.jpg';
import Container from 'components/core/Container';

function Footer() {
  const { t } = useTranslation();

  return (
    <Styled.Footer>
      <Styled.Container>
        <Styled.Aside><img src={OldSchoolMacJPG} alt="Hello" /></Styled.Aside>
        <Styled.Lists>
          <List
            header={t('footer.overview.header')}
            elements={[
              { label: t('footer.overview.home'), scrollTo: 'Home' },
              { label: t('footer.overview.projects'), scrollTo: 'Projects' },
              { label: t('footer.overview.contactMe'), scrollTo: 'Contact' },
            ]}
            isVertical
          />
          <List
            header={t('footer.explore.header')}
            elements={[
              { label: t('footer.explore.project1'), to: 'https://github.com/energywraith/job-application-tracker' },
              { label: t('footer.explore.project2'), to: 'https://github.com/energywraith/winamp' },
              { label: t('footer.explore.project3'), to: 'https://github.com/energywraith/genius-music-app' },
            ]}
            isVertical
          />
          <List
            header={t('footer.findMe.header')}
            elements={[
              { label: t('footer.findMe.github'), icon: GithubIconSVG, to: 'https://github.com/energywraith' },
              { label: t('footer.findMe.mail'), icon: MailIconSVG, to: 'mailto:jalochadev@gmail.com' },
            ]}
            isVertical
          />
        </Styled.Lists>
        <Styled.Copyright>
          {t('footer.copyright', { year: new Date().getFullYear(), name: t('name') })}
          <Styled.NoWrap style={{ whiteSpace: 'nowrap' }}>{t('footer.madeWithLove')}</Styled.NoWrap>
        </Styled.Copyright>
      </Styled.Container>
    </Styled.Footer>
  );
}

const Styled = {
  Footer: styled.footer`
    color: ${({ theme }) => theme.colors.white};
    padding-top: 20px;
    background: #0f1012;
    box-shadow: 0 0 2px #0f1012;
  `,
  Container: styled(Container)`
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  Aside: styled.aside`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
    
    img {
      position: relative;
      top: -25%;
      right: -25%;
      height: 200%;

      opacity: 0.1;
      @media (min-width: 1200px) {
        opacity: 1;
      }
    }
  `,
  Lists: styled.div`
    display: flex;
    padding: 20px 0;
    z-index: 1;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 60px;
  `,
  Copyright: styled.div`
    padding: 12px 0 30px 0;
    opacity: 0.8;
    text-align: center;
    align-self: flex-start;
    margin-top: 12px;
    width: 100%;
    line-height: 28px;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      text-align: start;
    }
  `,
  NoWrap: styled.span`
    white-space: nowrap;
  `,
};

export default Footer;
