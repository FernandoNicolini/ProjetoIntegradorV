import styled from "styled-components";

export const Container = styled.div`
 height: 100px;
 background: #9AAE9D;
 text-align: end;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 20px;

 /* Responsive adjustments */
 @media (max-width: 1038px) {
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    height: auto;
 }
`;


// export const Container = styled.div`
//   height: 100px;
//   background: #9AAE9D;
//   text-align: end;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
// `;


export const ButtonLogout = styled.button`
 background: #FF4136;
 color: white;
 border: none;
 padding: 10px 20px;
 cursor: pointer;
 font-size: 16px;
 margin-left: 50px;
 border-radius: 5px;
 transition: all 0.3s ease;
 &:hover {
    background: #FF6347;
 }
`;



export const TransparentButton = styled.button`
 background: transparent;
 border: none;
 color: black; /* Cor do texto */
 padding: 10px 20px;
 cursor: pointer;
 font-size: 16px;
 transition: all 0.3s ease;
 margin: 16px;
 &:hover {
    background: rgba(255, 255, 255, 0.1); /* Fundo sutil ao passar o mouse */
    //color: #fff; /* Mantém a cor do texto */
    border-radius: 5px; /* Adiciona bordas arredondadas ao destaque */
    //box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); /* Efeito de destaque ao redor do texto */
 }

 /* height: 3rem;
 width: 5rem; */

`;