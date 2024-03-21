import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Header from '../Header';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase';

const TeacherRequest = () => {
  const [requestData, setRequestData] = useState('');

  const handleSendRequest = async () => {
    try {
      const docRef = await addDoc(collection(db, 'TeacherRequest'), {
        requestData: requestData
      });
      console.log('Request sent with ID: ', docRef.id);
      setRequestData('');
    } catch (error) {
      console.error('Error sending request: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Teacher Request" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View>
        <TextInput style={styles.TextInput}
        placeholder='Enter date'></TextInput>
      </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            multiline
            placeholder="Enter your request here"
            value={requestData}
            onChangeText={setRequestData}
          />
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={handleSendRequest}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  letterFormat: {
    fontSize: 16,
    marginBottom: 16,
  },
  textAreaContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginBottom: 16,
    padding: 8,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TeacherRequest;