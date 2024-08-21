import React, { Component } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { NavigationActions } from "react-navigation";
import fonts from "../common/assets/fonts";
import LottieView from "lottie-react-native";

export default class SplashScreen extends Component {
  state = {
    spinner: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace("HomeScreen");
    }, 5000);
  }
  navigateToScreen(route) {
    const navigateAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: route })],
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <LottieView
          style={{ width: 920, height: 400 }}
          source={require("../common/assets/images/files/milo.json")}
          loop
          autoPlay
        />
      </View>
    );
  }
}
