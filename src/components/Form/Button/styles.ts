import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 18px;
  border-radius: 5px;

  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.shape};
  `}
`;
