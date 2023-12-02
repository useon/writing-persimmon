import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import Button from '../Button/Button';
import { getSession } from '@/apis/auth/get-session';
import { getUser } from '@/apis/auth/get-user';
import SelectDropdoqMenu from '@/components/SelectDropdoqMenu/SelectDropdoqMenu';
import { dropdownAtom } from '@/stores/selectDropAtom';
import ChevronDown from 'assets/images/chevron-down-icon.svg';

const Header = () => {
  const [show, setShow] = useAtom(dropdownAtom);
  const [user, setUser] = useState<null | {}>(null);
  const pathname = usePathname();
  const links: Array<{ href: string; key: string; name: string }> = [
    { href: '/', key: 'home', name: '오늘의 글감' },
    { href: '/last', key: 'last', name: '지난 글감' },
    { href: '/all', key: 'all', name: '모든 글' },
  ];

  const inactive: Array<{ href: string; key: string; name: string }> = [
    { href: '/signin', key: 'signin', name: '로그인' },
    { href: '/signup', key: 'signup', name: '회원가입' },
  ];

  const active: Array<{ href: string; key: string; name: string }> = [
    { href: '/', key: 'signout', name: '로그아웃' },
    { href: '/', key: 'mypage', name: '마이페이지' },
  ];

  const onSelectClick = () => {
    setShow(true);
  };

  const getUserData = async () => {
    const user = await getUser();
    setUser(user);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Nav>
      <div className='wrapper'>
        <NavbarMenu>
          <NavbarMenuItem>
            <Link href='/'>글감이</Link>
          </NavbarMenuItem>
          {links.map(({ href, key, name }) => {
            let isActive = href === pathname;
            if (pathname) {
              if (pathname === pathname.replace(/[0-9]/g, '')) {
                isActive = href === pathname;
              } else {
                isActive = href === pathname.replace(/[0-9]/g, '').slice(0, -1);
              }
            }
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
          {user &&
            active.map(({ href, key, name }) => (
              <NavbarMenuItem key={key}>
                <Link href={href}>{name}</Link>
              </NavbarMenuItem>
            ))}
          {!user &&
            inactive.map(({ href, key, name }) => (
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
              onClick={onSelectClick}
            >
              글쓰기
              <ChevronDown />
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
