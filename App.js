import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";
export default function App() {

  const fetching = () => {

  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 45,
  },
  header: {
    backgroundColor: "red"
  }
});
