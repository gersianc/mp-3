import { styled } from "styled-components";
import Main from "../components/Main.tsx";

//Header styling here for the little box describing what this page is about (kinda like a sub header)
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

const Jobs = styled.div`
    margin-top: 20px;
`;


// Job section for each employer
const Job = styled.div`
    margin-bottom: 20px;
`;

const JobHeader = styled.h3`
    font-size: calc(9px + 1vw);
    color: #212A31;
    margin-bottom: 5px;
`;


const JobDetails = styled.div`
    display: flex;
    flex-direction: column;
`;


// List of job
const JobList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const JobItem = styled.li`
    background-color: white;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
    font-size: calc(8px + 0.5vw);
    color: black;

    &:hover {
        background-color: lightgray;
    }
`;

const JobImage = styled.img`
    margin-left: 20px;
    border-radius: 10px;
    height: auto;
    width: 150px;

    @media screen and (max-width: 750px) {
        margin-left: 0;
        width: 100px;
    }
`;

export default function Experience() {
    return (
        <Main>
            <Header>
                <HeaderTitle>Experience</HeaderTitle>
                <HeaderSubTitle>An overview of my employment history.</HeaderSubTitle>
            </Header>

            <Jobs>
                {/* Metalogic Job Section */}
                <Job>
                    <JobHeader><a href={"https://www.metalogicind.com/"} target ="_blank"> Metalogic Industries</a></JobHeader>
                    <JobImage src="/assets/metalogic.png" alt="Metalogic Logo" />
                    <JobDetails>
                        Computer Numerical Control Operator<br />
                        <em>Nov 2020 - Present | Part-Time</em>
                    </JobDetails>
                    <JobList>
                        <JobItem>Set up and operate 3-4 Haas multi-axis machines daily to produce various $500-$6000 parts for clients.</JobItem>
                        <JobItem>Maintained and assembled approximately 100 cryptocurrency mining rigs using GEFORCE RTX graphics cards and Bitmain Antminer (Ethereum and Bitcoin) netting over $200,000 in profit.</JobItem>
                        <JobItem>Work alongside engineers to develop 3D models in Mastercam to contribute to client satisfaction.</JobItem>
                    </JobList>
                </Job>

                {/* BU Job Section */}
                <Job>
                    <JobHeader><a href={"https://www.bu.edu"} target = "_blank">Boston University</a></JobHeader>
                    <JobImage src="/assets/bu.png" alt="BU logo" />
                    <JobDetails>
                        Mailroom Assistant<br />
                        <em>Sep 2023 - Present | Part-Time</em>
                    </JobDetails>
                    <JobList>
                        <JobItem>Assisted in daily mail room operations such as signing in over 100 parcels daily.</JobItem>
                        <JobItem>Served resident students by handing out their packages.</JobItem>
                    </JobList>
                </Job>
            </Jobs>
        </Main>
    );
}
