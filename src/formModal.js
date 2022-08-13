import {useContext} from 'react';
import { Modal } from "./components/modal";
import styled from "styled-components";
import { Button } from "./components/button";
import {ThemeContext, THEMES} from "./contexts/ThemeContext";

const Container = styled.div`
    width:240px;
    border-radius:10px;
    padding:24px 36px;
    color:${({theme})=>theme.color};
    background-color:${({theme})=>theme.backgroundColor};
    border:${({theme})=>theme===THEMES.dark?'2px solid white':'none'};
`

const ButtonWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:24px;
`
export const FormModal = ({cancel,confirm})=>{
    const [theme]=useContext(ThemeContext);
    return (
        <Modal>
            <Container theme={theme}>
                <div>are you sure?</div>
                <ButtonWrapper>
                    <Button onClick={cancel}>cancel</Button>
                    <Button onClick={confirm}>confirm</Button>
                </ButtonWrapper>
            </Container>
        </Modal>
    )
}