import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        alignItems: 'center',
        backgroundColor: '#191970'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFB6C1'
    }
});

export default Header