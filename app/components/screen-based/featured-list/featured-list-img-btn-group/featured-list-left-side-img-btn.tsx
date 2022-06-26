import React from "react";
import RN from "../../../components/common/react-native";
import { ImgBtn } from "./featured-list-img-btn";

export const LeftSideImgBtn = () => (
  <RN.CustomBtn mr={5}>
    <ImgBtn width={220} height={224} />
  </RN.CustomBtn>
);
