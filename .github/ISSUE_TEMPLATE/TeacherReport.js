import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
const TeacherReport = () => {
  const [reportText, setReportText] = useState('');
  const [photoData, setPhotoData] = useState('');

  const navigation = useNavigation();

  const handleSendReport = () => {
    // Send report text and photo data to the instructor report page
    navigation.navigate('InstructorReport', { reportText, photoData });
  };

  return (
    <View style={styles.container}>
      <Header title="Teacher Report" />
      <View style={styles.content}>
        <Text>Please enter your report:</Text>
        <TextInput
          style={styles.textArea}
          multiline
          placeholder="Enter report text"
          value={reportText}
          onChangeText={setReportText}
        />
        <TouchableOpacity style={styles.imagePickerButton} onPress={() => pickImage('parent')}>
            <Text style={styles.imagePickerButtonText}>Select Parent Image</Text>
          </TouchableOpacity>
          {parentImageUri && (
            <Image
              source={{ uri: parentImageUri }}
              style={styles.imagePreview}
            />
          )}
      
        <Button title="Send Report" onPress={handleSendReport} />
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textArea: {
    height: 150,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default TeacherReport;