'use client';
import React from 'react';

import { useAtom } from 'jotai';

import Header from '@/components/common/Header/Header';
import { dropdownAtom } from '@/stores/selectDropAtom';

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useAtom(dropdownAtom);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (show && !target.closest('#select-drop')) {
      setShow((prev) => !prev);
    }
  };
  return (
    <div onClick={(e: React.MouseEvent<HTMLDivElement>) => onClick(e)}>
      <Header />
      {children}
    </div>
  );
}
