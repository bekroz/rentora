import React from "react";
import { Components } from "../../../components";
import RN from "../../../components/common/react-native";
import { Layouts } from "../../../layouts";

const FeaturedList = () => {
  return (
    <Layouts.FeaturedListLayout>
      <RN.CustomView mb={5}>
        <Components.ScreenBased.FeaturedList.TopBar />
      </RN.CustomView>
      <Components.ScreenBased.FeaturedList.ImgBtnGroup />
    </Layouts.FeaturedListLayout>
  );
};

export default FeaturedList;
