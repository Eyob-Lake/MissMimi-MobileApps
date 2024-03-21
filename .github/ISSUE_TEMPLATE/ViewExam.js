import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { getFirestore, collection, onSnapshot, deleteDoc, query, where } from 'firebase/firestore';
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

const ViewExam = () => {
  const [examList, setExamList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'exam'), where('fullName', '==', searchText)), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setExamList(data);
    });

    return () => unsubscribe();
  }, [searchText]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(collection(db, 'exam', id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (id) => {
    // Handle edit functionality here
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Name or SEID"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <ScrollView horizontal={true} vertical={true} contentContainerStyle={styles.tableContainer}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.headerText, styles.column]}>Full Name</Text>
            <Text style={[styles.headerText, styles.column]}>SEID</Text>
            <Text style={[styles.headerText, styles.column]}>School Name</Text>
            <Text style={[styles.headerText, styles.column]}>Class Level</Text>
            <Text style={[styles.headerText, styles.column]}>Quarters</Text>
            <Text style={[styles.headerText, styles.column]}>Subject</Text>
            <Text style={[styles.headerText, styles.column]}>Result</Text>
            <Text style={[styles.headerText, styles.column]}>Actions</Text>
          </View>
          {examList.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <Text style={[styles.rowText, styles.column]}>{item.fullName}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.seid}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.schoolName}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.classLevel}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.quarters}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.subject}</Text>
              <Text style={[styles.rowText, styles.column]}>{item.result}</Text>
              <View style={styles.actionsContainer}>
                <TouchableOpacity onPress={() => handleEdit(item.seid)}>
                  <Image source={require('../assets/pencel.png')} style={styles.editIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.seid)}>
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
  table: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerText: {
    color: 'black',
    fontSize: 12,
    marginBottom: 10,
    margin: 10,
   
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
  column: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default ViewExam;