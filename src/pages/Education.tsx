import { styled } from "styled-components";
import Main from "../components/Main.tsx";

//This and the other headers below is the little block that explains the content of the current page
const Header = styled.header`
    background-color: #212A31;
    color: white;
    padding: 5px;
    margin-top: 0;
    text-align: left;
    border-radius: 10px;

    @media screen and (max-width: 750px) {
        text-align: center;
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

const Description = styled.div`
    display: block;
    margin-top: 20px;
`;

//
const DescriptionTitle = styled.h3`
    font-size: calc(6px + 1vw);
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
`;

//styling for list of courses as a whole
const CourseworkList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin-top: 5px;
    width: 100%;
`;

//each individual course
const CourseworkItem = styled.li`
    margin-bottom: 10px;
    background-color: white;
    border-radius: 8px;
    font-size: calc(6px + 0.5vw);
    color: black;
    position: relative;
    padding: 5px 0 5px 35px;

    &:hover {
        background-color: lightgray;
    }
`;

export default function Education() {
    return (
        <Main>
            <Header>
                <HeaderTitle>Education</HeaderTitle>
                <HeaderSubTitle>Here you can find my relevant coursework.</HeaderSubTitle>
            </Header>

            <Description>
                <DescriptionTitle>Relevant Coursework</DescriptionTitle>
                <CourseworkList>
                    {/*added links for easy access to course description.*/}
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-111/"} target='_blank'> CS 111 Intro to Computer Science I</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-112/"} target='_blank'> CS 112 Intro to Computer Science II</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-131/"} target='_blank'> CS 131 Combinatorics Structures</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-132/"} target='_blank'> CS 132 Geometric Algorithms</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-210/"} target='_blank'> CS 210 Computer Systems</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-237/"} target='_blank'> CS 237 Probability in Computing</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-320/"} target='_blank'> CS 320 Concepts of Programming Languages</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-330/"} target='_blank'> CS 330 Introduction to Analysis of Algorithms</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-350/"} target='_blank'> CS 350 Distributed Systems</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-391/"} target='_blank'> CS 391 Web Application Development</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-411/"} target='_blank'> CS 411 Software Engineering</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cas-cs-506/"} target='_blank'> CS 506 Data Science Tools and Applications</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cds-ds-219/"} target='_blank'>DS 219 Software Engineering Career Prep Workshop</a></CourseworkItem>
                    <CourseworkItem><a href={"https://www.bu.edu/academics/cas/courses/cds-ds-340/"} target='_blank'>DS 340 Intro to Machine Learning and AI</a></CourseworkItem>
                </CourseworkList>
            </Description>
        </Main>
    );
}
