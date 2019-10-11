import React from 'react';
import styled from '@emotion/styled';

interface IMenu {
    togglePortfolio: () => void;
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: 0.7em;
    margin: 1.0em 0;
    min-width:250px;
    &:before {
        content: '';
        display: block;
        position: absolute;
        width: 110px;
        height: 1px;
        margin-top: -7px;
        background-color: #ccc;
    }
    span {
      font-size: 0.5em; 
      letter-spacing: 0;
    }
`;

const Menu = () => { 
    return (
        <StyledNav>
            <a href="#portfolio">Portfolio</a>
            <a href="mailto:e-postduif@blijlevens.nu">Contact</a>
            <a href="../../../data/blijlevens_cv_eng.pdf" title="Download CV in English">C.V. <span>(PDF | 1.1mb)</span></a>
        </StyledNav>    
    )
}

export default Menu;