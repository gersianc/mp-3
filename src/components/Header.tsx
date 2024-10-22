import { styled } from "styled-components";

//top header of each page that remains the same
const StyledHeader = styled.header`
    background-color: #212A31;
    color: white;
    text-align: left;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

const Title = styled.h1`
    font-size: calc(20px + 1.5vw); 
`;

const SubTitle = styled.p`
    font-size: calc(12px + 0.4vw); 
    margin-top: 1%;
`;


export default function Header() {
    return (
        <StyledHeader>
            <Title>Gersian Collaku</Title>
            <SubTitle>Welcome to my resume website.</SubTitle>
        </StyledHeader>
    );
}
