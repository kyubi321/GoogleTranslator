import { Stack, Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Translate',headerTitleAlign:'center'}} />
      <ScrollView className=' mx-auto w-full max-w-xl flex-1'>
        {/* language picker */}
      <View className='flex flex-row justify-between p-5'>
        <Text className='font-semibold text-2xl text-blue-600'>English</Text>
        <FontAwesome5 name='exchange-alt' size={19} color='gray' />
        <Text className='font-semibold text-2xl text-blue-600'>Spanish</Text>
      </View>
      </ScrollView>
    </>
  );
}
