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
  size?: number;
  onClick?: () => void;
}

interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonStyleProps>`
  border: none;
  padding: ${(props) => props.padding || '10px'};
  border-radius: ${(props) => props.radius};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
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

export const Button = ({
  type,
  color = 'default',
  radius = '30px',
  width,
  height,
  padding,
  children,
  weight = 'bold',
  url,
  size,
  onClick,
}: ButtonProps) => {
  const props = { type, color, radius, width, height, padding, weight, url, size };
  return (
    <StyledButton {...props} className={[type, color].join(' ')} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
