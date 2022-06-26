import React from "react";
import { Text, StyleSheet } from "react-native";
import { SIZES } from "../../../theme";

interface TextRegularProps {
  children: React.ReactNode | React.ReactNode[];
  style?: any;
  size?: number;
  weight?: "400" | "500" | "600" | "700" | "800";
  color?: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  sm?: boolean;
  xs?: boolean;
  xxs?: boolean;
  transform?: "capitalize" | "uppercase" | "lowercase";
}

const CustomText = ({
  children,
  style,
  size = SIZES.text,
  weight,
  color,
  textAlign,
  transform,
  h1,
  h2,
  h3,
  h4,
  sm,
  xs,
  xxs,
  ...rest
}: TextRegularProps) => {
  const textStyle = StyleSheet.flatten([
    size !== undefined && { fontSize: size },
    h1 !== undefined && { fontSize: SIZES.h1 },
    h2 !== undefined && { fontSize: SIZES.h2 },
    h3 !== undefined && { fontSize: SIZES.h3 },
    h4 !== undefined && { fontSize: SIZES.h4 },
    sm !== undefined && { fontSize: SIZES.sm },
    xs !== undefined && { fontSize: SIZES.xs },
    xxs !== undefined && { fontSize: SIZES.xxs },
    weight !== undefined && { fontWeight: weight },
    color !== undefined && { color },
    textAlign !== undefined && { textAlign },
    transform !== undefined && { textTransform: transform },
    style,
  ]);
  return (
    <Text style={textStyle} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
