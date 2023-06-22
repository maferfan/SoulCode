import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items:center;
        text-align: center;
        height:100vh;
        gap: 8px;

        .aprovado{
            border:1px solid green;
            width:200px;
        }

        .aprovado:hover{
            background-color:green;
            cursor: pointer;
        }

        .reprovado {
            border:1px solid red;
            width:200px;
        }

        .reprovado:hover{
            background-color:red;
            cursor: pointer;
        }
`