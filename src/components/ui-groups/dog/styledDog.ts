import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.navyBlue};
  padding: 16px 0;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const Main = styled.main`
  flex: 1 0 auto;
  text-align: center;
`;

export const FormSection = styled.section`
  margin: 40px 0;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled.div``;

export const TextInput = styled.input`
  padding: 8px;
  width: 320px;
  border: 1px solid #b3b3b3;
  height: 40px;
  border-radius: 3px 0 0 3px;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.red};
`;

export const SubmitButton = styled.button`
  height: 40px;
  border-radius: 0 3px 3px 0;
  border: none;
  padding: 8px;
  background-color: #333c5e;
  color: white;
`;

export const ImagesSection = styled.section``;

export const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 200px 200px 200px;
`;

export const GridItem = styled.div``;

export const DogImg = styled.img`
  padding: 8px;
  width: 200px;
  height: 200px;
`;

export const NoHitMessage = styled.p`
  font-size: 16px;
`;
