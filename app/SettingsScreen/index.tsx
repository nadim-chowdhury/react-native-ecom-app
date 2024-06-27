import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  const handleNotificationsToggle = () => {
    setNotificationsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>App Settings</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationsToggle}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Language</Text>
        <Text style={styles.settingValue}>{language}</Text>
        {/* Add language selection functionality */}
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Currency</Text>
        <Text style={styles.settingValue}>{currency}</Text>
        {/* Add currency selection functionality */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 18,
  },
  settingValue: {
    fontSize: 18,
    color: "#888",
  },
});

export default SettingsScreen;
