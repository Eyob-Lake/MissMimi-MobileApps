import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ChatListScreen = ({ navigation }) => {
  const chats = [
    { id: '1', title: 'Chat 1' },
    { id: '2', title: 'Chat 2' },
    { id: '3', title: 'Chat 3' },
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatScreen', { chatId: item.id })}
    >
      <Text style={styles.chatTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chatItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  chatTitle: {
    fontSize: 16,
  },
});

export default ChatListScreen;