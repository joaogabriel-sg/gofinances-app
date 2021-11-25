import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7,
})`
  background: ${({ theme }) => theme.colors.shape};
  padding: 18px 16px;
  border-radius: 5px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
  `}
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
