import styled from "styled-components";

const Conteiner = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;

    background-color: #8C11BE;
`;

const NativeWindow = styled.div`
    width: 326px;
    height: 100%;
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

    h1{
        width: 180px;

        font-family: Raleway;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #868686;
    }
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

        h2{
            width: 64px;

            font-family: Raleway;
            font-style: normal;
            font-weight: bold;
            font-size: 17px;
            line-height: 20px;

            color: #FFFFFF;
        }

        box-sizing: border-box;
        border-radius: 5px;
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