'use client';

import React from 'react';

import {
  faChevronLeft,
  faChevronRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

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
        <FontAwesomeIcon icon={faAnglesLeft} />
      </ArrowButton>
      <ArrowButton onClick={() => handlePrevClick()}>
        <FontAwesomeIcon icon={faChevronLeft} />
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
        <FontAwesomeIcon icon={faChevronRight} />
      </ArrowButton>
      <ArrowButton onClick={() => handleNextClick('last')}>
        <FontAwesomeIcon icon={faAnglesRight} />
      </ArrowButton>
    </PageButtonWrapper>
  );
};

export default Pagination;

const PageButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  width: 35px;
  height: 35px;
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
    color: var(--sub-color);
  }
`;
