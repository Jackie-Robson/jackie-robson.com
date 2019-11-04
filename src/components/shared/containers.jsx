import styled from 'styled-components'
import {
    flexDirection,
    justifyContent,
    alignItems,
    width,
    padding,
    margin,
    height,
    position,
    left,
    right,
    top,
    bottom,
    background,
    zIndex
} from 'styled-system'


const Container = styled.div`
        max-width: 1260px;
        margin-right:auto;
        margin-left:auto;
    `

const Flex = styled.div`
        display: flex;
        ${alignItems};
        ${justifyContent};
        ${flexDirection};
        ${width};
        ${height}
    `

const Box = styled.div`
        ${alignItems};
        ${justifyContent};
        ${flexDirection};
        ${width};
        ${padding};
        ${margin};
        ${height}
        ${position};
        ${left};
        ${right};
        ${top};
        ${bottom};
        ${background};
        ${zIndex}
`

export {
    Container,
    Flex,
    Box
}