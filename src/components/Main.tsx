import { styled } from "styled-components";
import { ReactNode } from "react";


//main styling for the main content of each page/background.
const StyledMain = styled.main`
    width: 80%;
    height: 100vh;
    overflow: auto;
    background-color: #D3D9D4;
    padding: 20px;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const Main = ({ children }: { children: ReactNode }) => {
    return <StyledMain>{children}</StyledMain>;
};

export default Main;
