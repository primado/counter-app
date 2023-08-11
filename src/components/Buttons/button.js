import React from "react";
import { Box, Text, Pressable } from 'native-base';



export default function TheButton(props) {

    return (
        
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginBottom={'5'} >
            <Pressable 
               
              width={'200'} borderRadius={10} p={'3'}
              onPress={props.onPress}
            >
              <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} color={'white'}>{props.buttonLabel}</Text>
            </Pressable>
        </Box>
    )
}