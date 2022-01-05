import React, {useState} from 'react';
import {StyleSheet, View, Animated, Dimensions, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('screen');

const ActionSheet = () => {
  const [alignment] = useState(new Animated.Value(0));

  const bringUpActionSheet = () => {
    Animated.timing(alignment, {
      duration: 500,
      toValue: 1,
    }).start();
  };
  const hideActionSheet = () => {
    Animated.timing(alignment, {
      duration: 500,
      toValue: 0,
    }).start();
  };
  const actionSheetInterpolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [-height / 2.4 + 100, 0],
  });

  const actionSheetStyle = {
    bottom: actionSheetInterpolate,
  };
  const gestureHandler = e => {
    if (e.nativeEvent.contentOffset.y > 0) {
      bringUpActionSheet();
    } else if (e.nativeEvent.contentOffset.y < 0) {
      hideActionSheet();
    }
  };

  return (
    <Animated.View style={[styles.container, actionSheetStyle]}>
      <ScrollView style={styles.grabber}></ScrollView>
      <Text>Something fishing</Text>
    </Animated.View>
  );
};

export default ActionSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height / 2.4,
    marginHorizontal: hp(1),
    borderTopLefRadius: hp(4),
    borderTopRightRadius: hp(4),
  },
  grabber: {
    width: 60,
    borderTopWidth: 5,
    borderTopColor: 'gray',
  },
});
