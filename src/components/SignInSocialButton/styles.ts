import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled(RectButton)`
  background: ${({ theme }) => theme.colors.shape};
  height: ${RFValue(56)}px;
  border-radius: 5px;
  margin-bottom: 16px;

  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.View`
  height: 100%;
  padding: ${RFValue(16)}px;
  border-color: ${({ theme }) => theme.colors.background};
  border-right-width: 1px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
