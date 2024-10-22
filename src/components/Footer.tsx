import { styled } from "styled-components";


//footer from Professor Davoodis code he shared with me.
const StyledFooter = styled.footer`
    background-color: #212A31;
    color: white;
    text-align: center;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved: <a href="#">Credits</a> &#169;</p>
        </StyledFooter>
    );
}
