import React from "react";
import RN from "../../common/react-native";
import { LeftSideImgBtn } from "./featured-list-left-side-img-btn";
import { RightSideImgBtns } from "./featured-list-right-side-img-btns";

export const ImgBtnGroup = () => (
  <RN.CustomView row>
    <LeftSideImgBtn />
    <RightSideImgBtns />
  </RN.CustomView>
);
