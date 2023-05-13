import * as React from 'react';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from "./styles";

interface GenresProps {
    genres: Array<string>
}

export const  Genres: FC<GenresProps> = ({ genres }) => {
    return (
        <View style={styles.genres}>
            {genres.map((genre, i) => {
                return (
                    <View key={genre} style={styles.genre}>
                        <Text style={styles.genreText}>{genre}</Text>
                    </View>
                );
            })}
        </View>
    );
}

