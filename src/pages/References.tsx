import { styled } from "styled-components";
import Main from '../components/Main';

//box that describes what the current website is about
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

//dtyling for table of my references same as mp-1
const Table = styled.table`
    width: 80%;
    margin: 20px auto;
    border-collapse: collapse;
    background-color: white;
`;

const Caption = styled.caption`
    font-size: calc(16px + 0.5vw);
    margin: 10px 0;
    font-weight: bold;
    text-align: left;
`;

const TableHeader = styled.th`
    background-color: #2E3944;
    color: white;
    padding: 10px;
    font-weight: bold;
    text-align: left;
    border: 1px lightgray solid;
`;

const TableCell = styled.td`
    padding: 10px;
    text-align: left;
    border: 1px lightgray solid;
`;

const TableRow = styled.tr`
    &:hover {
        background-color: lightgray;
    }
`;

//^used same table styling as I did in Mp-1

export default function References() {
    return (
        <Main>
            <Header>
                <HeaderTitle>References</HeaderTitle>
                <HeaderSubTitle>Here are some of my personal and professional references.</HeaderSubTitle>
            </Header>
            <Table>
                <Caption>Professional References</Caption>
                <thead>
                <tr>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Position</TableHeader>
                    <TableHeader>Contact</TableHeader>
                </tr>
                </thead>
                <tbody>
                <TableRow>
                    <TableCell>Tom Kokosinski</TableCell>
                    <TableCell>CEO @ Metalogic</TableCell>
                    <TableCell>tkokos@metalogic.ind</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Michael Salame</TableCell>
                    <TableCell>President @ Metalogic</TableCell>
                    <TableCell>msalame@metalogic.ind</TableCell>
                </TableRow>
                </tbody>
            </Table>

            {/* Personal References */}
            <Table>
                <Caption>Personal References</Caption>
                <thead>
                <tr>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Relation</TableHeader>
                    <TableHeader>Contact</TableHeader>
                </tr>
                </thead>
                <tbody>
                <TableRow>
                    <TableCell>Mia Engel</TableCell>
                    <TableCell>Girlfriend</TableCell>
                    <TableCell>miaaeengel@gmail.com</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Arthur Collaku</TableCell>
                    <TableCell>Father</TableCell>
                    <TableCell>arturcollaku@yahoo.com</TableCell>
                </TableRow>
                </tbody>
            </Table>
        </Main>
    );
}
