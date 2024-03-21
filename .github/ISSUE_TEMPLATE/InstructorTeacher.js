import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Header from '../Header';

const InstructorTeacher = ({ navigation }) => {
  const handleMaterialButton = () => {
    navigation.navigate('TeacherMaterial');
  };

  const handleReportButton = () => {
    navigation.navigate('TeacherReport');
  };

  const handleRequestButton = () => {
    navigation.navigate('Request');
  };

  const handleAttendanceButton = () => {
    navigation.navigate('TeacherAttendance');
  };

  return (
    <View style={styles.container}>
      <Header title="Instructor Teacher" />
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <Button
            title="Material"
            onPress={handleMaterialButton}
            color="#841584"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Report"
            onPress={handleReportButton}
            color="#841584"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Request"
            onPress={handleRequestButton}
            color="#841584"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Attendance"
            onPress={handleAttendanceButton}
            color="#841584"
          />
        </View>
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
  buttonContainer: {
    marginBottom: 10,
  },
});

export default InstructorTeacher;