import { useState } from "react";
import { styled } from "styled-components";
import Main from '../components/Main';

// For future reference could probably make all Headers into its own component
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

//container for calculator styling here also made it so the calculator is centered now
const CalculatorContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 320px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    text-align: center;
    margin: 5% auto;
    gap: 10px;
    
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;


//button styling
const Button = styled.button`
    background-color: #124E66;
    color: white;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 16px;
    margin: 5px;
    width: 50px;

    &:hover {
        background-color: #0A374C;
    }
`;

//styling for output
const Output = styled.h3`
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
    color: black;
    text-align: center;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
`;

//calculator function itself.
export default function Projects() {
    //using use state hook on first, second, and result field
    const [firstNumber, setFirstNumber] = useState<number | string>("");
    const [secondNumber, setSecondNumber] = useState<number | string>("");
    const [result, setResult] = useState<number| string>("");

    const handleAddition = () => {
        setResult(Number(firstNumber) + Number(secondNumber));
    };

    const handleSubtraction = () => {
        setResult(Number(firstNumber) - Number(secondNumber));
    };

    const handleMultiplication = () => {
        setResult(Number(firstNumber) * Number(secondNumber));};

    const handleDivision = () => {
        setResult(Number(firstNumber) / Number(secondNumber));
    };

    const handlePower = () => {
        setResult(Math.pow(Number(firstNumber), Number(secondNumber)));
    };

    //wasn't able to clear on mp1 but now I got it working by setting all fields to an empty string
    const handleClear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setResult("");
    };

    return (
        <Main>
            <Header>
                <HeaderTitle>Projects</HeaderTitle>
                <HeaderSubTitle>Feel free to view some of my projects.</HeaderSubTitle>
            </Header>

            <CalculatorContainer>
                <h2>Calculator Project</h2>
                {/*label uses htmlFor now instead of just for*/}
                <label htmlFor="first-number">First Number: </label>
                <input
                    id="first-number"
                    type="number"
                    value={firstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)}
                />

                <label htmlFor="second-number">Second Number: </label>
                <input
                    id="second-number"
                    type="number"
                    value={secondNumber}
                    // using on change like we did in recent discussion to change the numbers
                    onChange={(e) => setSecondNumber(e.target.value)}
                />

                <div>
                    <Button onClick={handleAddition}>+</Button>
                    <Button onClick={handleSubtraction}>-</Button>
                    <Button onClick={handleMultiplication}>*</Button>
                    <Button onClick={handleDivision}>/</Button>
                    <Button onClick={handlePower}>^</Button>
                    <Button onClick={handleClear}>C</Button>
                </div>

                <Output id="output">{result !== "" ? result : ""}</Output>
            </CalculatorContainer>
        </Main>
    );
}
