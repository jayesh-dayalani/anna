import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'

export default function index() {

  return (
    <Redirect href='/(anna)/home' />
  )
}

// store session
// upsert profiles
// check working