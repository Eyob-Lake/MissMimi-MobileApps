import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import Header from '../Header';
import { db } from '../Firebase';

const SMaterial = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    try {
      const materialsRef = collection(db, 'Material');
      const querySnapshot = await getDocs(materialsRef);
      const materialData = querySnapshot.docs.map((doc) => doc.data());
      setMaterials(materialData);
    } catch (error) {
      console.error('Error fetching materials:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Material" />

      <ScrollView style={styles.scrollView}>
        {materials.map((material, index) => (
          <View key={index} style={styles.materialContainer}>
            <Text style={styles.materialTitle}>{material.title}</Text>
            <Text style={styles.materialDescription}>{material.description}</Text>
            {material.image && <Image source={{ uri: material.image }} style={styles.materialImage} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'white',
  },
  backArrow: {
    width: 30,
    height: 30,
    marginRight: 2,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00BFFF',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  materialContainer: {
    marginBottom: 20,
  },
  materialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  materialDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  materialImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default SMaterial;