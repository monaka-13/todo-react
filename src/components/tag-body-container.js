import styled from 'styled-components';

const Component =styled.div`
    padding:12px 64px;
`

export const TabBodyContainer =({title,children})=>{
    return(
    <Component>
        <h4>{title}</h4>
        {children}
    </Component>
    )
}