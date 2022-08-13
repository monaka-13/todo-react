import styled from 'styled-components';
import {TabBodyContainer} from "./components/tag-body-container";

const ListItem = styled.div`
  padding: 8px 16px;

  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

export const List = ({ langs }) => {
  return (
    <TabBodyContainer>
      <h4>取り扱い言語リスト</h4>
      <div>
        {
          langs.map((lang, index) => {
            return <ListItem key={index}>{ lang }</ListItem>
          })
        }
      </div>
    </TabBodyContainer>
  )
};