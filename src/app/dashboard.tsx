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

        {/* Popular Place */}
        <View style={styles.popularSection}>
          <Text style={styles.popularTitle}>Popular place</Text>
          <View style={styles.imageCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500' }} 
              style={styles.popularImage}
            />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15, backgroundColor: '#FFFFFF' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  heroSection: { backgroundColor: '#3B82F6', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 50, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  heroHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  greetingText: { color: '#E0E7FF', fontSize: 14 },
  heroTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
  avatar: { width: 40, height: 40, backgroundColor: '#818CF8', borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 18 },
  tabContainer: { flexDirection: 'row', backgroundColor: '#2563EB', borderRadius: 20, padding: 4 },
  activeTab: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 16, paddingVertical: 8, alignItems: 'center' },
  activeTabText: { color: '#3B82F6', fontWeight: 'bold', fontSize: 12 },
  inactiveTab: { flex: 1, paddingVertical: 8, alignItems: 'center' },
  inactiveTabText: { color: '#FFFFFF', fontSize: 12 },
  searchCard: { backgroundColor: '#FFFFFF', marginHorizontal: 20, marginTop: -30, borderRadius: 16, padding: 20, elevation: 4 },
  inputGroup: { marginBottom: 16 },
  inputLabel: { fontSize: 12, color: '#9CA3AF', marginBottom: 6 },
  inputBox: { backgroundColor: '#F3F4F6', borderRadius: 8, padding: 12 },
  inputText: { fontSize: 14, color: '#1F2937' },
  rowInputs: { flexDirection: 'row' },
  searchButton: { backgroundColor: '#3B82F6', borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginTop: 15 },
  searchButtonText: { color: '#FFFFFF', fontWeight: 'bold' },
  popularSection: { paddingHorizontal: 20, marginTop: 24 },
  popularTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  imageCard: { borderRadius: 16, overflow: 'hidden' },
  popularImage: { width: '100%', height: 150 },
});