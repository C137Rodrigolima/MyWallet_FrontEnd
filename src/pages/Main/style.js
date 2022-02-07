import styled from "styled-components";

const Conteiner = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #8C11BE;
`;

const NativeWindow = styled.div`
    width: 326px;
    height: 446px;
    margin-top: 22px;
    margin-bottom: 13px;
    padding: 12px;

    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.reference? "left": "center" };
    justify-content: ${(props) => props.reference? "space-between": "center" };

    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
`;

const Bottom = styled.div`
    width: 326px;
    margin-bottom: 16px;

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

        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;

        box-sizing: border-box;
        border-radius: 5px;

        color: #FFFFFF;
        background: #A328D6;

        img{
            width: 25px;
            height:25px;
        }

    }

`;

export {
    Conteiner,
    NativeWindow,
    Bottom
};