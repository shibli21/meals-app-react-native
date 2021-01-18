import React, { ReactNode } from "react";
import { Text, StyleSheet, TextProps } from "react-native";

interface Props {
  children: ReactNode;
}

const DefaultText = (props: Props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});

export default DefaultText;
