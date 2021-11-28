import styled, { css } from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

import { DataListProps } from ".";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFPercentage(42)}px;

  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  margin-top: ${RFPercentage(20)}px;

  position: absolute;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    margin-bottom: 16px;
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
  `}
`;

export const TransactionList = styled(
  FlatList as new (
    props: FlatListProps<DataListProps>
  ) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

export const LoadContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
