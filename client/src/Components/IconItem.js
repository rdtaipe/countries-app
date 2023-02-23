import styled from "styled-components"

export const IconItem=({icon,style,onClick,ref})=>{return(
<Container onClick={onClick} ref={ref}>
<span style={style} className="material-symbols-rounded IconItem">{icon}</span>
</Container>
)}

const Container = styled.div`
    user-select: none;

& span{
    user-select: none;
}

&:hover{
    cursor: pointer;
    filter: brightness(.8);
}

`