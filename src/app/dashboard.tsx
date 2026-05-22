import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DashboardScreen() {
  const router = useRouter();
  // Menangkap data username yang dikirim dari form login
  const { username } = useLocalSearchParams<{ username: string }>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
        
        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={{ fontSize: 24, paddingHorizontal: 10 }}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>dashboard</Text>
          <View style={{ width: 44 }} />
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroHeader}>
            <View>
              <Text style={styles.greetingText}>Hello {username || 'alex'},</Text>
              <Text style={styles.heroTitle}>Book your next Flight</Text>
            </View>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {(username || 'A').charAt(0).toUpperCase()}
              </Text>
            </View>
          </View>

          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.activeTab}>
              <Text style={styles.activeTabText}>Round Trip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inactiveTab}>
              <Text style={styles.inactiveTabText}>One way</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inactiveTab}>
              <Text style={styles.inactiveTabText}>Multi city</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Card */}
        <View style={styles.searchCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>From (Location)</Text>
            <View style={styles.inputBox}><Text style={styles.inputText}>New York (NYC)</Text></View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>To (Destination)</Text>
            <View style={styles.inputBox}><Text style={styles.inputText}>London (LHR)</Text></View>
          </View>
          <View style={styles.rowInputs}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Text style={styles.inputLabel}>Departure</Text>
              <View style={styles.inputBox}><Text style={styles.inputText}>Dec 1th</Text></View>
            </View>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={styles.inputLabel}>Return</Text>
              <View style={styles.inputBox}><Text style={styles.inputText}>Dec 18th</Text></View>
            </View>
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search Flights</Text>
          </TouchableOpacity>
        </View>

       