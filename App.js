import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.mytext}>My name is <b>Theo Daniels Jr</b></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A8DBC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mytext: {
    fontSize: 24,
  },
});
