import styled from 'styled-components'

export const Container = styled.div`
    background-color: #293040;
    margin-bottom: 25px;
    max-height: 350px;
    max-height: 300px;
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
    color: #E9DFDE;
    text-align: center;
    font-size: 22px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const Description = styled.h3`
    color: #E9DFDE;
    text-align: justify;
    font-size: 0.95em;
    min-height: 3em;
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
