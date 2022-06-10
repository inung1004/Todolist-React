import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const BASEURL = "http://10.156.147.203:8080"
const font = 'ACCchildrenheartOTF-Regular';


function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const onLogin = async () => {
        await axios.post(`${BASEURL}/member/login`,
            {
                accountId: id,
                password: password
            }).then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('access_token', response.data.accessToken);
                }
            })
    }

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            window.location.href = "/todolist";
        }
    }, [localStorage])
    return (
        <>
            <Id>
                ID 입력해요
                <Input onChange={(e) => { setId(e.target.value); }} ></Input>
            </Id>
            <Password>
                비밀번호도 입력해!!!
                <Input onChange={(e) => { setPassword(e.target.value); }} type="password"></Input>
            </Password>
            <Footer>
                <Link to="./signup">
                    <GoSignup>회원가입부터</GoSignup>
                </Link>
                <LoginButton onClick={onLogin}>로그인</LoginButton>
            </Footer>
        </>
    )
}

const Id = styled.div`
    margin-top: 80px;
    font-family: ${font};
    display: flex;
    flex-direction: column;
    font-size: 30px;
    align-items: center;
    
`

const Input = styled.input`
    padding-left: 30px;
    padding-right: 30px;
    font-size: 30px;
    font-family: ${font};
    border: none;
    border-radius: 50px;
    outline: none;
    width: 850px;
    height: 55px;
    margin-top: 15px;
`
const Password = styled.div`
    margin-top: 30px;
    font-family: ${font};
    display: flex;
    flex-direction: column;
    font-size: 30px;
    align-items: center;
`
const Footer = styled.div`
    margin-top: 50px;

`

const GoSignup = styled.button`
    font-size: 25px;
    font-family: ${font};
    border: none;
    outline: none;
    width: 420px;
    height:70px;
    background-color: white;
    border-radius: 50px;
    margin-right: 70px;
`
const LoginButton = styled.button`
    font-size: 25px;
    font-family: ${font};
    border: none;
    outline: none;
    width: 420px;
    height:70px;
    background-color: white;
    border-radius: 50px;
`
export default Login;