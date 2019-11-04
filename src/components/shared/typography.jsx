// import React from 'react'
import styled from 'styled-components'
import { margin, padding, textAlign, justifySelf } from 'styled-system'
import { Link } from 'react-router-dom'

const H1 = styled.h1`
        ${margin};
        ${textAlign};
        ${padding};
        font-family: Roboto Mono;
        font-style: italic;
        font-weight: 500;
        font-size: 74px;
        display: flex;
        align-items: center;
        text-transform: lowercase;
        /* color: rgba(255,255,255,.2); */
        mix-blend-mode:overlay;
        z-index: 3;
        -webkit-text-stroke: 5px rgba(0,0,0,0);
        background-blend-mode:overlay;
        background: linear-gradient(157.12deg, #C3538B 3.22%, #5EBBC5 93.11%);
        background-clip:text;
        -webkit-background-clip: text;
    `

const H2 = styled.h2`
        ${margin};
        ${textAlign};
        ${padding};
        font-family: Roboto Mono;
        font-style: italic;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: flex-end;
        letter-spacing: -0.015em;
        background: linear-gradient(157.12deg, #C3538B 3.22%, #5EBBC5 93.11%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `

const H3 = styled.h3`
        ${margin};
        ${textAlign};
        ${padding};
        font-family: Roboto Mono;
        font-style: italic;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: flex-end;
        letter-spacing: -0.015em;
        background: linear-gradient(157.12deg, #C3538B 3.22%, #5EBBC5 93.11%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    `
const P = styled.p`
    ${textAlign};
    ${margin};
    ${padding};
    font-family: Roboto Mono;
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.015em;
    color: #FFFFFF;
`

const A = styled(Link)`
    font-family: Roboto Mono;
    font-style: italic;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.015em;
    text-decoration:none;
    transition: background ease-in.25s;    
    background: rgba(0,0,0,0);
    ${margin}
    ${justifySelf}
    &:hover{
        background: linear-gradient(124.48deg, #5EBBC5 3.22%, #C3538B 93.11%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    &:visited{
        color: white
    }
`

export {
    H1,
    H2,
    H3,
    P,
    A
}