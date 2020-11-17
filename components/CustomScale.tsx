
import {Animated} from 'react-native';

export const SCALE = {
    // this defines the terms of our scaling animation. 
    getScaleTransformationStyle(animated: Animated.Value, startSize: number = 1.05, endSize: number = 0.5) {
      const interpolation = animated.interpolate({
        inputRange: [0, 1],
        outputRange: [startSize, endSize],
    });
      const translateY = animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0,-45],
    });
      return {
        transform: [
          { scale: interpolation },
          { translateY : translateY }
        ],
      };
    },

   pressInAnimation(animated: Animated.Value, duration: number = 150) {
      animated.setValue(0);
      Animated.timing(animated, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }).start();
    },

    pressOutAnimation(animated: Animated.Value, duration: number = 150) {
      animated.setValue(1);
      Animated.timing(animated, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }).start();
    },
  };