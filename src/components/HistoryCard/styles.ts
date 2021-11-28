import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, color }) => css`
    background: ${theme.colors.shape};
    width: 100%;

    padding: 13px 20px;
    border-radius: 5px;
    border-left-width: 5px;
    border-left-color: ${color};
    margin-bottom: 8px;

    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;

export const Amount = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.title};
  `}
`;
