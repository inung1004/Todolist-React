import styled from 'styled-components'
const font = 'ACCchildrenheartOTF-Regular';


function Signup() {
    return (
        <>

            <MakeId>
                사용하실 아이디 적어
                <Input></Input>
            </MakeId>
            <MakePassword>
                사용하실 비밀번호 적어
                <Input></Input>
                <br/>
                비밀번호 그거 맞아? 한 번 더 적어
                <Input></Input>
            </MakePassword>
        
        </>
    )
}


const MakeId = styled.div`
    margin-top: 30px;
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
    margin-left: 10px;
    height: 55px;
    font-size: 30px;
`

const MakePassword = styled.div`
    font-family: ${font};
    margin-top: 30px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default Signup;