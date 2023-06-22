import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:50px;
    border: 2px solid black;

        .card{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;

            img{
                width: 150px
            }
    }
`