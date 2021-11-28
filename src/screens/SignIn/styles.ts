import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 70%;

  align-items: center;
  justify-content: flex-end;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-top: 45px;

    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.shape};
    text-align: center;
  `}
`;

export const SignInTitle = styled.Text`
  ${({ theme }) => css`
    margin-top: 80px;
    margin-bottom: 67px;

    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.shape};
    text-align: center;
  `}
`;

export const Footer = styled.View`
  background: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 30%;
`;

export const FooterWrapper = styled.View`
  padding: 0 32px;
  margin-top: ${RFPercentage(-4)}px;

  justify-content: space-between;
`;
