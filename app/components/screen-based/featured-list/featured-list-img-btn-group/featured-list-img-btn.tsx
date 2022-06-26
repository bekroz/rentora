import React from "react";
import RN from "../../../components/common/react-native";
import { PngIcons } from "../../../constants/icons";

export const ImgBtn = ({ width = 160, height = 160 }) => (
  <RN.Image source={PngIcons.featuredList.house1} style={{ width, height }} />
);
