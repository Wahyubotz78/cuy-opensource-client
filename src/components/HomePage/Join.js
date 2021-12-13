import { Wrapper, CircleBox, JoinButton } from "../../styled/global"
export default function Join({ open, setOpen }) {
    return (
        <Wrapper>
            <CircleBox>
                <img src="/images/join.svg" alt="deacourse" />
            </CircleBox>
            <JoinButton onClick={() => setOpen(!open)}>GABUNG KUY</JoinButton>
        </Wrapper>
    )
}