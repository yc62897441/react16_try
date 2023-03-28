import { Link } from 'react-router-dom'
import styled from 'styled-components'

const linkList = [
    {
        title: '首頁',
        url: '/',
    },
    {
        title: 'UseState',
        url: '/UseState',
    },
]

const HeaderWrapper = styled.div`
    width: 100%;
    padding: 20px;
    background-color: lightpink;
`

const Nav = styled(Link)`
    margin: 2px;
    padding: 5px;
    border-radius: 5px;
    background-color: firebrick;
    color: #ffffff;
    text-decoration: none;
`

function Header() {
    return (
        <HeaderWrapper>
            {linkList.length > 0 &&
                linkList.map((link) => (
                    <Nav key={link.title} to={link.url}>
                        {link.title}
                    </Nav>
                ))}
        </HeaderWrapper>
    )
}

export default Header
