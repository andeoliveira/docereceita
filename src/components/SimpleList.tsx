import React from "react";
import {
    Avatar,
    Box,
    FlatList, 
    HStack, 
    Spacer, 
    Text, 
    VStack
} from "native-base";
import {TouchableOpacity} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import { SimpleListItem } from "../interfaces/SimpleListItem";

interface Props {
    listItem: Array<SimpleListItem>;
}

const SimpleList:React.FC<Props> = ({listItem}) => {
    const navigation = useNavigation();
    return (
        <FlatList 
            data={listItem}
            renderItem={({item}) => 
                <TouchableOpacity onPress={() => 
                    navigation.navigate(item.nextScreenName, {titleScreen: item.itemDetailTitle, item: item.itemDetailObject})}>
                    <Box borderBottomWidth="1" _dark={{borderColor:"gray.600"}} borderColor="coolGray.200" pl="4" pr="5" py="2">
                    <HStack space={3} justifyContent="space-between">
                        <Avatar size="48px" source={{uri: item.itemThumbnailUrl}} />
                        <VStack>
                        <Text _dark={{color:"warmGray.50"}} color="coolGray.800" bold>
                            {item.itemDetailTitle}
                        </Text>
                        <Text color="coolGray.600" _dark={{color: "warmGray.200"}}>
                            {item.itemBottom}
                        </Text>  
                        </VStack>
                        <Spacer />
                        <Text fontSize="xs" _dark={{color: "warmGray.50"}} color="coolGray.800" alignSelf="flex-start">
                            {item.itemRight}
                        </Text>
                    </HStack>
                    </Box>
                </TouchableOpacity>
            }
            keyExtractor={item => item.itemKey} 
        />
    )
}

export default SimpleList