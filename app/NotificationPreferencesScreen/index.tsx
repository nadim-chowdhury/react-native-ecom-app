import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const NotificationPreferencesScreen = () => {
  const [orderUpdatesEnabled, setOrderUpdatesEnabled] = useState(true);
  const [promoUpdatesEnabled, setPromoUpdatesEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Notification Preferences</Text>
      <View style={styles.preferenceItem}>
        <Text style={styles.preferenceLabel}>Order Updates</Text>
        <Switch
          value={orderUpdatesEnabled}
          onValueChange={(value) => setOrderUpdatesEnabled(value)}
        />
      </View>
      <View style={styles.preferenceItem}>
        <Text style={styles.preferenceLabel}>Promotions</Text>
        <Switch
          value={promoUpdatesEnabled}
          onValueChange={(value) => setPromoUpdatesEnabled(value)}
        />
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
  preferenceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  preferenceLabel: {
    fontSize: 18,
  },
});

export default NotificationPreferencesScreen;
