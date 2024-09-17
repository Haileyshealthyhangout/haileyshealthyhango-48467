import React from "react";
import { Text, StyleSheet, View } from "react-native";

/**
 * Renders the Notification Preference Screen component.
 * @param {Object} params - The parameters passed to the component.
 * @returns {JSX.Element} A View component containing the Notification Preference Screen.
 */
const NotificationPreferenceScreen = (params) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>Notification Preference Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  }
});

export default NotificationPreferenceScreen;
