import React from "react";
import RN from "../../../components/common/react-native";
import { ImgBtn } from "./featured-list-img-btn";

export const RightSideImgBtns = () => (
  <RN.CustomView>
    <RN.CustomView mb={5}>
      <ImgBtn />
    </RN.CustomView>
    <ImgBtn />
  </RN.CustomView>
);
