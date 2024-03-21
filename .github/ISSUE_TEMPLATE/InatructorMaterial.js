import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import Header from '../Header';

const firebaseConfig = {
apiKey: "AIzaSyAeKhGG-1RwYMpPgA1RkUYllP3UXHzECKM",
authDomain: "missmimi-mobileapps-1ec09.firebaseapp.com",
projectId: "missmimi-mobileapps-1ec09",
storageBucket: "missmimi-mobileapps-1ec09.appspot.com",
messagingSenderId: "31747189796",
appId: "1:31747189796:web:21b4b2d8ef59acfe6dfcb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const InstructorMaterial = () => {
const [date, setDate] = useState('');
const [grade, setGrade] = useState('');
const [subject, setSubject] = useState('');
const [selectedFile, setSelectedFile] = useState(null);

// Function to handle file selection
const handleFileSelection = async () => {
try {
const file = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
  if (file.type === 'success') {
    const formData = new FormData();
    formData.append('file', {
      uri: file.uri,
      type: 'application/pdf',
      name: 'material.pdf',
    });

    const response = await fetch('https://your-api-endpoint.com/material/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.ok) {
      // Save the file details in the database
      const fileData = {
        date: new Date(),
        fileUrl: 'https://your-api-endpoint.com/materials/material.pdf',
      };
      // Your code to save the fileData in the database or perform any other action
    } else {
      // Handle error response from the server
      console.error('File upload failed');
    }
  }
} catch (error) {
  // Handle error during file selection or upload
  console.error('Error:', error);
}
};

// Function to handle document selection
const pickDocument = async () => {
try {
const file = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
if (file.type === 'success') {
setSelectedFile(file.uri);
}
} catch (error) {
console.error('Error:', error);
}
};

// Function to handle document upload
const uploadDocument = async () => {
if (selectedFile) {
try {
const formData = new FormData();
formData.append('file', {
uri: selectedFile,
type: 'application/pdf',
name: 'material.pdf',
});
const response = await fetch('https://your-api-endpoint.com/material/upload', {
method: 'POST',
body: formData,
headers: {
'Content-Type': 'multipart/form-data',
},
});
    if (response.ok) {
      // Save the file details in the database
      const fileData = {
        date: new Date(),
        fileUrl: 'https://your-api-endpoint.com/materials/material.pdf',
      };
      // Your code to save the fileData in the database or perform any other action
    } else {
      // Handle error response from the server
      console.error('File upload failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
};

return (
<View style={styles.container}>
<Header title="Student Material" />
<View style={styles.content}>
<Text style={styles.label}>Date:</Text>
<TextInput style={styles.input} placeholder="Enter date" value={date} onChangeText={setDate} />
<TextInput style={styles.input} placeholder="Enter Grade" value={grade} onChangeText={setGrade} />
<TextInput style={styles.input} placeholder="Enter Subject" value={subject} onChangeText={setSubject} />
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
backgroundColor: '#fff'},
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
borderRadius:20,
},
selectedFile: {
marginTop: 10,
marginBottom: 20,
borderRadius:20,
},
});

export default InstructorMaterial;