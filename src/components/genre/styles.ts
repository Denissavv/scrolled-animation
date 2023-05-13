import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    genres: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 4,
    },
    genre: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderWidth: 1,
        borderRadius: 14,
        borderColor: '#ccc',
        marginRight: 4,
        marginBottom: 4,
    },
    genreText: {
        fontSize: 9,
        opacity: 0.4
    }
});