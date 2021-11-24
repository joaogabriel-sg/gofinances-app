import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionProps {
  type: "positive" | "negative";
}

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  padding: 17px 24px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.title};
  `}
`;

export const Amount = styled.Text<TransactionProps>`
  ${({ theme, type }) => css`
    margin-top: 2px;
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: ${type === "positive"
      ? theme.colors.success
      : theme.colors.attention};
  `}
`;

export const Footer = styled.View`
  margin-top: 19px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.text};
  `}
`;

export const CategoryName = styled.Text`
  ${({ theme }) => css`
    margin-left: 17px;
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
  `}
`;
