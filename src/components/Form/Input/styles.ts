import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  active: boolean;
}

export const Container = styled(TextInput)<Props>`
  ${({ active, theme }) => css`
    background: ${theme.colors.shape};
    width: 100%;

    padding: 16px 18px;
    border-radius: 5px;
    margin-bottom: 8px;

    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};

    ${active &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.attention};
    `}
  `}
`;
