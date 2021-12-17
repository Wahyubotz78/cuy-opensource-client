import {
  FaRoute,
  FaPoll,
  FaCalendarCheck,
  FaTicketAlt,
  FaTv,
} from "react-icons/fa";
import {
  StyledContainer,
  Title,
  SubTitle,
  Description,
  Detail,
  Actions,
  ActionChild,
  StyledPhoto,
} from "../../../styled/courseContentStyle";
import NavbarBack from "../../NavbarBack";
export default function Frontend({
  title,
  date,
  techstack,
  description,
  detail,
  level,
  bonus,
  price,
  meet,
  actions,
}) {
  return (
    <div>
      <StyledContainer>
        <NavbarBack />
        <center>
          <StyledPhoto src="/images/frontendbasic.jpg" />
        </center>
        <Title>{title}</Title>
        <Description>
          <Detail>
            <FaCalendarCheck /> {date}
          </Detail>
          <Detail>
            <FaRoute /> {techstack}
          </Detail>
          <Detail>
            <FaPoll /> {level}
          </Detail>
          <Detail>
            <FaTicketAlt /> {price}
          </Detail>
          <Detail>
            <FaTv /> {meet}
          </Detail>
          <div style={{ marginTop: 15, marginBottom: 15 }}>
            <small>🚀 ini ada contoh untuk testing sebagai gambaran </small>
            <a
              href="/course/journey-1/demo"
              style={{
                textDecoration: "underline",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              TRY LIVE DEMO
            </a>
          </div>
        </Description>
        <hr />
        <Description>
          <SubTitle>📖 Deskripsi</SubTitle>
          <Detail>{description}</Detail>
        </Description>
        <Description>
          <SubTitle>✅ Rekomendasi</SubTitle>
          <Detail>{detail}</Detail>
        </Description>
        <Description>
          <Detail>🙌 Bonus {bonus}</Detail>
        </Description>
        <Actions>
          {actions.map((action, i) => (
            <ActionChild key={i} onClick={action.onClick}>
              {action.label}
            </ActionChild>
          ))}
        </Actions>
      </StyledContainer>
    </div>
  );
}
