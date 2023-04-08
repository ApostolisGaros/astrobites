import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import colors from "./colors.json";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const cardWidth = windowWidth * 0.5;
const cardHeight = windowHeight * 0.21;

const ScheduledCard = ({ imageSource, icon, title, subtitle, date }) => {
    
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.contentContainer}>   
        <View style={styles.iconContainer}>
            <Image source={icon}  style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: cardHeight,
    borderRadius: 8,
    backgroundColor: colors.secondary,
    marginRight: 12,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  contentContainerGen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 1,
    fontSize: 6,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  date: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 10,
    color: '#666',
  },
});

export default ScheduledCard;
