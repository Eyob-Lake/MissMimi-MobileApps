import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Header from '../Header';
import { useNavigation } from '@react-navigation/native';
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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Exam = () => {
const [fullName, setFullName] = useState('');
const [id, setId] = useState('');
const [schoolName, setSchoolName] = useState('');
const [classLevel, setClassLevel] = useState('');
const [gender, setGender] = useState('');
const [quarters, setQuarters] = useState('');
const [subject, setSubject] = useState('');
const [result, setResult] = useState('');
const handleFormSubmit = () => {
const examData = {
fullName,
id,
schoolName,
classLevel,
gender,
quarters,
subject,
result,
};
addDoc(collection(db, 'exam'), examData)
  .then(() => {
    console.log('Exam registered successfully!');
    setFullName('');
    setId('');
    setSchoolName('');
    setClassLevel('');
    setResult('');
    setSubject('');
    setQuarters('');
    setGender('');
  })
  .catch((error) => {
    console.error('Error adding exam: ', error);
  });
  
};
const navigation = useNavigation();
return (
<View>
<Header title="Student" />
{/* Form */}
<View style={styles.formContainer}>
<TextInput
style={styles.input}
placeholder="Full Name"
value={fullName}
onChangeText={(text) => setFullName(text)}
/>
<TextInput
style={styles.input}
placeholder="SEID"
value={id}
onChangeText={(text) => setId(text)}
/>
<TextInput
style={styles.input}
placeholder="School Name"
value={schoolName}
onChangeText={(text) => setSchoolName(text)}
/>
<TextInput
style={styles.input}
placeholder="Class Level"
value={classLevel}
onChangeText={(text) => setClassLevel(text)}
/>
<TextInput
style={styles.input}
placeholder="Quarters"
value={quarters}
onChangeText={(text) => setQuarters(text)}
/>
<TextInput
style={styles.input}
placeholder="Subject"
value={subject}
onChangeText={(text) => setSubject(text)}
/>
<TextInput
style={styles.input}
placeholder="Result"
value={result}
onChangeText={(text) => setResult(text)}
/>
<View style={styles.teachable}>
<TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
<Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
<TouchableOpacity
style={styles.button}
onPress={() => navigation.navigate('ViewExam')}
>
<Text style={styles.buttonText}>View</Text>
</TouchableOpacity>
</View>
</View>
</View>
);
};

const styles = {
formContainer: {
padding: 20,
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
marginBottom: 10,
paddingHorizontal: 10,
borderRadius: 20,
},
teachable: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 20,
},
button: {
backgroundColor: '#4287f5',
paddingVertical: 10,
paddingHorizontal: 15,
borderRadius: 10,
},
buttonText: {
color: 'white',
fontWeight: 'bold',
},
};

export default Exam;