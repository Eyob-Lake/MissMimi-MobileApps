import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import Header from '../Header';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeKhGG-1RwYMpPgA1RkUYllP3UXHzECKM",
  authDomain: "missmimi-mobileapps-1ec09.firebaseapp.com",
  projectId: "missmimi-mobileapps-1ec09",
  storageBucket: "missmimi-mobileapps-1ec09.appspot.com",
  messagingSenderId: "31747189796",
  appId: "1:31747189796:web:21b4b2d8ef59acfe6dfcb1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const TeacherAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const navigation = useNavigation();

  const handleAddAttendance = async () => {
    // Add a new attendance entry to the attendance data
    const newAttendanceData = [...attendanceData, {}];
    setAttendanceData(newAttendanceData);

    try {
      // Create a new attendance document in the "Attendance" collection
      await addDoc(collection(db, 'Attendance'), {});

      console.log('Attendance registered successfully!');
    } catch (error) {
      console.error('Error registering attendance:', error);
    }
  };

  const renderAttendanceRow = ({ item, index }) => {
    return (
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Date" />
        <TextInput style={styles.input} placeholder="Morning" />
        <TextInput style={styles.input} placeholder="Lunch Out" />
        <TextInput style={styles.input} placeholder="Lunch In" />
        <TextInput style={styles.input} placeholder="Night" />
        <TextInput style={styles.input} placeholder="Confirmation" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Teacher Attendance" />
      <View style={styles.content}>
        <Button title="Add Attendance" onPress={handleAddAttendance} />
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Name</Text>
          <Text style={styles.headerText}>Date</Text>
          <Text style={styles.headerText}>Morning</Text>
          <Text style={styles.headerText}>Lunch Out</Text>
          <Text style={styles.headerText}>Lunch In</Text>
          <Text style={styles.headerText}>Night</Text>
          <Text style={styles.headerText}>Confirmation</Text>
        </View>
        <FlatList
          data={attendanceData}
          renderItem={renderAttendanceRow}
          keyExtractor={(item, index) => index.toString()}
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
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 5,
    padding: 10,
  },
});

export default TeacherAttendance;