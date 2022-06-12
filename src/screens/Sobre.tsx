import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    title: string;
}

const Sobre: React.FC<Props> = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    main: {
      flex: 9,
      padding: 10
    }
  });
  

export default Sobre