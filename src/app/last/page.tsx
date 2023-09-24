'use client';

import React, { useState } from 'react';

import styled from 'styled-components';

import LastTopicList from '@/components/LastTopicList/LastTopicList';
import SearchBar from '@/components/SearchBar/SearchBar';
import FilterDropDownIcon from 'assets/images/filter-drop-down-icon.svg';

const LastTopicsPage = () => {
  const [value, setValue] = useState('');
  const [filterState, setFilterState] = useState('최신순');

  return (
    <Container>
      <SearchFilterWrapper>
        <FilterWrapper id='filter'>
          <FilterButton>
            {filterState}
            <FilterDropDownIcon />
          </FilterButton>
          <div className='list'>
            <FliterUl>
              <FilterLi>최신순</FilterLi>
              <FilterLi>과거순</FilterLi>
              <FilterLi>인기순</FilterLi>
            </FliterUl>
          </div>
        </FilterWrapper>
        <SearchBar
          size='normal'
          value={value}
          setValue={setValue}
          placeholder='글감을 입력해 주세요.'
        />
      </SearchFilterWrapper>
      <LastTopicList />
    </Container>
  );
};

export default LastTopicsPage;

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 80px;
`;

const SearchFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  #filter:hover > .list {
    display: block;
  }
`;

const FilterWrapper = styled.div`
  position: relative;

  .list {
    display: none;
    position: absolute;
    width: 110px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    background: white;
    transition: display 1s ease-in-out;
  }
`;

const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  background-color: #eee;
  font-size: 1rem;
  font-weight: bold;
  color: #919191;
  cursor: pointer;

  svg {
    width: 25px;
  }
`;

const FliterUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FilterLi = styled.li`
  cursor: pointer;
`;
