import React from 'react';

import styled from 'styled-components';

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  size: 'big' | 'normal';
  placeholder: string;
}

const SearchBar = ({ value, setValue, size, placeholder }: Props) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Container size={size}>
      <SearchInput
        size={size}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleValueChange(e)}
      />
      <SearchButtonWrapper size={size}>
        <SearchButton>
          <svg
            viewBox='0 0 24.00 24.00'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            width={size === 'normal' ? '27px' : '36px'}
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
              stroke='#CCCCCC'
              strokeWidth='0.096'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <path
                d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
                stroke='#5c5c5c'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>{' '}
            </g>
          </svg>
        </SearchButton>
      </SearchButtonWrapper>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div<{ size: string }>`
  display: flex;
  flex-direction: ${(props) => (props.size === 'normal' ? 'row' : 'row-reverse')};
  width: ${(props) => (props.size === 'normal' ? '260px' : '695px')};
  height: ${(props) => (props.size === 'normal' ? '40px' : '70px')};
  padding: 0px 10px;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
`;

const SearchInput = styled.input<{ size: string }>`
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 4px;
  font-size: ${(props) => (props.size === 'normal' ? '1rem' : '1.4rem')};
  box-sizing: border-box;
  outline: none;
`;

const SearchButtonWrapper = styled.div<{ size: string }>`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.size === 'normal' ? 'auto' : '10%')};
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
`;
