import { Stack, Link } from 'expo-router';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';

export default function Home() {
  const [input,setInput]=useState('');
  const [output,setOutput]=useState('');
  return (
    <>
      <Stack.Screen options={{ title: 'Translate',headerTitleAlign:'center'}} />
      <ScrollView className=' mx-auto w-full max-w-xl flex-1 p-3'>
        {/* language picker */}
      <View className='flex flex-row justify-between p-4'>
        <Text className='font-semibold text-2xl text-blue-600'>English</Text>
        <FontAwesome5 name='exchange-alt' size={19} color='gray' />
        <Text className='font-semibold text-2xl text-blue-600'>Spanish</Text>
      </View>
      {/* input box */}
      <View className='border rounded-2xl gap-4 border-gray-500 flex-1  p-3'>
        <View className='flex-row'>
          <TextInput  
            placeholder="enter your text... " className='min-h-32  p-1 text-xl'
            value={input}
            onChangeText={setInput}
            multiline maxLength={5000}>

        </TextInput>
        <Pressable className='ml-auto mb-auto'>
        <FontAwesome6 name='circle-arrow-right'
          size={24}
          color='royalblue'
          
        ></FontAwesome6>
        </Pressable>
      </View>
      <Pressable className=" ">
		        <FontAwesome6 name="microphone" size={19} color="dimgray" className='' />
		        <Text className="text-sm color-gray-600 ml-auto ">{input.length} / 5,000</Text>
		      </Pressable>
        
       
      
      </View>
      </ScrollView>
    </>
  );
}
