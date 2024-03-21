import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Header from '../Header';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const InstructorReplyRequest = () => {
  const [reply, setReply] = useState('');

  const handleReply = async () => {
    try {
      const db = getFirestore();
      const requestRef = collection(db, 'requests');

      const newReply = {
        reply: reply,
        timestamp: new Date(),
      };

      await addDoc(requestRef, newReply);
      console.log('Reply added successfully!');
      
      // Clear the reply field
      setReply('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Instructor Reply Request" />
      <View style={styles.content}>
        <Text style={styles.label}>Reply:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your reply"
          value={reply}
          onChangeText={setReply}
          multiline={true}
          numberOfLines={4}
        />
        <Button title="Reply" onPress={handleReply} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});

export default InstructorReplyRequest;