// StoryContainer.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import StoryView from "./StoryView";

const stories = [
  {
    id: 1,
    user: "User1",
    images: [
      "https://images.unsplash.com/photo-1509221977468-59ebf138e25e?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541702633985-fd307901baff?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1518893883800-45cd0954574b?q=80&w=2544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

const StoryContainer = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      // Optionally, handle the end of all stories
      console.log("All stories completed");
    }
  };

  const handlePrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <StoryView
        story={stories[currentStoryIndex]}
        onNextStory={handleNextStory}
        onPrevStory={handlePrevStory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StoryContainer;
