import styled from "styled-components";
import { Select } from "antd";

export const StyledSelect = styled(Select)`
  display: block;
  width: 20%;
  height: 56px;
  background: #fff;
  color:#0075FF;
  
  padding: 1px;
  &::placeholder {
    color: #344054;
    opacity: 1;
  }
`;
