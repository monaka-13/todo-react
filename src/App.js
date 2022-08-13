import { useState,useContext } from 'react';
import styled from 'styled-components';
import { List } from "./List";
import { Form } from "./Form";
import { Header } from "./Header";
import{ThemeContext} from './contexts/ThemeContext';

const Component=styled.div`
height:100%;
color: ${({theme})=>theme.color};
background-color: ${({theme})=>theme.backgroundColor};
`

function App({ data }) {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(data);
  const [theme]=useContext(ThemeContext);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  };

  return (
    <Component theme={theme}>
      <Header tab={tab} setTab={setTab}/>
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang}/>
      }
    </Component>
  );
}

export default App;