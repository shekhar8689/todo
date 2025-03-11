import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Header from '@/src/componets/Header';
import Button from '@/src/componets/Button';


const Info = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const fetchFacts = async () => {
    setLoading(true);
    setButtonLoading(true); // Show loading effect on button
    try {
      let newFacts = [];
      for (let i = 0; i < 6; i++) {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        newFacts.push({ id: Date.now().toString() + i, fact: data.text });
      }
      setFacts(newFacts);
    } catch (error) {
      console.error('Error fetching facts:', error);
    } finally {
      setLoading(false);
      setButtonLoading(false); // Hide button loading effect
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Info Page" />
      <View style={styles.MainContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#007AFF" />
        ) : (
          <FlatList
            data={facts}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.text}>{item.fact}</Text>
              </View>
            )}
          />
        )}
      </View>
      <Button
        title={buttonLoading ? 'Loading...' : 'Show Another'}
        containerStyle={{ marginHorizontal: 15, opacity: buttonLoading ? 0.7 : 1 }}
        onPress={fetchFacts}
        disabled ={buttonLoading} // Disable button while fetching new facts
      />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 15,
  },
  MainContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
