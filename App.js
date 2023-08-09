import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { Box, Text, Flex, Heading, NativeBaseProvider } from 'native-base';
import { Button} from 'native-base';

export default function App() {

  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 2);
  };

  const resetCount = () => {
    setCount(0)
  }


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
            <Box width={'100%'} height={'100%'}>
              <Box display={'flex'} margin={'auto'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Box backgroundColor={'amber.300'} width={'200'} borderRadius={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <Text color={'white'} fontSize={50} fontWeight={'semibold'} textAlign={'center'}>{count}</Text>
                </Box>

                <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginTop={5}>
                    <Button 
                      _pressed={{ bg: 'blue.700' }}
                      width={'200'} borderRadius={10} p={'5'} backgroundColor={'blue.500'} 
                      onPress={countUp}
                    >
                      <Text fontSize={'2xl'} fontWeight={'bold'} color={'white'}>Count Up</Text>
                    </Button>
                </Box>

                <Box marginTop={5}>
                  <Button
                  _pressed={{ bg: 'red.700' }}
                    width={'200'} borderRadius={10} p={'5'} backgroundColor={'red.500'}
                    onPress={resetCount}
                  >
                    <Text fontSize={'2xl'} fontWeight={'bold'} color={'white'}>
                      Reset
                      </Text>
                     
                  </Button>
                </Box>


              </Box>
              
            </Box>
          
          </Box>
        </Box>

      
    </NativeBaseProvider>

  );
}
