import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 25px;
    max-height: 350px;
    max-height: 300px;
    background-color: #fff;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 47%;
    padding: 0px 4px 0px 4px;

    &:hover{
        box-shadow: 3px 3px 3px 6px rgba(0, 0, 0, 0.2);
    }

    @media screen and (min-width: 940px){
        width: 30%;
    }

    @media screen and (max-width: 640px){
        width: 100%;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 22px;
    margin-top: 10px;
    margin-bottom:10px;
    font-weight: 500;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const Description = styled.h3`
    text-align: justify;
    font-size: 16px;
    min-height: 2.5em;
    margin-top: 5px;
    margin-left:  5px;
    margin-right:  5px;
    margin-bottom: 5px;
    font-weight: 300;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const Image = styled.img`
    width: 100%;
`
