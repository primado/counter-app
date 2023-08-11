import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Box, Text, Flex, Heading, NativeBaseProvider } from 'native-base';
import { Button} from 'native-base';
import { Pressable } from 'native-base';
import TheButton from './src/components/Buttons/button';

export default function App() {

  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 2);
  };

  const countDown = () => {
    if (count == 0) {
      setCount(0)
    } else {
      setCount(count - 2)
    }
  };

  const resetCount = () => {
    setCount(0)
  };


  return (
    <NativeBaseProvider> 
        <Box backgroundColor={'blue.700'} p={5}>
          <Flex flexDirection={'row'}>
            <Heading color={'white'} paddingTop={2} textAlign={'left'}>
              Counter App
            </Heading>
          </Flex>
        </Box>
        <Box>
          <Box backgroundColor={'blue.300'} width={'100%'} height={'100%'} >
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} marginTop={'16'}>
                  <Box backgroundColor={'amber.300'} width={'56'} height={'40'} borderRadius={16} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Text color={'white'} fontSize={50} fontWeight={'semibold'} textAlign={'center'}>{count}</Text>
                  </Box>
                </Box>
                <Box marginTop={'24'}>
                  <Box display={'flex'}  flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

                  <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginBottom={'5'} >
                        <Pressable 
                          _pressed={{ bg: 'blue.700' }}
                          width={'200'} borderRadius={10} p={'3'} bg={'blue.500'} 
                          onPress={countUp}
                        >
                          <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} color={'white'}>Count Up</Text>
                        </Pressable>
                    </Box>
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginBottom={'5'} >
                        <Pressable 
                          _pressed={{ bg: 'emerald.700' }}
                          width={'200'} borderRadius={10} p={'3'} bg={'emerald.500'} 
                          onPress={countDown}
                        >
                          <Text fontSize={'2xl'} fontWeight={'bold'} textAlign={'center'} color={'white'}>Count Down</Text>
                        </Pressable>
                    </Box>

                    <Box>
                      <Pressable
                      _pressed={{ bg: 'red.700' }}
                        width={'200'} borderRadius={10} p={'3'} bg={'red.500'}
                        onPress={resetCount}
                      >
                        <Text fontSize={'2xl'} textAlign={'center'} fontWeight={'bold'} color={'white'}>
                          Reset
                        </Text>

                      </Pressable>
                    </Box>


                  </Box>
                </Box>
            </Box>
          
          </Box>
        </Box>

      
    </NativeBaseProvider>

  );
}
