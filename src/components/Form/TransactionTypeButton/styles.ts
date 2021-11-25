import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
  type: "up" | "down";
}

interface ContainerProps {
  type: "up" | "down";
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ theme, type, isActive }) => css`
    width: 48%;

    padding: 16px;
    border-width: ${isActive ? 0 : 1.5}px;
    border-style: solid;
    border-color: ${theme.colors.text};
    border-radius: 5px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${isActive &&
    type === "up" &&
    css`
      background: ${theme.colors.success_light};
    `}

    ${isActive &&
    type === "down" &&
    css`
      background: ${theme.colors.attention_light};
    `}
  `}
`;

export const Icon = styled(Feather)<IconProps>`
  margin-right: 12px;
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.title};
  `}
`;
