import { View, Text, Pressable, Alert, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/CartSlice'
import { userLogin, userLogout } from '../../redux/AuthSlice'
import { supabase } from '../../supabase'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from 'react-native-feather'

export default function login() {
  const dispatch = useDispatch()

  const [typedemail, setEmail] = useState('')
  const [typedpassword, setPassword] = useState('')

  async function loginUser() {
    const { error } = await supabase.auth.signInWithPassword({
      email: typedemail,
      password: typedpassword,
    })

    if (error) Alert.alert(error.message)
    if (!error) {
      Alert.alert('login success')
      dispatch(userLogin({
        email: typedemail,
        password: typedpassword
      }))
    }
  }

  return (
    <SafeAreaView className='flex-1 bg-white justify-center items-center'>
      <View className='space-y-4 w-[75%] items-center justify-center'>
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/001/040/213/small_2x/vegetables-character-collection.jpg' }} className='h-[30%] w-[70%] object-contain' />
        <View className='flex-row bg-gray-100 p-3 rounded-lg shadow-lg shadow-black w-full space-x-2'>
          <Icon.User stroke={'black'} className='h-10 w-10' />
          <TextInput placeholder='Enter your email ...' value={typedemail} onChangeText={(text) => setEmail(text)} />
        </View>
        <View className='flex-row bg-gray-100 p-3 rounded-lg shadow-lg shadow-black w-full space-x-2'>
          <Icon.Lock stroke={'black'} className='h-10 w-10' />
          <TextInput placeholder='Enter your email ...' value={typedpassword} onChangeText={(text) => setPassword(text)} />
        </View>
        <Pressable>
          <Text className='text-gray-500 font-semibold'>Forgot Password</Text>
        </Pressable>
        <Pressable className='w-[70%] rounded-xl bg-green-500 shadow-lg shadow-black p-3 items-center justify-center' onPress={loginUser}>
          <Text className='text-white font-bold text-lg'>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}