import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  padding-bottom: 19px;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`;

export const Content = styled.ScrollView``;

export const MonthSelect = styled.View`
  width: 100%;
  margin-top: 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MonthSelectButton = styled(BorderlessButton)``;

export const MonthSelectIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
`;

export const Month = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
`;

export const ChartContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const LoadContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
