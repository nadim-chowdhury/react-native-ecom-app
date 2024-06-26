import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const UserManagementScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend (simulate data for demo)
    const dummyUsers = [
      { id: "1", name: "User 1", email: "user1@example.com" },
      { id: "2", name: "User 2", email: "user2@example.com" },
    ];
    setUsers(dummyUsers);
  }, []);

  const handleDeleteUser = (userId) => {
    // Implement user deletion logic (simulate here)
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Button title="Delete" onPress={() => handleDeleteUser(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default UserManagementScreen;
