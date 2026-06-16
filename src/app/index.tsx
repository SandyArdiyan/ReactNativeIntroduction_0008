import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Berpindah ke dashboard sambil melempar parameter username
    router.push({
      pathname: '/sandy',
      params: { username: username || 'alex' }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Selamat Datang</Text>
          <Text style={styles.subtitle}>Silakan masuk ke akun Anda</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Username / Email</Text>
          <TextInput
            style={styles.input}
            placeholder="alex"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  headerContainer: { marginBottom: 40 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1E3A8A', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6B7280' },
  formContainer: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 15, elevation: 3 },
  label: { fontSize: 12, fontWeight: '600', color: '#374151', marginBottom: 8, marginTop: 12 },
  input: { borderBottomWidth: 1, borderBottomColor: '#3B82F6', paddingVertical: 8, fontSize: 16, color: '#111827', marginBottom: 16 },
  loginButton: { backgroundColor: '#3B82F6', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  loginButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});