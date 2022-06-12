import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    description: string;
}

const Footer: React.FC<Props> = ({description}) => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#000',
        alignItems: 'center',
        backgroundColor: '#191970',
        flex:0.1
    },
    footerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFB6C1'
    }
});

export default Footer