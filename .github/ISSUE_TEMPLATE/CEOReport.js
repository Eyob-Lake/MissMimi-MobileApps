import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { CEOINSContext } from '../CEOINSContext';

const CEOReport = () => {
  const { chatMessages } = useContext(CEOINSContext);

  return (
    <View>
      {/* Render chat messages */}
      {chatMessages.map((message, index) => (
        <Text key={index}>{`${message.sender}: ${message.message}`}</Text>
      ))}
    </View>
  );
};

export default CEOReport;