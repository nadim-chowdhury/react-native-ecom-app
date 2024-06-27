import React from "react";
import { View, Button, Linking, StyleSheet } from "react-native";

const CustomerSupportScreen = () => {
  const handleChat = () => {
    // Implement live chat integration (open chat URL)
    Linking.openURL("https://example.com/livechat");
  };

  const handleFAQ = () => {
    // Open FAQs screen or link to FAQ page
    Linking.openURL("https://example.com/faqs");
  };

  const handleContactForm = () => {
    // Implement contact form integration (open contact form URL)
    Linking.openURL("https://example.com/contact");
  };

  return (
    <View style={styles.container}>
      <Button title="Live Chat" onPress={handleChat} />
      <Button title="FAQs" onPress={handleFAQ} />
      <Button title="Contact Us" onPress={handleContactForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default CustomerSupportScreen;
