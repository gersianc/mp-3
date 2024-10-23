import { styled } from "styled-components";
import Main from "../components/Main";

//page description
const Header = styled.header`
    background-color: #212A31;
    color: white;
    padding: 5px;
    margin-top: 0;
    text-align: left;
    border-radius: 10px;

    @media screen and (max-width: 750px) {
        text-align: center;
        margin: auto;
    }
`;


const HeaderTitle = styled.h1`
    font-size: calc(12px + 2vw);
    font-weight: bold;
`;

const HeaderSubTitle = styled.p`
    font-size: calc(8px + 0.5vw);
    margin-top: 1%;
`;

//styling for the image
const ProfileImage = styled.img`
    margin: 20px;
    border-radius: 10px;
    height: auto;
    width: 200px;
    
    //centering image on smaller devices
    @media screen and (max-width: 750px) {
        float: none;
        display: block;
        margin: 1% auto;
        width: 150px;
    }
`;

//description part styling
const Paragraph = styled.p`
    margin-top: 10px;
    line-height: 1.5;
    font-size: calc(14px + 0.5vw);
`;

export default function Home() {
    return (
        <Main>
            <Header>
                <HeaderTitle>Home</HeaderTitle>
                <HeaderSubTitle>Welcome to my resume website.</HeaderSubTitle>
            </Header>
            <ProfileImage src="/assets/profile.jpeg" alt="An image of me"/>
            <Paragraph>
                Hello my name is Gersian Collaku and I am a senior at {" "}
                <a href="https://www.bu.edu/" target="_blank">Boston University</a> {" "}
                studying Computer Science. I am expected to graduate in May of 2025 and am open to new grad positions in
                any related fields. During my free time I enjoy watching and playing sports and being raised in
                Massachusetts I've been spoiled with many championships being won in Boston.
                On this website you can find my work experience, projects, and other personal information. Feel free to
                reach out
                with any questions. Contact me at my email: <em>gersianc@bu.edu</em> or connect with me on {" "}
                <a href="https://www.linkedin.com/in/gersian-collaku/" target="_blank">LinkedIn</a>.
            </Paragraph>
        </Main>
    );
}
