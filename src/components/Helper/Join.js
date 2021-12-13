import { Wrapper, CircleBox, CircleSnippet } from "../../styled/global"
export default function Join({ open, setOpen }) {
    return (
        <Wrapper>
            <CircleBox onClick={() => setOpen(!open)}>
                <img src="/images/join.png" alt="deacourse"/>
            </CircleBox>
        </Wrapper>
    )
}