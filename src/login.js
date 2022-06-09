import styled from "styled-components";
import { Link } from 'react-router-dom';

const font = 'ACCchildrenheartOTF-Regular';


function Login() {
    return (
        <>
            <Id>
                ID 입력해 요
                <Input></Input>
            </Id>
            <Password>
                비밀번호도 입력해 요
                <Input></Input>
            </Password>
            <Footer>
                <Link to="./signup">
                    <GoSignup>회원가입하기</GoSignup>
                </Link>
                <LoginButton>로그인</LoginButton>
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
    margin-right: 20px;
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