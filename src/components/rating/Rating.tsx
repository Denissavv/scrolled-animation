import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {styles} from "./styles";
import {FC} from "react";


interface RatingProps{
    rating: number
}

export const Rating:FC <RatingProps> = ({ rating }) => {
    const filledStars = Math.floor(rating / 2);
    const maxStars = Array(5 - filledStars).fill('staro');
    const r = [...Array(filledStars).fill('star'), ...maxStars];

    return (
        <View style={styles.rating}>
            <Text style={styles.ratingNumber}>{rating}</Text>
            {r.map((type, index) => {
                return <AntDesign key={index} name={type} size={12} color="tomato" />;
            })}
        </View>
    );
}