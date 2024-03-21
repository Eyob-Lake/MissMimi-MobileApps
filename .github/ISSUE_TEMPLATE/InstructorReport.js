import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { CEOINSContext } from '../CEOINSContext';

const InstructorReport = ({ navigation }) => {
  const { addMessage } = useContext(CEOINSContext);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    addMessage({ sender: 'Instructor', message });
    setMessage('');
  };

  return (
    <View>
      {/* Render chat messages */}
      {/* ... */}
      
      {/* Input field and send button */}
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message..."
      />
      <Button title="Send" onPress={sendMessage} />

      <Button
        title="Go to CEO Report"
        onPress={() => navigation.navigate('CEOReport')}
      />
    </View>
  );
};

export default InstructorReport;