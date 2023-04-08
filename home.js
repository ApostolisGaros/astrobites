import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import SearchBar from "./searchBar";
import colors from "./colors.json";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomePage = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    const cardWidth = windowWidth * 0.4;
    const cardHeight = windowHeight * 0.2;

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.title}>Welcome, Apo</Text>
                <TouchableOpacity
                    style={styles.bell}
                    onPress={() => alert("Notifications")}>
                    <MaterialCommunityIcons
                        name="bell-outline"
                        size={24}
                        color={colors.text}
                    />
                </TouchableOpacity>
            </View>
            {/* <View
                style={{
                    borderBottomColor: "gray",
                    borderBottomWidth: 0.5,
                    width: windowWidth,
                }}
            /> */}
            <View style={styles.cardContainer}>
                <Text style={styles.heading}>Explore</Text>
                <SearchBar placeholder="Search" />
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.heading}>Suggested</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <View
                        style={[
                            styles.card,
                            { width: cardWidth, height: cardHeight },
                        ]}>
                        <Text style={styles.cardTitle}>Card 1</Text>
                    </View>
                    <View
                        style={[
                            styles.card,
                            { width: cardWidth, height: cardHeight },
                        ]}>
                        <Text style={styles.cardTitle}>Card 2</Text>
                    </View>
                    <View
                        style={[
                            styles.card,
                            { width: cardWidth, height: cardHeight },
                        ]}>
                        <Text style={styles.cardTitle}>Card 3</Text>
                    </View>
                </ScrollView>
                <Text style={styles.heading}>Scheduled</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {/* Replace the following placeholders with your own cards */}
                    <View
                        style={[
                            styles.card,
                            { width: cardWidth, height: cardHeight },
                        ]}>
                        <Text style={styles.cardTitle}>Card 1</Text>
                    </View>
                    <View
                        style={[
                            styles.card,
                            { width: cardWidth, height: cardHeight },
                        ]}>
                        <Text style={styles.cardTitle}>Card 2</Text>
                    </View>
                    <View
                        style={[
                            styles.card,
                            { width: cardWidth, height: cardHeight },
                        ]}>
                        <Text style={styles.cardTitle}>Card 3</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 0.05 * Dimensions.get("window").width,
        paddingTop: 0.07 * Dimensions.get("window").height,
        paddingBottom: 0.02 * Dimensions.get("window").height,
    },
    title: {
        fontSize: 0.06 * Dimensions.get("window").width,
        fontWeight: "bold",
        color: colors.text,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.secondary,
        borderRadius: 0.02 * Dimensions.get("window").height,
        paddingHorizontal: 0.0 * Dimensions.get("window").width,
        paddingVertical: 0.015 * Dimensions.get("window").height,
        marginTop: 0.04 * Dimensions.get("window").height,
    },
    searchText: {
        marginRight: 0.02 * Dimensions.get("window").width,
        fontSize: 0.04 * Dimensions.get("window").width,
        color: colors.text,
    },
    searchBar: {
        flex: 1,
        fontSize: 0.07 * Dimensions.get("window").width,
    },

    cardContainer: {
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
        color: colors.text,
        marginTop: 0.06 * Dimensions.get("window").width,
    },
    card: {
        width: 200,
        height: 150,
        borderRadius: 8,
        backgroundColor: colors.secondary,
        marginRight: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.text,
    },
});

export default HomePage;
