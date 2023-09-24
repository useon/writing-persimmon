import React from 'react';

import styled from 'styled-components';

interface ButtonStyleProps {
  type?: string;
  color?: 'default' | 'sub';
  radius?: string;
  width?: number;
  height?: number;
  padding?: string;
  weight?: string;
  size?: number;
  onClick?: () => void;
}

interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
}

const Button = ({
  type,
  color = 'default',
  radius = '30px',
  width,
  height,
  padding,
  children,
  weight = 'bold',
  size,
  onClick,
}: ButtonProps) => {
  const props = { type, color, radius, width, height, padding, weight, size };
  return (
    <StyledButton {...props} className={[type, color].join(' ')} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonStyleProps>`
  padding: ${(props) => props.padding || '10px'};
  border: none;
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

  &.write {
    display: flex;
    margin: 0 auto;
    gap: 6px;
  }

  &.select {
    display: flex;
    margin: 0 auto;
    gap: 6px;
  }
`;
