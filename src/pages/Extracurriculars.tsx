import { styled } from "styled-components";
import Main from "../components/Main";

//box describing what this page is about
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

const Description = styled.div`
    display: block;
`;

const DescriptionTitle = styled.h3`
    font-size: calc(6px + 1vw);
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
    
`;

const DescriptionList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    margin-top: 15px;
    width: 100%;
`;

//styling for each individual item
const DescriptionListItem = styled.li`
    margin-bottom: 10px;
    background-color: white;
    border-radius: 8px;
    font-size: calc(6px + 0.5vw);
    color: black;
    position: relative;
    padding: 5px 5px 5px 35px;

    &:hover {
        background-color: lightgray;
    }
`;

//styling container for the images
const ImageContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    
    //center images on smaller screen
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        
    }
`;

//individual images styling
const ActivityImage = styled.img`
    width: 200px;
    height: 150px;
    object-fit: contain;

    @media screen and (max-width: 750px) {
        width: 150px;
        height: auto;
    }
`;

export default function Extracurriculars() {
    return (
        <Main>
            <Header>
                <HeaderTitle>Extracurriculars</HeaderTitle>
                <HeaderSubTitle>Other things I'm involved in.</HeaderSubTitle>
            </Header>

            <Description>
                <DescriptionTitle>Activities</DescriptionTitle>
                <DescriptionList>
                    <DescriptionListItem>
                        <a href="https://www.bu.edu/fitrec/what-we-offer/clubsims/intramural-sports/" target="_blank">Intramural Basketball</a>
                    </DescriptionListItem>
                    <DescriptionListItem>
                        <a href="https://www.bu.edu/fitrec/what-we-offer/clubsims/intramural-sports/" target="_blank">Intramural Soccer</a>
                    </DescriptionListItem>
                    <DescriptionListItem>
                        <a href="https://www.buconsultinggroup.com/" target="_blank" >Boston University Consulting Group</a>
                    </DescriptionListItem>
                    <DescriptionListItem>
                        <a href="https://bu.campuslabs.com/engage/organization/asabu" target="_blank">Albanian Student Association</a>
                    </DescriptionListItem>
                </DescriptionList>
            </Description>

            <ImageContainer>
                <ActivityImage src="src/assets/basketball.png" alt="Basketball" />
                <ActivityImage src="src/assets/soccer.png" alt="Soccer" />
                <ActivityImage src="src/assets/bucg.png" alt="BUCG Logo" />
                <ActivityImage src="src/assets/albania.png" alt="Albanian Flag" />
            </ImageContainer>
        </Main>
    );
}
