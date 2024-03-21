import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Header from '../Header';
const Material = () => {
  const [date, setDate] = useState('');
  const [grade, setGrade] = useState('');
  const [Subject, setSubject] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });

      if (!result.cancelled) {
        setSelectedFile(result.uri);
      }
    } catch (error) {
      console.log('Error picking document:', error);
    }
  };

  const uploadDocument = async () => {
    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', {
          uri: selectedFile,
          type: 'application/pdf',
          name: 'material.pdf',
        });

        const response = await fetch(
          'https://your-api-endpoint.com/material/upload',
          {
            method: 'POST',
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (response.ok) {
          // Save the file details in the database
          const fileData = {
            date,
            fileUrl: 'https://your-api-endpoint.com/materials/material.pdf',
          };

          // Send the fileData to your API or database for registration
          // Example using fetch:
          const registerResponse = await fetch(
            'https://your-api-endpoint.com/materials',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(fileData),
            }
          );

          if (registerResponse.ok) {
            // File registration successful
            console.log('File registered successfully');
          } else {
            // File registration failed
            console.log('File registration failed');
          }
        } else {
          console.log('File upload failed');
        }
      } else {
        console.log('No file selected');
      }
    } catch (error) {
      console.log('Error uploading document:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Student Material" />
      <View style={styles.content}>
        <Text style={styles.label}>Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter date"
          value={date}
          onChangeText={setDate}
        />
  <TextInput
          style={styles.input}
          placeholder="Enter Grade"
          value={date}
          onChangeText={setGrade}
        />
          <TextInput
          style={styles.input}
          placeholder="Enter Subject"
          value={date}
          onChangeText={setSubject}
        />
        <Button title="Select File" onPress={pickDocument} />

        {selectedFile && (
          <Text style={styles.selectedFile}>{selectedFile}</Text>
        )}

        <Button title="Upload" onPress={uploadDocument} />
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
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  selectedFile: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Material;