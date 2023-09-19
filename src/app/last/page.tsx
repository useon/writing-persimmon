'use client';

import React, { useState } from 'react';

import styled from 'styled-components';

import LastTopicList from '@/components/LastTopicList/LastTopicList';
import SearchBar from '@/components/SearchBar/SearchBar';

const LastTopicsPage = () => {
  const [value, setValue] = useState('');
  const [filterState, setFilterState] = useState('최신순');

  return (
    <Container>
      <SearchFilterWrapper>
        <FilterWrapper id='filter'>
          <FilterButton>
            {filterState}
            <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M6.46967 8.96967C6.76256 8.67678 7.23744 8.67678 7.53033 8.96967L12 13.4393L16.4697 8.96967C16.7626 8.67678 17.2374 8.67678 17.5303 8.96967C17.8232 9.26256 17.8232 9.73744 17.5303 10.0303L12.5303 15.0303C12.3897 15.171 12.1989 15.25 12 15.25C11.8011 15.25 11.6103 15.171 11.4697 15.0303L6.46967 10.0303C6.17678 9.73744 6.17678 9.26256 6.46967 8.96967Z'
                  fill='#919191'
                ></path>{' '}
              </g>
            </svg>
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
