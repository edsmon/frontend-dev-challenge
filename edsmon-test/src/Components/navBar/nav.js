import React from 'react';
import { NavContainer, Menu, Logo, Search } from './navElements';
import LogoNav from '../../Assets/imgs/Logo.png';

const Nav = () => {
    return (
        <NavContainer>
            <Menu>
                <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12H35V14.6667H10V12ZM10 18.6667H35V21.3333H10V18.6667ZM10 25.3333H35V28H10V25.3333Z" fill="#414141" />
                </svg>
            </Menu>
            <Logo image={LogoNav} />
            <Search>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18C11.846 18 13.543 17.365 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.365 13.543 18 11.846 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="#414141" />
                    <path d="M11.412 8.58596C11.791 8.96596 12 9.46796 12 9.99996H14C14 8.93496 13.584 7.93096 12.826 7.17196C11.312 5.65996 8.68695 5.65996 7.17395 7.17196L8.58595 8.58796C9.34595 7.82996 10.656 7.83196 11.412 8.58596Z" fill="#414141" />
                </svg>
            </Search>

        </NavContainer>
    )
}

export default Nav;