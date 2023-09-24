import React from 'react';

import styled from 'styled-components';

import SearchIcon from 'assets/images/search-icon.svg';

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
          <SearchIcon width={size === 'normal' ? '27px' : '36px'} />
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
