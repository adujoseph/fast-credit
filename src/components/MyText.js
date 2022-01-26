import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const MyText = ({children, style}) => {
  return (
    <>
      <Text style={[styles.text, {...style}]}>{children}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
