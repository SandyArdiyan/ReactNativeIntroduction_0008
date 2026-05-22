import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DashboardScreen() {
  const router = useRouter();
  // Menangkap data username yang dikirim dari form login
  const { username } = useLocalSearchParams<{ username: string }>();

