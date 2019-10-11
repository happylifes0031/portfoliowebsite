import React from 'react';
import styled from '@emotion/styled';
import StyledTitle from '../organisms/TitlesHeader/TitlesHeader';
import Content from '../templates/Content';

const StyledHomePage = styled.div`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
        color: white;
    }
`;


const Home  = () => {
    return (
        <StyledHomePage>
            <StyledTitle />
            <Content />
        </StyledHomePage>
    )
}

export default Home;