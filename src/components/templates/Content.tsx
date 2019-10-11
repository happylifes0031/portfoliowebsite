import React from 'react';
import styled from '@emotion/styled';

import Menu from '../organisms/Menu/Menu';

const StyledText = styled.span`
    font-size: 0.7em;
    line-height: 1.5em;

`;

const StyledContent = styled.div`
    display:flex;
    align-items: flex-end;
    margin: 1em 0;
`;

const Content = () => {
    return (
        <StyledContent>
            <Menu />
            <StyledText> 
                Freelance front-end developer and hobby game developer.
                Born and raised in Rotterdam, living in Amsterdam.
                I have background in game development and currently do front-end development. With a love for technology and design, I have taught myself 3D design and programming!
                <span> Currently working for:</span> <span className='working-for'>deva</span> 
            </StyledText>
        </StyledContent>
    )
}

export default Content;