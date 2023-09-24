'use client';

import React from 'react';

import styled from 'styled-components';

import FirstGoIcon from 'assets/images/first-go-icon.svg';
import LastGoIcon from 'assets/images/last-go-icon.svg';
import NextIcon from 'assets/images/next-icon.svg';
import PrevIcon from 'assets/images/prev-icon.svg';

interface Props {
  pageArray: any[];
  handlePrevClick: (type?: string) => void;
  handleNextClick: (type?: string) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  pageArray,
  handlePrevClick,
  handleNextClick,
  currentPage,
  setCurrentPage,
}: Props) => {
  return (
    <PageButtonWrapper>
      <ArrowButton onClick={() => handlePrevClick('first')}>
        <FirstGoIcon />
      </ArrowButton>
      <ArrowButton onClick={() => handlePrevClick()}>
        <PrevIcon />
      </ArrowButton>
      {pageArray.map((pageIndex) => (
        <PageButton
          key={pageIndex}
          className={pageIndex === currentPage + 1 ? 'current' : ''}
          onClick={() => setCurrentPage(pageIndex - 1)}
        >
          {pageIndex}
        </PageButton>
      ))}
      <ArrowButton onClick={() => handleNextClick()}>
        <NextIcon />
      </ArrowButton>
      <ArrowButton onClick={() => handleNextClick('last')}>
        <LastGoIcon />
      </ArrowButton>
    </PageButtonWrapper>
  );
};

export default Pagination;

const PageButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 80px 0px;
`;

const PageButton = styled.button`
  width: 35px;
  height: 35px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;

  &.current {
    background-color: var(--main-color);
    color: white;
  }
`;

const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 45px;
  background-color: white;
  border: 1px solid #b3b3b3;
  border-radius: 50%;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
    color: var(--sub-color);
  }
`;
