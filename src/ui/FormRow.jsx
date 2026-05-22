import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: start;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:has(button) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  &:has(button:only-child):not(:has(label)) button {
    width: 100%;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
