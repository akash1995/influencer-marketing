// StoryView.js
import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const { width, height } = Dimensions.get("window");

const StoryView = ({ story, onNextStory, onPrevStory }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 1 ? prev + 0.01 : 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [currentImageIndex]);

  const handleNextImage = () => {
    if (currentImageIndex < story.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      onNextStory();
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      onPrevStory();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePrevImage}>
        <View style={styles.leftZone} />
      </TouchableWithoutFeedback>
      <Image
        source={{ uri: story.images[currentImageIndex] }}
        style={styles.image}
      />
      <View style={styles.progressBarContainer}>
        {story.images.map((_, index) => (
          <View key={index} style={styles.progressBar}>
            <View
              style={{
                ...styles.progress,
                width: `${index === currentImageIndex ? progress * 100 : 0}%`,
              }}
            />
          </View>
        ))}
      </View>
      <TouchableWithoutFeedback onPress={handleNextImage}>
        <View style={styles.rightZone} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  progressBarContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    height: 2,
  },
  progressBar: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginHorizontal: 1,
  },
  progress: {
    height: "100%",
    backgroundColor: "white",
  },
  leftZone: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "50%",
    zIndex: 11,
  },
  rightZone: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: "50%",
  },
});

export default StoryView;
