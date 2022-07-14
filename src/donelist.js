import styled from 'styled-components'
import X from "./img/x.svg"
import { useEffect, useState } from 'react'
import request from "./request";
import { Link } from 'react-router-dom';

const BASEURL = process.env.REACT_APP_BASE_URL;
const font = 'ACCchildrenheartOTF-Regular';


function Donelist() {
    const DoneList = async () => {
        const res = await request.get(`${BASEURL}/done`)  //DoneList 목록 가져오기
        setRes((res.data));
        console.log(res.data);
    }
    const [input, setInput] = useState("");
    const [res, setRes] = useState([]);

    const onSubmit = async (e) => {
        if (e.key === "Enter") {
            await request.post(`${BASEURL}/todo`,
                {
                    contents: input
                }
            );
            DoneList();
            setInput(""); 
        }
    }

    useEffect(() => {
        DoneList()
    }, []) 

    const deleteList = async (Id) => {
        await request.delete(`${BASEURL}/done/${Id}`).then(() => DoneList()) 
    }

    const allDelete = async () => {
        await request.delete(`${BASEURL}/done/all`)
        DoneList();
    }

    const onCrystal = async (e, id) => {
        await request.put(`${BASEURL}/done/${id}`,
            {
                contents: e.target.value
            }
        )
    }

    return (
        <>
            <header>
                <Link to="/todolist">
                <GoTodo> >> Todo list</GoTodo>
                </Link>
                <TitleDiv>Done list</TitleDiv>
                <DoneInput onChange={(e) => { setInput(e.target.value); }} value={input} onKeyPress={onSubmit}></DoneInput>
            </header>
            <section>
                <Subtitle>내가 오늘 해낸 일</Subtitle>
                <ListContainer>
                    <AllDeleteButton onClick={() => allDelete()}>ALL</AllDeleteButton>
                    <List>
                        <Done defaultValue={"Todolist 완성"} onBlur={(e) => onCrystal(e, 3)}></Done>
                        <DeleteButton onClick={() => deleteList(3)}><img src={X} /></DeleteButton>
                    </List>
                    <List>
                        <Done defaultValue={"개인프로젝트 보고서 다 씀"} onBlur={(e) => onCrystal(e, 3)}></Done>
                        <DeleteButton onClick={() => deleteList(3)}><img src={X} /></DeleteButton>
                    </List>
                    {res.map((data) => (
                        <List>
                            <Done defaultValue={data.contents} onBlur={(e) => onCrystal(e, data.id)}></Done>
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
    margin-top: 10px;
`
const DoneInput = styled.input`
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
    margin-bottom: 10px;
`
const List = styled.div`
    display: flex;
    padding-top: 22px;
    padding-bottom: 22px;
    padding-left: 44px;
    justify-content: center;
`

const Done = styled.input`
    font-family: ${font};
    width: 650px;
    height: 48px;
    border-radius: 50px;
    background-color : #ebebeb;
    margin-right: 65px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 30px;
    border: none;
    outline: none;
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
    color: white;
    font-size: 20px;
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

const GoTodo = styled.button`
    height: 44px;
    width: 210px;
    margin-top: 10px;
    margin-left: 700px;
    border: none;
    outline: none;
    border-radius: 20px;
    background-color: white;
    font-family: ${font};
    font-size: 25px;
`
export default Donelist;