import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { getFirestore, collection, onSnapshot, doc, deleteDoc, updateDoc, writeBatch, getDocs, commitBatch } from 'firebase/firestore';
import Header from '../Header';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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
const ViewStudent = () => {
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'students'), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setStudentList(data);
    });
    return () => unsubscribe();
  }, []);
  const handleDelete = async (ID) => {
    try {
      const docRef = doc(db, 'students', ID);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
// ...
const handleEdit = async (ID, updatedData) => {
  try {
    const batch = writeBatch(db);
    const querySnapshot = await getDocs(collection(db, 'students'));

    querySnapshot.forEach((doc) => {
      const docRef = doc(db, 'students/' + ID);
      batch.update(docRef, updatedData);
    });

    await commitBatch(batch);
    console.log('Documents updated successfully!');
  } catch (error) {
    console.error('Error updating documents:', error);
  }
};

return (
<View style={styles.container}>
<Header />
<ScrollView horizontal={true} vertical={true} contentContainerStyle={styles.tableContainer}>
<View style={styles.table}>
<View style={styles.tableHeader}>
<Text style={[styles.headerText, styles.column]}>SID</Text>
<Text style={[styles.headerText, styles.column]}>Full Name</Text>
<Text style={[styles.headerText, styles.column]}>Gender</Text>
<Text style={[styles.headerText, styles.column]}>School Name</Text>
<Text style={[styles.headerText, styles.column]}>Class Level</Text>
<Text style={[styles.headerText, styles.column]}>Branch</Text>
<Text style={[styles.headerText, styles.column]}>Block</Text>
<Text style={[styles.headerText, styles.column]}>House Number</Text>
<Text style={[styles.headerText, styles.column]}>Student Image URL</Text>
<Text style={[styles.headerText, styles.column]}>Parent Image URL</Text>
<Text style={[styles.headerText, styles.column]}>Actions</Text>
</View>
{studentList.map((student) => (
<View key={student.id} style={styles.tableRow}>
<Text style={[styles.rowText, styles.column]}>{student.sid}</Text>
<Text style={[styles.rowText, styles.column]}>{student.fullName}</Text>
<Text style={[styles.rowText, styles.column]}>{student.gender}</Text>
<Text style={[styles.rowText, styles.column]}>{student.schoolName}</Text>
<Text style={[styles.rowText, styles.column]}>{student.classLevel}</Text>
<Text style={[styles.rowText, styles.column]}>{student.branch}</Text>
<Text style={[styles.rowText, styles.column]}>{student.block}</Text>
<Text style={[styles.rowText, styles.column]}>{student.houseNumber}</Text>
<Text style={[styles.rowText, styles.column]}>{student.studentPhotoUrl}</Text>
<Text style={[styles.rowText, styles.column]}>{student.parentPhotoUrl}</Text>
<View style={styles.actionsContainer}>
<TouchableOpacity onPress={() => handleEdit(student.id, { sid: 'updatedSid', fullName: 'updatedFullName' })}>
  <Image source={require('../assets/pencel.png')} style={styles.editIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => handleDelete(student.id)}>
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
borderRightWidth: 1, // Add border right
borderRightColor: 'black', // Add border right
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
borderRightWidth: 1, // Add border right
borderRightColor: 'black', // Add border right
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
export default ViewStudent;