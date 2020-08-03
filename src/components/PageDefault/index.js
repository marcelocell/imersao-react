import React from 'react';
import Menu from '../Menu'
import Footer from '../Footer'
import styled, { css } from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({padding}) => css`
        padding: ${padding}
    `}
`;

function PageDefault({children, padding}) {
    return (
        <>
            <Menu />
                <Main padding={padding}>
                    {children}
                </Main>
            <Footer /> 
        </>
    )
}

export default PageDefault;