import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../Header';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase';

const SelfCommunication = () => {
  const [date, setDate] = useState('');
  const [studentName, setStudentName] = useState('');
  const [grade, setGrade] = useState('');
  const [missedClass, setMissedClass] = useState('');
  const [missedMaterial, setMissedMaterial] = useState('');
  const [hasExam, setHasExam] = useState('');
  const [copyingBehavior, setCopyingBehavior] = useState('');
  const [disturbingBehavior, setDisturbingBehavior] = useState('');
  const [preparedNoteFor, setPreparedNoteFor] = useState('');
  const [difficultCourse, setDifficultCourse] = useState('');

  const handleSubmit = async () => {
    try {
      const selfCommunicationData = {
        date,
        studentName,
        grade,
        missedClass,
        missedMaterial,
        hasExam,
        copyingBehavior,
        disturbingBehavior,
        preparedNoteFor,
        difficultCourse,
      };
      const selfCommunicationRef = collection(db, 'TeacherCommunication');
      await addDoc(selfCommunicationRef, selfCommunicationData);

      // Resetting the form fields
      setDate('');
      setStudentName('');
      setGrade('');
      setMissedClass('');
      setMissedMaterial('');
      setHasExam('');
      setCopyingBehavior('');
      setDisturbingBehavior('');
      setPreparedNoteFor('');
      setDifficultCourse('');

      // Show a success message or navigate to another screen
      console.log('Self communication submitted successfully');
    } catch (error) {
      // Handle error
      console.error('Error submitting self communication:', error);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header title="Self Communication" />
        <View style={styles.formContainer}>
          <ScrollView>
            <Text style={styles.centerText}>MMTC Education Center</Text>
            <TextInput
              style={styles.input}
              value={date}
              onChangeText={setDate}
              placeholder="Enter date"
            />
            <TextInput
              style={styles.input}
              value={studentName}
              onChangeText={setStudentName}
              placeholder="Enter student name"
            />
            <TextInput
              style={styles.input}
              value={grade}
              onChangeText={setGrade}
              placeholder="Enter grade"
            />
            <TextInput
              style={styles.input}
              value={missedClass}
              onChangeText={setMissedClass}
              placeholder="Enter student who missed class"
            />
            <TextInput
              style={styles.input}
              value={missedMaterial}
              onChangeText={setMissedMaterial}
              placeholder="Enter student who missed material"
            />
            <TextInput
              style={styles.input}
              value={hasExam}
              onChangeText={setHasExam}
              placeholder="Enter student who has an exam"
            />
            <TextInput
              style={styles.input}
              value={copyingBehavior}
              onChangeText={setCopyingBehavior}
              placeholder="Enter student who copies improperly"
            />
            <TextInput
              style={styles.input}
              value={disturbingBehavior}
              onChangeText={setDisturbingBehavior}
              placeholder="Enter student who disturbs"
            />
            <TextInput
              style={styles.input}
              value={preparedNoteFor}
              onChangeText={setPreparedNoteFor}
              placeholder="Enter for whom you prepared note"
            />
            <TextInput
              style={styles.input}
              value={difficultCourse}
              onChangeText={setDifficultCourse}
              placeholder="Enter a course which you found difficult"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
     </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    padding: 20,
  },
  centerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelfCommunication;