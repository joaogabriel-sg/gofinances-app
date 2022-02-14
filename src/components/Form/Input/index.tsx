import React from "react";
import { TextInputProps } from "react-native";

import * as S from "./styles";

interface Props extends TextInputProps {
  active?: boolean;
}

export function Input({ active = false, ...rest }: Props) {
  return <S.Container active={active} {...rest} />;
}
