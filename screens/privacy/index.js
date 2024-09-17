import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Switch, ScrollView } from "react-native";

const PrivacyScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  /**
   * Toggles the switch state.
   * @param {void} - This function doesn't take any parameters.
   * @returns {void} Updates the state internally without returning a value.
   */
  ```
  /**
   * Toggles the switch state.
   * @param {void} - This function doesn't take any parameters.
   * @returns {void} This function doesn't return a value, but updates the state using setIsEnabled.
   */
  ```
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  /**
   * Toggles the state of the first switch
   /**
    * Toggles the state of switch 2.
    * @param {void} - This function does not take any parameters.
    * @returns {void} This function does not return a value. It updates the state using setIsEnabled2.
    */
   * @param {void} - This function doesn't take any parameters
   * @returns {void} This function doesn't return a value, it updates state using setIsEnabled1
   */
  /**
   * Toggles the state of switch 1
   * @param {void} - This function doesn't take any parameters
   * @returns {void} This function doesn't return a value, it updates state internally
   */
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  /**
   * Toggles the state of switch 2
   /**
    * Toggles the state of switch 3
    * @param {void} No parameters
    * @returns {void} Updates the state of isEnabled3 by inverting its previous value
    */
   * @param {void} - This function doesn't take any parameters
   * @returns {void} Updates the state of isEnabled2 by inverting its previous value
   */
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled3, setIsEnabled3] = useState(false);
  ```
  /**
   * Toggles the state of switch 3
   * @param {void} - This function doesn't take any parameters
   * @returns {void} This function doesn't return a value, it updates state internally
   */
  ```
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const [isEnabled4, setIsEnabled4] = useState(false);
  /**
   * Toggles the state of switch 4
   * @param {void} - This function doesn't take any parameters
   * @returns {void} Updates the state of isEnabled4 by inverting its previous value
   */
  /**
   * Toggles the state of switch 4
   * @param {void} - This function doesn't take any parameters
   * @returns {void} Updates the state of isEnabled4 by inverting its previous value
   */
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
  const [isEnabled5, setIsEnabled5] = useState(false);
  /**
   * Toggles the state of switch 5
   * @param {void} - This function doesn't take any parameters
   * @returns {void} Updates the state of isEnabled5 by negating its previous value
   */
  /**
   * Toggles the state of switch 5
   /**
    * Toggles the state of switch 6
    * @param {void} - This function doesn't take any parameters
    * @returns {void} Updates the state of isEnabled6 by inverting its previous value
    */
   * @param {void} - This function doesn't take any parameters
   * @returns {void} This function doesn't return a value, it updates state internally
   /**
    * Toggles the state of switch 7
    * @param {void} - This function doesn't take any parameters
    * @returns {void} Updates the state of isEnabled7 by inverting its previous value
    */
   */
  const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
  const [isEnabled6, setIsEnabled6] = useState(false);
  /**
   * Toggles the state of switch 6
   * @param {void} - This function doesn't take any parameters
   * @returns {void} This function doesn't return a value, it updates state internally
   */
  const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);
  const [isEnabled7, setIsEnabled7] = useState(false);
  /**
   * Toggles the state of switch 7
   * @param {void} - This function doesn't take any parameters
   * @returns {void} Updates the state of isEnabled7 by inverting its previous value
   */
  const toggleSwitch7 = () => setIsEnabled7(previousState => !previousState);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/back.png")} style={styles.back} />
        <Text style={styles.heading}>Privacy</Text>
        <Text />
      </View>
      <Text style={styles.subHeading}>Privacy</Text>
      <View style={styles.sectionContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Location Services</Text>
          <Switch
            trackColor={{ false: "#E5E5E5", true: "#E5E5E5" }}
            thumbColor={isEnabled ? "#000" : "#000"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchContainer1}>
          <Text style={styles.label}>Tracking</Text>
          <Switch
            trackColor={{ false: "#E5E5E5", true: "#E5E5E5" }}
            thumbColor={isEnabled1 ? "#000" : "#000"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={isEnabled1}
          />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Contracts</Text>
          <Switch
            trackColor={{ false: "#E5E5E5", true: "#E5E5E5" }}
            thumbColor={isEnabled2 ? "#000" : "#000"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <View style={styles.switchContainer1}>
          <Text style={styles.label}>Calendar</Text>
          <Switch
            trackColor={{ false: "#E5E5E5", true: "#E5E5E5" }}
            thumbColor={isEnabled3 ? "#000" : "#000"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={isEnabled3}
          />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Reminders</Text>
          <Switch
            trackColor={{ false: "#E5E5E5", true: "#E5E5E5" }}
            thumbColor={isEnabled4 ? "#000" : "#000"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch4}
            value={isEnabled4}
          />
        </View>
        <View style={styles.switchContainer1}>
          <Text style={styles.label}>Photos</Text>
          <Switch
            trackColor={{ false: "#E5E5E5", true: "#E5E5E5" }}
            thumbColor={isEnabled5 ? "#000" : "#000"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch5}
            value={isEnabled5}
          />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Bluetooth</Text>
          <Switch
            trackColor={{ false: "#E5E5E5", true: "#E5E5E5" }}
            thumbColor={isEnabled6 ? "#000" : "#000"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch6}
            value={isEnabled6}
          />
        </View>
        <View style={styles.switchContainer1}>
          <Text style={styles.label}>Local Network</Text>
          <Switch
            trackColor={{ false: "#E5E5E5", true: "#E5E5E5" }}
            thumbColor={isEnabled7 ? "#000" : "#000"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch7}
            value={isEnabled7}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 15,
    marginBottom: 40
  },
  back: { width: 11.25, height: 20, resizeMode: "contain", marginLeft: -15 },
  heading: { fontSize: 16, color: "#000", marginLeft: 20 },
  sectionContainer: { backgroundColor: "#fff", marginBottom: 35 },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5"
  },
  switchContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 10
  },
  subHeading: { fontSize: 12, fontWeight: "400", color: "#7C7C7C", marginLeft: 20, marginBottom: 10 },
  label: { fontSize: 16, fontWeight: "400" }
});

export default PrivacyScreen;
