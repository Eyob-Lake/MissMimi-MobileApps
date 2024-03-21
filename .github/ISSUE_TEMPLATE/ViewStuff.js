import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { getFirestore, collection, onSnapshot, deleteDoc } from 'firebase/firestore';
import * as fileSystem from 'expo-file-system';
import Header from '../Header';
import { initializeApp } from 'firebase/app';

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
const ViewStuff = () => {
  const [stuffList, setStuffList] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'stuff1'), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setStuffList(data);
    });
    return () => unsubscribe();
  }, []);
  const handleDelete = async (ID) => {
    try {
      const docRef = doc(db, 'stuff1', ID);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  const handleEdit = async (eid, updatedData) => {
    try {
      const docRef = doc(db, 'stuff1', eid);
      await updateDoc(docRef, updatedData);
      console.log('Document updated successfully!');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  }
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={true} vertical={true} contentContainerStyle={styles.tableContainer}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerText, styles.column]}>EID</Text>
            <Text style={[styles.headerText, styles.column]}>Full Name</Text>
            <Text style={[styles.headerText, styles.column]}>Gender</Text>
            <Text style={[styles.headerText, styles.column]}>Date of Birth</Text>
            <Text style={[styles.headerText, styles.column]}>Birth Place</Text>
            <Text style={[styles.headerText, styles.column]}>Marital Status</Text>
            <Text style={[styles.headerText, styles.column]}>Education Level</Text>
            <Text style={[styles.headerText, styles.column]}>University</Text>
            <Text style={[styles.headerText, styles.column]}>Work Experience</Text>
            <Text style={[styles.headerText, styles.column]}>Attached URL</Text>
            <Text style={[styles.headerText, styles.column]}>Actions</Text>
          </View>
          {stuffList.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <Text style={[styles.rowText, styles.column]}>{item.eid}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.fullName}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.gender}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.dateOfBirth}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.birthPlace}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.maritalStatus}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.educationLevel}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.university}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.workExperience}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.attachedUrl}</Text>
              <View style={styles.actionsContainer}>
                <TouchableOpacity onPress={() => handleEdit(item.eid)}>
                  <Image source={require('../assets/pencel.png')} style={styles.editIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.eid)}>
                  <Image source={require('../assets/delete.png')} style={styles.deleteIcon} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer: {
    padding: 0,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  headerText: {
    color: 'black',
    fontSize: 12,
    marginBottom: 10,
    margin: 10,
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  rowText: {
    color: 'black',
    fontSize: 14,
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  editIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});

export default ViewStuff;