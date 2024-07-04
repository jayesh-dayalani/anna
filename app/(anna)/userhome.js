import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { supabase } from '../../supabase'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../redux/AuthSlice'
import { router } from 'expo-router'

export default function userhome() {
  const dispatch = useDispatch()
  const authDetails = useSelector(state => state.auth)
  
  async function logoutUser(){
    const {err} = await supabase.auth.signOut()
    dispatch(userLogout())
    router.replace('/(anna)/login')
  }

  useEffect(() => {
    console.log(authDetails,'auth details in userhome');
  },[])
  return (
    <View>
      <Text>userhome</Text>
      <Pressable className='p-4 rounded-lg m-3 bg-gray-200' onPress={logoutUser}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  )
}