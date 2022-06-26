import {
  View,
  StyleSheet,
  FlexAlignType,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";

interface ViewBlockProps {
  children?: React.ReactNode | React.ReactNode[];
  style?: any;
  bg?: string;
  flex?: number;
  flexGrow?: number;
  row?: boolean;
  column?: string;
  align?: FlexAlignType;
  alignSelf?: string;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  position?: "absolute" | "relative";
  zIndex?: number;
  radius?: number;
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
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderColor?: string;
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
}

const ViewBlock = ({
  style,
  children,
  bg,
  flex,
  flexGrow,
  row,
  column,
  align,
  alignSelf,
  justify,
  position,
  zIndex,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  borderColor,
  radius,
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
  bottom,
  top,
  left,
  right,
  ...rest
}: ViewBlockProps) => {
  const blockStyle = StyleSheet.flatten([
    bg !== undefined && { backgroundColor: bg },
    flex !== undefined && { flex },
    flexGrow !== undefined && { flexGrow },
    row !== undefined && { flexDirection: "row" },
    column !== undefined && { flexDirection: "column" },
    align !== undefined && { alignItems: align },
    alignSelf !== undefined && { alignSelf },
    justify !== undefined && { justifyContent: justify },
    position !== undefined && { position },
    radius !== undefined && { borderRadius: radius },
    borderWidth !== undefined && { borderWidth },
    borderTopWidth !== undefined && { borderTopWidth },
    borderRightWidth !== undefined && { borderRightWidth },
    borderBottomWidth !== undefined && { borderBottomWidth },
    borderLeftWidth !== undefined && { borderLeftWidth },
    borderColor !== undefined && { borderColor },
    zIndex !== undefined && { zIndex: zIndex },
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
    bottom !== undefined && { bottom },
    top !== undefined && { top },
    left !== undefined && { left },
    right !== undefined && { right },
    style,
  ]);

  return (
    <View style={blockStyle} {...rest}>
      {children}
    </View>
  );
};

export default ViewBlock;
