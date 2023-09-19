'use client';

import React from 'react';

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
        <svg
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          transform='rotate(180)'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <g id='Arrow / Chevron_Right_Duo'>
              {' '}
              <path
                id='Vector'
                d='M13 8L17 12L13 16M7 8L11 12L7 16'
                stroke='#5c5c5c'
                strokeWidth='1.176'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>{' '}
            </g>{' '}
          </g>
        </svg>
      </ArrowButton>
      <ArrowButton onClick={() => handlePrevClick()}>
        <svg
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          stroke='#ffffff'
          strokeWidth='1.176'
          transform='rotate(0)'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <rect width='24' height='24' fill='white'></rect>{' '}
            <path
              d='M14.5 17L9.5 12L14.5 7'
              stroke='#5c5c5c'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>{' '}
          </g>
        </svg>
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
        <svg
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          stroke='#ffffff'
          strokeWidth='1.176'
          transform='rotate(180)'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <rect width='24' height='24' fill='white'></rect>{' '}
            <path
              d='M14.5 17L9.5 12L14.5 7'
              stroke='#5c5c5c'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>{' '}
          </g>
        </svg>
      </ArrowButton>
      <ArrowButton onClick={() => handleNextClick('last')}>
        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <g id='Arrow / Chevron_Right_Duo'>
              {' '}
              <path
                id='Vector'
                d='M13 8L17 12L13 16M7 8L11 12L7 16'
                stroke='#5c5c5c'
                strokeWidth='1.176'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>{' '}
            </g>{' '}
          </g>
        </svg>
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
