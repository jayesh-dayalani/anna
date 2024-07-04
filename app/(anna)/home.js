import { View, Text, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabase'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../redux/AuthSlice'
import { router } from 'expo-router'

export default function home() {
  const dispatch = useDispatch()

  useEffect(() => {
    // wrapping in function 
    // if we refresh, it will be invoked
    getSession()

    supabase.auth.onAuthStateChange((_event) => {
      getSession()
    })

  }, [])

  // function to fetch session 
  async function getSession(){
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   setSession(session)
    //   // adding details to redux
    //   const sessionDetails = {
    //     email: session.user.email,
    //     id: session.user.id
    //   }
    //   dispatch(userLogin(sessionDetails))
    //   // username code
    //   getRole(session.user.email)

    // })

    const {data, error} = await supabase.auth.getSession()
    if (data.session) {
      console.log('session success');
      // adding details to redux
      const sessionDetails = {
        email: data.session.user.email,
        id: data.session.user.id
      }
      dispatch(userLogin(sessionDetails))
      // username code
      getRole(data.session.user.email)
    }
    else {
      console.log('session failed');
      router.replace('/login')
    }
  }

  // fetching role for redirection
  async function getRole(email) {
    try {
      const { data, error } = await supabase.from('profiles').select('*').eq('email', email)
      if (error) {
        console.log(error, 'error getting name');
      }
      if (data) {
        if (data[0].role === 'user') {
          router.replace('/userhome')
        } else if (data[0].role === 'admin') {
          router.replace('/adminhome')
        } else if (data[0].role === '' || undefined || null) {
          router.replace('/login')
        }
      }
      else {
        console.log('suspicious in home.js');
      }
    }
    catch (e) {
      console.log(e, 'catch err');
    }

  }

  return (
    <><Text>hi</Text></>
  )
}