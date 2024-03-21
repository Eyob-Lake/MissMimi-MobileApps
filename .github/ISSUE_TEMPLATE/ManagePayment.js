import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Header from '../Header';

const Payment = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Simulating a database fetch
    const mockData = [
      { id: 1, amount: '$50', date: '2024-02-29' },
      { id: 2, amount: '$30', date: '2024-02-28' },
      { id: 3, amount: '$20', date: '2024-02-27' },
    ];

    setData(mockData);
  };

  const renderPayment = ({ item }) => (
    <View style={styles.paymentContainer}>
      <Text style={styles.amountText}>{item.amount}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Payment" />

      {/* Payment Table */}
      <FlatList
        data={data}
        renderItem={renderPayment}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  paymentContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  amountText: {
    fontSize: 16,
  },
  dateText: {
    fontSize: 14,
    marginTop: 5,
    color: '#888',
  },
};

export default Payment;