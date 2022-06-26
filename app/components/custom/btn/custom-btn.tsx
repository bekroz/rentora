import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

// TODO: Refactor undefined values into global variable
interface ButtonCustomProps {
  children: React.ReactNode;
  style?: any;
  color?: string;
  flex?: number;
  flexGrow?: number;
  row?: boolean;
  column?: string;
  align?: string;
  justify?: string;
  radius?: number;
  position?: "absolute" | "relative";
  zIndex?: number;
  m?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  mv?: number;
  mh?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  pv?: number;
  ph?: number;
  w?: number | string;
  h?: number | string;
  bottom?: number;
  right?: number;
  left?: number;
  top?: number;
  disabled?: boolean;
  borderWidth?: number;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderColor?: string;
  onPress?: any;
  hitSlop?: { top: number; right: number; bottom: number; left: number };
}

const ButtonCustom = ({
  children,
  style,
  color,
  flex,
  flexGrow,
  row,
  column,
  align,
  justify,
  borderWidth,
  borderTopWidth,
  borderBottomWidth,
  borderRightWidth,
  borderLeftWidth,
  borderColor,
  radius,
  position,
  zIndex,
  bottom,
  right,
  left,
  top,
  m,
  mt,
  mb,
  mr,
  ml,
  mv,
  mh,
  p,
  pt,
  pb,
  pr,
  pl,
  pv,
  ph,
  w,
  h,
  hitSlop,
  onPress,
  disabled,
  ...rest
}: ButtonCustomProps) => {
  const blockStyle = StyleSheet.flatten([
    color !== undefined && { backgroundColor: color },
    flex !== undefined && { flex },
    flexGrow !== undefined && { flexGrow },
    row !== undefined && { flexDirection: "row" },
    column !== undefined && { flexDirection: "column" },
    align !== undefined && { alignItems: align },
    justify !== undefined && { justifyContent: justify },
    radius !== undefined && { borderRadius: radius },
    borderWidth !== undefined && { borderWidth },
    borderTopWidth !== undefined && { borderTopWidth },
    borderBottomWidth !== undefined && { borderBottomWidth },
    borderRightWidth !== undefined && { borderRightWidth },
    borderLeftWidth !== undefined && { borderLeftWidth },
    borderColor !== undefined && { borderColor },
    m !== undefined && { margin: m },
    mt !== undefined && { marginTop: mt },
    mb !== undefined && { marginBottom: mb },
    mr !== undefined && { marginRight: mr },
    ml !== undefined && { marginLeft: ml },
    mv !== undefined && { marginVertical: mv },
    mh !== undefined && { marginHorizontal: mh },
    p !== undefined && { padding: p },
    pt !== undefined && { paddingTop: pt },
    pb !== undefined && { paddingBottom: pb },
    pr !== undefined && { paddingRight: pr },
    pl !== undefined && { paddingLeft: pl },
    pv !== undefined && { paddingVertical: pv },
    ph !== undefined && { paddingHorizontal: ph },
    w !== undefined && { width: w },
    h !== undefined && { height: h },
    position !== undefined && { position },
    zIndex !== undefined && { zIndex },
    bottom !== undefined && { bottom },
    right !== undefined && { right },
    left !== undefined && { left },
    top !== undefined && { top },
    disabled,
    hitSlop !== undefined && { hitSlop },
    style,
  ]);

  return (
    <TouchableOpacity
      style={blockStyle}
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ButtonCustom;
