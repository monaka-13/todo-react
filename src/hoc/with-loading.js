import styled from 'styled-components';
import { useState, useEffect,useContext } from 'react';
import{ThemeContext} from '../contexts/ThemeContext';

const LoadDiv = styled.div`
    height:100%;
    padding:36px;
    color:${({theme})=>theme.color};
    background-color:${({theme})=>theme.backgroundColor};
`
export const withLoading=(WrappedComponent,fetchData)=>{
    return()=>{
        const [data,setData]=useState(null);
        const [theme]=useContext(ThemeContext);
        useEffect(()=>{
            fetch();
        },[])
        const fetch =async()=>{
            const data=await fetchData();
            setData(data);
        }
        const load=(
            <LoadDiv theme={theme}>now loading...</LoadDiv>
        )
        return data?<WrappedComponent data={data} /> : load;
    }
}
