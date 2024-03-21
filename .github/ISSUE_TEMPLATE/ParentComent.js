import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, PanResponder } from 'react-native';
import Header from '../Header';

const Comment = ({ onSave }) => {
  const [message, setMessage] = useState('');
  const [isEditable, setIsEditable] = useState(true);

  const handleSave = () => {
    onSave(message);
    setMessage('');
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setIsEditable(false);
    },
    onPanResponderRelease: () => {
      setIsEditable(true);
    },
  });

  return (
    <View>
      <Header title="Comment" />

      {/* Comment Text Area */}
      <View style={styles.container}>
        <TextInput
          style={[styles.input, !isEditable && styles.uneditable]}
          placeholder="Write your comment..."
          value={message}
          onChangeText={text => setMessage(text)}
          multiline
          editable={isEditable}
          {...panResponder.panHandlers}
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    padding: 20,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  uneditable: {
    backgroundColor: '#f2f2f2',
  },
  button: {
    backgroundColor: '#4287f5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
export default Comment;