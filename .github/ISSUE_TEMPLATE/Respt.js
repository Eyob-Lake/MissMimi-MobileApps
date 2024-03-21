import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../Header';

const Respt = ({ responseData }) => {
  return (
    <View style={styles.container}>
      <Header title="Response" />
      {/* Response Area */}
      <View style={styles.responseArea}>
        <TextInput
          style={styles.input}
          placeholder="Enter your response here"
          value={responseData}
          multiline
          editable={false}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  responseArea: {
    flex: 1,
    padding: 10,
  },
  input: {
    width: '60%',
    height: '60%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
};
export default Respt;