import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import brandIcon from 'assets/me-annoyed.jpg';
import PropTypes from 'prop-types';

function Brand({ variant, className }) {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper footerVariant={variant === 'footer'} className={className}>
      <img src={brandIcon} alt="brandIcon" />
      <span>{t('name')}</span>
      {variant !== 'footer' && <span>{t('description.short')}</span>}
    </Styled.Wrapper>
  );
}

const Styled = {
  Wrapper: styled.div`
    display: grid;
    grid-template: 1fr 1fr / auto auto;
    column-gap: 0.5em;
    align-items: center;

    ${({ footerVariant }) => footerVariant && css`
      display: flex;
      font-size: 2em;
    `}

    & img {
      grid-column: 1;
      grid-row: 1/3;
      height: 100%;
      width: auto;
      max-height: 2em;
      border-radius: 4px;
    }

    & span {
      font-weight: 400;
      font-size: 0.8em;
    }
  `,
};

Brand.propTypes = {
  variant: PropTypes.oneOf(['default', 'footer']),
  className: PropTypes.string,
};

Brand.defaultProps = {
  variant: 'default',
  className: '',
};

export default Brand;
