import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { CheckBox } from 'expo';
import Header from '../Header';

const StudCommunication = () => {
  const [date, setDate] = useState('');
  const [materialChecked, setMaterialChecked] = useState(false);
  const [behaviorChecked, setBehaviorChecked] = useState(false);
  const [concentrationChecked, setConcentrationChecked] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('');
  const [teacherComment, setTeacherComment] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Teacher Attendance" />
      <View style={styles.content}>
        <Text style={styles.label}>Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter date"
          value={date}
          onChangeText={setDate}
        />

        <View style={styles.row}>
          <CheckBox
            value={materialChecked}
            onValueChange={setMaterialChecked}
          />
          <Text style={styles.checkboxLabel}>Material</Text>

          <CheckBox
            value={behaviorChecked}
            onValueChange={setBehaviorChecked}
          />
          <Text style={styles.checkboxLabel}>Behavior</Text>

          <CheckBox
            value={concentrationChecked}
            onValueChange={setConcentrationChecked}
          />
          <Text style={styles.checkboxLabel}>Concentration</Text>
        </View>

        <Text style={styles.label}>Current Status:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter current status"
          value={currentStatus}
          onChangeText={setCurrentStatus}
        />

        <Text style={styles.label}>Teacher Comment:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter teacher comment"
          value={teacherComment}
          onChangeText={setTeacherComment}
        />
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
});

export default StudCommunication;