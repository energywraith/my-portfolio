import React from 'react';
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Header from 'components/core/Header';
import Container from 'components/core/Container';
import CardList from 'components/templates/CardList';
import useDesigns from './useDesigns';
import Design from './Design';

function Designs() {
  const { t } = useTranslation();

  const designs = useDesigns();

  return (
    <Styled.Designs>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <>
            <Container>
              <Header
                inView={inView}
                ref={ref}
              >
                {t('designs.header')}
              </Header>
            </Container>
            <CardList
              inView={inView}
              ref={ref}
              items={designs}
              renderComponent={(design) => (
                <Design
                  key={design.intlName}
                  name={t(`${design.intlName}.name`)}
                  description={t(`${design.intlName}.description`)}
                  image={design.image}
                  figmaLink={design.figmaLink}
                  demoLink={design.demoLink}
                />
              )}
            />
          </>
        )}
      </InView>
    </Styled.Designs>
  );
}

const Styled = {
  Designs: styled.section`
    width: 100%;
    padding: 0.5rem 0 1rem 0;
    color: ${(props) => props.theme.colors.white};
  `,
};

export default Designs;
