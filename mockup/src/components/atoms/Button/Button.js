import styled from "styled-components";

const Button = styled.button.attrs((props) => ({
  className: "button",
  type: props.submit ? "submit" : "button",
}))`
  background: ${(props) =>
    props.secondary ? props.theme.color.secondary : props.theme.color.primary};
  border: none;
  color: #fff;
  font-family: ${(props) => props.theme.font.display};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: ${(props) => (props.margin ? props.margin : "0.5rem")};
  padding: ${(props) =>
    props.md ? "0.5rem" : props.lg ? "1rem" : props.xl ? "1.5rem" : "0.25rem"};
  transition: all 1s;
  width: 10.75rem;
  height: 3.4375rem;
  &:hover {
    filter: contrast(2);
    transition: all 1s;
  }
`;

export default Button;
