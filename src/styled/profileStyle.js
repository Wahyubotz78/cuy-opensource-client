import styled from "styled-components";

export const UserContainer = styled.div`
    padding: 10px;
`
export const RowUser = styled.div`
    display: flex;
`

export const ColUser = styled.div`
    flex: ${(props) => props.size}
`

export const ImageUser = styled.div`
    padding: 0;
    margin: 16px 0 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    list-style-type: none;
`;

export const TextUser = styled.div`
    padding: 0;
    margin: 16px 0 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: left;
    justify-content: left;
    width: 100%;
    list-style-type: none;
`;