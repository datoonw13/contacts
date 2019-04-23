import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function InputOL(props) {
  return <TextInput {...props} style={[styles.text, props.style]} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});
