import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const BASEURL = "http://10.156.147.203:8080"
const font = 'ACCchildrenheartOTF-Regular';

function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const signup = async () => {
        await axios.post(`${BASEURL}/member`,
            {
                accountId: id,
                password:  password
            }
        );
    }
    const onSignup = async() => {
        if (password === checkPassword) {
            
            try {
                await signup()
                alert("회원가입 되셨어 로그인 페이지로 이동해서 로그인 해줘요")
                window.location.href = "/";

            } catch (error) {
                alert(error.response.data);
            }
           
        }
        else alert(` ${id}님아 비밀번호가 달라 확인하셔`)
    }

    return (
        <>
            <MakeAccount>
                <MakeId>
                    사용하실 아이디 적어
                    <Input onChange={(e) => { setId(e.target.value); }} ></Input>
                </MakeId>
                <MakePassword>
                    사용하실 비밀번호 적어
                    <Input onChange={(e) => { setPassword(e.target.value); }} type="password"></Input>
                    <br />
                    비밀번호 그거 맞아 요? 한 번 더 적어
                    <Input onChange={(e) => { setCheckPassword(e.target.value); }} type="password"></Input>
                </MakePassword>
                <Footer>
                    <Link to="./login">
                        <GoLogin>로그인화면으로</GoLogin>
                    </Link>
                    <MakeButton onClick={onSignup}>가입하기</MakeButton>
                </Footer>
            </MakeAccount>
        </>
    )
}

const MakeAccount = styled.div`
    margin-top: 80px;
`

const MakeId = styled.div`
    font-family: ${font};
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    font-family: ${font};
    outline: none;
    margin-top: 15px;
    border: none;
    border-radius: 50px;
    width: 850px;
    height: 55px;
    font-size: 30px;
    padding-left: 30px;
    padding-Right: 30px;
`

const MakePassword = styled.div`
    font-family: ${font};
    margin-top: 30px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Footer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
const GoLogin = styled.button`
    font-family: ${font};
    font-size: 25px;
    margin-top: 30px;
    border: none;
    background-color: white;
    border-radius: 50px;
    width: 420px;
    height:70px;
    margin-right: 40px;
`
const MakeButton = styled.button`
    font-family: ${font};
    font-size: 25px;
    margin-top: 30px;
    border: none;
    background-color: white;
    border-radius: 50px;
    width: 420px;
    height:70px;
`
export default Signup;