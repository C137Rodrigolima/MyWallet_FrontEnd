import styled from "styled-components";

const Conteiner = styled.div`
    height: 100vh;
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: #8C11BE;
`;

const NativeWindow = styled.div`
    width: 326px;
    height: 446px;
    margin-top: 22px;
    margin-bottom: 13px;

    display: flex;
    align-items: ${(props) => props.reference? "center": "center" };
    justify-content: ${(props) => props.reference? "center": "center" };

    background: #FFFFFF;
    border-radius: 5px;
`;

const Bottom = styled.div`
    gap: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        all: unset;
        height: 114px;
        width: 155px;
        padding: 9px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            width: 25px;
            height:25px;
        }

        background: #A328D6;
        border-radius: 5px;
    }

`;

export {
    Conteiner,
    NativeWindow,
    Bottom
};