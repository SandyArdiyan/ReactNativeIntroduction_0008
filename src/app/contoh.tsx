import { StyleSheet, Text, View } from 'react-native';

export default function Contoh() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini Halaman Contoh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
