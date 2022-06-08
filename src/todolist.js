import styled from 'styled-components'
import X from "./img/x.svg"
import CheckIcon from "./img/check.svg"
import CorrectionIcon from "./img/correction.svg"
import CheckButton from './checkbutton'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { async } from 'q'

const BASEURL = "http://10.156.147.203:8080"
const font = 'ACCchildrenheartOTF-Regular';


function Todolist() {
    const getTodoList = async () => {
        const res = await axios.get(`${BASEURL}/todo`)  //투두 목록 가져오기
        setRes((res.data));
        console.log(res.data);
    }
    const [input, setInput] = useState("");
    const [res, setRes] = useState([]);
    const [isSuccess, setIsSuccess] = useState("");
    const [checkIcon, setCheckIcon] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    console.log(res)
    const onSubmit = async (e) => {
        if (e.key === "Enter") {
            await axios.post(`${BASEURL}/todo`,
                {
                    contents: input
                }
            );
            getTodoList();
            setInput(""); //인풋창 비워주기
        }
    }

    useEffect(() => {
        getTodoList()
    }, [/*여기가 비어있으면 렌더링했을 때 한 번만 실행*/]) // 새로고침했을 때 딱 한 번만 저장해놓은 투두 목록 불러오기

    const deleteList = async (Id) => {
        await axios.delete(`${BASEURL}/todo/${Id}`).then(() => getTodoList()) // .then(getTodoList()) -> 이렇게 하면 함 쉬고 실행 
    }

    const allDelete = async () => {
        await axios.delete(`${BASEURL}/todo/all`)
        getTodoList();
    }

    return (
        <>
            <header>
                <TitleDiv>To do list</TitleDiv>
                <TodoInput onChange={(e) => { setInput(e.target.value); }} value={input} onKeyPress={onSubmit}></TodoInput>
            </header>
            <section>
                <Subtitle>할 일</Subtitle>
                <ListContainer>
                    <AllDeleteButton onClick={() => allDelete()}>ALL</AllDeleteButton>
                    {res.map((data) => (
                        <List>
                            <CheckButton></CheckButton>
                            <Todo>{data.contents}</Todo>
                            <DeleteButton onClick={() => deleteList(data.id)}><img src={X} /></DeleteButton>
                        </List>
                    ))}
                </ListContainer>
            </section>
        </>
    )

}
const TitleDiv = styled.h1`
    font-family: ${font};
    display: flex;
    background-color: white;
    width: 930px;
    height: 114px;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    border-radius: 50px;
    margin-top: 54px;
`
const TodoInput = styled.input`
    font-family: ${font};
    width: 890px;
    height: 65px;
    border-radius: 50px;
    border: none;
    outline: none;
    font-size: 30px;
    margin-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
`
const Subtitle = styled.div`
    font-family: ${font};
    font-size: 30px;
    margin-top: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ListContainer = styled.div`
    width: 930px;
    min-height: 550px;
    border-radius: 50px;
    background-color: white;
    margin-top: 19px;
    margin-bottom: 30px;
`
const List = styled.div`
    display: flex;
    padding-top: 22px;
    padding-bottom: 22px;
    padding-left: 44px;
`

const Todo = styled.span`
    font-family: ${font};
    width: 630px;
    height: 48px;
    border-radius: 50px;
    background-color : #ebebeb;
    margin-right: 65px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 30px;
`

const DeleteButton = styled.button`
    font-family: ${font};
    width: 48px;
    height: 48px;
    background-color: #EC6F6F;
    border-radius: 50%;
    outline: none;
    border: none;

`
const AllDeleteButton = styled.button`
    margin-left: 835px;
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: ${font};
    width: 48px;
    height: 48px;
    background-color: #EC6F6F;
    border-radius: 50%;
    outline: none;
    border: none;

`
export default Todolist;