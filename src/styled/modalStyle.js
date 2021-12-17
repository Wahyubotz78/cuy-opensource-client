import styled from "styled-components";

export const ModalContainer = styled.div`
	background: #FFF;
	width: 50%;
	height: 450px;
    top: 100px;
    position: fixed;
	transform: 'translate(-50%,-50%)',
	border-radius: 50px;
	padding: 0.75rem;
	color: rgba(0,0,139, 0.7);
    @media (max-width: 500px) {
        width: 100%;
    }
`;

export const ModalPopup = styled.div`
	z-index: auto;
	display: ${({ show }) => (show ? 'flex' : 'none')};
	position: fixed;
    justify-content: center;
	top: 0;
	left: 0;
    margin: 0 auto;
    text-align: center;
	height: 100%;
	width:100%;
	background: rgba(0,0,0, 0.7);
`;

export const Header = styled.div`
    font-size: 1.8rem;
    color: #333;
`;

export const HBar = styled.div`
    width: 100%;
    height: 1px;
    border: solid 1px rgba(0,0,0, 0.4);
    background-color: rgba(0,0,0, 0.4);
`;

export const ButtonBar = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    justify-content: flex-end;
`;

export const Button = styled.button`
    background-color: #333;
    color: white;
    border-radius: 8px;
    width: auto;
    padding: 0.2rem;
    margin: 0.2rem;
    font-size: 0.8rem;
    cursor: pointer;
`;

export const Slot = styled.div`
    font-size: 1.6rem;
    color: #333;
`;