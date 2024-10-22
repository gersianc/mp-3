import { Link } from "react-router-dom";
import { styled } from "styled-components";


//Made some stylistic changes to the code professor Davoodi gave me such as removing radius and changing the size a bit
const Navbar = styled.nav`
    width: 20%;
    background-color: #2E3944;
    padding: 2%;
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

const NavList = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 750px){
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

const NavListItem = styled.li`
    margin: 15% 0;
    
    //margin 0 when small screen
    @media screen and (max-width: 750px){
        margin: 0;
    }
`;

const StyledNavLink = styled(Link)`
    color: ghostwhite;
    text-decoration: none;
    font-size: calc(2px + 2vw);
    padding: 1%;
    text-align: center;

    &:hover {
        background-color: #124E66;
        border-radius: 5px;
    }
`;

export default function Nav() {
    return (
        <Navbar>
            <NavList>
                <NavListItem><StyledNavLink to="/">Home</StyledNavLink></NavListItem>
                <NavListItem><StyledNavLink to="/education">Education</StyledNavLink></NavListItem>
                <NavListItem><StyledNavLink to="/experience">Experience</StyledNavLink></NavListItem>
                <NavListItem><StyledNavLink to="/projects">Projects</StyledNavLink></NavListItem>
                <NavListItem><StyledNavLink to="/references">References</StyledNavLink></NavListItem>
                <NavListItem><StyledNavLink to="/extracurriculars">Extracurriculars</StyledNavLink></NavListItem>
            </NavList>
        </Navbar>
    );
}
