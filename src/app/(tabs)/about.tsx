import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/src/componets/Header';


// Store local images inside `assets` folder and import them
const localImages = [
    require('@/src/assets/images/Image1.jpeg'),
    require('@/src/assets/images/Image2.jpeg'),
    require('@/src/assets/images/Image3.jpeg'),
    require('@/src/assets/images/Image4.jpeg'),
    require('@/src/assets/images/Image5.jpeg'),
];


// Function to fetch new positive messages from API fetchPositiveMessageFromAPI
const fetchPositiveMessageFromAPI = async () => {
    try {
        const response = await fetch("https://www.affirmations.dev"); // API for positive messages
        const data = await response.json();
        return `Darling, ${data.affirmation}`; // Extract the message from API response
    } catch (error) {
        console.error("Error fetching message:", error);
        return "Stay positive and keep going!"; // Fallback message
    } 
};

const About = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [currentImage, setCurrentImage] = useState(localImages[0]); // Default first image

    // Function to select a random image and fetch a new message
    const getRandomMessageAndImage = async () => {
        // Fetch a new positive message
        const newMessage = await fetchPositiveMessageFromAPI();
        setCurrentMessage(newMessage);

        // Select a random image
        const randomImage = localImages[Math.floor(Math.random() * localImages.length)];
        setCurrentImage(randomImage);
    };

    useEffect(() => {
        getRandomMessageAndImage(); // Run on app start
    }, []);

    return (
        <View style={styles.container}>
            <Header title="About Page" />
            <View style={styles.MainContainer}>
                <View style={styles.Container}>
                    {/* Dynamic Image */}
                    <Image source={ currentImage } style={styles.ImageContainer} resizeMode="cover" />

                    {/* Scrollable Positive Messages List */}
                    <FlatList
                        data={[currentMessage]} // Use an array to display one message
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.TextItem}>
                                <Text style={styles.TextPara}>{item}</Text>
                            </View>
                        )}
                        style={styles.TextContainer}
                        showsVerticalScrollIndicator={false}
                    />

                    {/* Show Another Button */}
                    <TouchableOpacity style={styles.ButtonContainer} onPress={getRandomMessageAndImage}>
                        <Text style={styles.ButtonText}>Show Another</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        flex: 1,
    },
    MainContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 15,
    },
    Container: {
        flexDirection: "column",
    },
    ImageContainer: {
        width: 360,
        height: 280,
        borderRadius: 15,
        marginBottom: 20,
    },
    TextContainer: {
        padding: 20,
    },
    TextItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    TextPara: {
        color: 'black',
        fontSize: 20,
        lineHeight: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ButtonContainer: {
        marginTop: 10,
        padding: 10,
        borderRadius: 80,
        backgroundColor: "#007AFF",
        alignItems: "center"
    },
    ButtonText: {
        padding: 5,
        color: "white",
        fontSize: 20,
        fontWeight: "500"
    }
});
