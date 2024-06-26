import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";

const NotificationsScreen = () => {
  useEffect(() => {
    registerForPushNotifications(); // Register for push notifications when component mounts
  }, []);

  const registerForPushNotifications = async () => {
    // Check if permission is granted
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to receive notifications was denied");
      return;
    }

    // Get the device's push token
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Push token:", token);
    // Send this token to your server
    // Save it to AsyncStorage or similar for later use
  };

  const handleLocalNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello!",
        body: "This is a local notification!",
      },
      trigger: {
        seconds: 5, // Notification will be triggered after 5 seconds
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Push Notifications</Text>
      <Button
        title="Send Local Notification"
        onPress={handleLocalNotification}
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
});

export default NotificationsScreen;
