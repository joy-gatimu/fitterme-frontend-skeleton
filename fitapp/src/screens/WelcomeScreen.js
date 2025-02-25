import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
   
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome To{"\n"}Fitter Me</Text>
        <Text style={styles.tagline}>"Where we monitor your fitness journey"</Text>

        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
   
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: "#C62828",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
