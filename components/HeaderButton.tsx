import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import {
  HeaderButton,
  HeaderButtonProps,
} from "react-navigation-header-buttons";
import colors from "../constants/colors";

interface Props extends HeaderButtonProps {}

const CustomHeaderButton = (props: Props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : colors.primaryColor}
      {...props}
    />
  );
};

export default CustomHeaderButton;

const styles = StyleSheet.create({});
