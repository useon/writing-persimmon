import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import chevronDown from 'assets/images/chevron-down-icon.svg';
import { useAtom } from 'jotai';
import styled from 'styled-components';

import Button from '../Button/Button';
import SelectDropdoqMenu from '@/components/SelectDropdoqMenu/SelectDropdoqMenu';
import { dropdownAtom } from '@/stores/selectDropAtom';

const Header = () => {
  const [show, setShow] = useAtom(dropdownAtom);
  const pathname = usePathname();

  const links: Array<{ href: string; key: string; name: string }> = [
    { href: '/', key: 'home', name: '오늘의 글감' },
    { href: '/last', key: 'last', name: '지난 글감' },
    { href: '/all', key: 'all', name: '모든 글' },
  ];

  const accounts: Array<{ href: string; key: string; name: string }> = [
    { href: '/login', key: 'login', name: '로그인' },
    { href: '/signup', key: 'signup', name: '회원가입' },
  ];

  const onSelectClick = () => {
    setShow(true);
  };

  return (
    <Nav>
      <div className='wrapper'>
        <NavbarMenu>
          <NavbarMenuItem>
            <Link href='/'>글감이</Link>
          </NavbarMenuItem>
          {links.map(({ href, key, name }) => {
            const isActive = href === pathname;
            return (
              <NavbarMenuItem key={key}>
                <Link href={href} className={`link ${isActive ? 'active' : ''}`}>
                  {name}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
        <NavbarMenu gap={30}>
          {accounts.map(({ href, key, name }) => (
            <NavbarMenuItem key={key}>
              <Link href={href}>{name}</Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button
              padding='12px 17px'
              radius='4px'
              type='select'
              weight='normal'
              url={chevronDown.src}
              onClick={onSelectClick}
            >
              글쓰기
            </Button>
            {show ? <SelectDropdoqMenu /> : null}
          </NavbarMenuItem>
        </NavbarMenu>
      </div>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  margin: 0 auto;
  border-bottom: 1px solid #ededed;
  background: white;

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0px 50px;
  }
`;

const NavbarMenu = styled.ul<{ gap?: number }>`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.gap ? `${props.gap}px` : '40px')};
  height: 100%;
`;

const NavbarMenuItem = styled.li`
  position: relative;
  font-weight: bold;
  .active {
    color: var(--main-color);
  }

  a {
    padding: 10px 0px;
  }

  .link:hover {
    color: var(--main-color);
  }
`;
