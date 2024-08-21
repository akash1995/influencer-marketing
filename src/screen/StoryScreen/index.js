import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import StoryContainer from "./StoryContainer";

export default class StoryScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StoryContainer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
