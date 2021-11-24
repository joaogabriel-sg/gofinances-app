import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface TypeProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
  background: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};

  width: ${RFValue(300)}px;
  padding: 19px 23px ${RFValue(42)}px;
  border-radius: 5px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${type === "total" ? theme.colors.shape : theme.colors.title};
  `}
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${({ type, theme }) =>
    type === "up" &&
    css`
      color: ${theme.colors.success};
    `}

  ${({ type, theme }) =>
    type === "down" &&
    css`
      color: ${theme.colors.attention};
    `}

  ${({ type, theme }) =>
    type === "total" &&
    css`
      color: ${theme.colors.shape};
    `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    margin-top: 38px;

    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${type === "total" ? theme.colors.shape : theme.colors.title};
  `}
`;

export const LastTransaction = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${type === "total" ? theme.colors.shape : theme.colors.text};
  `}
`;
