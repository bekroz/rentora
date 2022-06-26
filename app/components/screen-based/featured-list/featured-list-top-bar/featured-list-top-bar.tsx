import React from "react";
import RN from "../../../common/react-native";
import { GoBackBtn } from "./featured-list-go-back-btn";
import { SettingsBtn } from "./featured-list-settings-btn";

export const TopBar = () => (
  <RN.CustomView bg="red" row justify="space-between">
    <GoBackBtn />
    <SettingsBtn />
  </RN.CustomView>
);
