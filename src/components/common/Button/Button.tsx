import React from 'react';

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

interface ButtonStyleProps {
  type?: string;
  color?: 'default' | 'sub';
  radius?: string;
  width?: number;
  height?: number;
  padding?: string;
  weight?: string;
  url?: any;
}

interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonStyleProps>`
  border: none;
  padding: ${(props) => props.padding || '10px'};
  border-radius: ${(props) => props.radius};
  font-weight: ${(props) => props.weight};
  cursor: pointer;

  &.default {
    background-color: var(--main-color);
    color: white;
  }

  &.sub {
    background-color: white;
    color: var(--main-color);
  }

  &.sub:hover {
    background-color: #ebebeb;
  }

  &.write:before {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    float: left;
    margin: 0 6px 0 0;
    background: ${(props) => `url(${props.url}) no-repeat`};
    background-size: contain;
  }

  &.select:after {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    float: right;
    margin: 0 0 0 6px;
    background: ${(props) => `url(${props.url}) no-repeat`};
    background-size: contain;
  }
`;

const Button = ({
  type,
  color = 'default',
  radius = '30px',
  width,
  height,
  padding,
  children,
  weight = 'bold',
  url,
}: ButtonProps) => {
  const props = { type, color, radius, width, height, padding, weight, url };
  return (
    <StyledButton {...props} className={[type, color].join(' ')}>
      {children}
    </StyledButton>
  );
};

export default Button;
