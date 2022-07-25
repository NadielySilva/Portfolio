import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    width: 36vw;
    height: 10vh;
    margin: 0 12px;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled(Link)`
    font-family: 'Rokkitt', serif;
    font-weight: 400;
    font-size: 1.25rem;
    text-decoration: none;
    text-align: center;
    color: #000;
    line-height: 10vh;
    width: 12vw;
    height: 10vh;

    :hover{
        color: #fff;
        background-color: black
    }
`;

export default function Menu() {
    return (
        <Nav>
            <List>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/AboutMe">About Me</StyledLink>
                <StyledLink to="/CaseStudies">Case Studies</StyledLink>
            </List>
        </Nav>
    )
}
