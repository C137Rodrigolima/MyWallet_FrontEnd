import styled from "styled-components";

const Header = styled.div`
    width: 326px;
    margin-top: 25px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    h1{
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;

        color: #FFFFFF;
    }

    img{
        display: flex;
        align-items: center;
        justify-content: center;

    }
`;
const TextBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;


    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    h4{
        color: #C6C6C6;
    }
    h5{
        width: 180px;
        text-align: left;
        color: #000000;
    }
    h6{
        width: 62px;
        text-align: right;
        color: ${(prop) => prop.reference? "#03AC00": "#C70000"};
    }
`;

const TextBottom = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;

    font-family: Raleway;
    font-style: normal;
    font-size: 17px;
    line-height: 20px;

    h2{
        font-weight: bold;

        color: #000000;
    }
    h3{
        font-weight: normal;
        text-align: right;

        color: ${(prop) => prop.referenceBalance>=0? "#03AC00": "#C70000"};
    }
`;

export {
    Header,
    TextBlock,
    TextBottom
};