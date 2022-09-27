import { ReactNode } from "react";
import styled from "styled-components";

export const StyledDiv = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
`;

export type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props): JSX.Element => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;
