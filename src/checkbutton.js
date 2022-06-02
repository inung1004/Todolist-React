import { useState } from "react";
import CheckIcon from "./img/check.svg";
import styled from 'styled-components'

function CheckButton () {
    const [checkIcon, setCheckIcon] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const checkButton = (e) => {
            if (!isSuccess) {
            setCheckIcon(CheckIcon);
            setIsSuccess(true);
        } else {
            console.log("asdfsa");
            setCheckIcon("");
            setIsSuccess(false);
        }
    }
    return (
        <>
            <CheckButtonTag onClick={checkButton} >
                <img src={checkIcon} />
            </CheckButtonTag>
        </>
    )
}

const CheckButtonTag = styled.button`
    width: 48px;
    height: 48px;
    background-color: #d9d9d9;
    border-radius: 50%;
    outline: none;
    border: none;
    margin-right: 27px;
`

export default CheckButton;