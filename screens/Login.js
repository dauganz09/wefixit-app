import { Button, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useFonts,Rambla_400Regular,Rambla_700Bold} from '@expo-google-fonts/rambla'

const Login = ({navigation}) => {

   

  return (
    <View style={tw`flex-1 bg-white p-0 overflow-hidden`}>
        <StatusBar barStyle='light-content'/>
            <SafeAreaView style={tw` w-100 items-center mt-10`} >
                <Image
                    source={require('../assets/fixitlogo.png')}
                    style={tw`w-50 h-50`}
                    resizeMode='contain'
                />
                <View style={tw`mt-20 px-12    items-start w-100`}>
                    <Text style={tw.style(' text-2xl font-medium tracking-tight  text-[#555555]',{fontFamily: `Rambla_700Bold`})}>Login to your account</Text>
                    <TextInput
                        style={tw`mt-4 h-12 w-full py-2 px-4 border-2 border-[#C0BCBC] rounded-lg placeholder:text-bold placeholder:text-[#555555]`}
                        placeholder='Email'
                        
                        keyboardType='email-address'
                        autoCapitalize='none'

                    />

                    <TextInput
                        style={tw`mt-4 outline-none h-12 w-full py-2 px-4 border-2 border-[#C0BCBC] rounded-lg`}
                        placeholder='Password'
                        
                        secureTextEntry={true}
                        autoCapitalize='none'

                    />

                    <TouchableOpacity
                        style={tw`mt-12 h-12 w-full py-2 px-4 bg-[#2ECB6F] rounded-lg flex-row items-center justify-center`}
                        onPress={() => { }}
                        activeOpacity={0.8}

                    >
                        <Text style={tw`text-gray-100 font-medium text-xl`}>Sign in</Text>
                    </TouchableOpacity>
                    <View style={tw`mt-6 flex-row justify-center items-center w-full`}>
                        <Text style={tw`font-medium text-lg tracking-tighter underline text-[#0858B6]`}>Forgot Password</Text>
                    </View>

                    <View style={tw`mt-6 flex-row justify-center items-center w-full`}>
                        <Text style={tw`text-lg font-semibold text-gray-500`}>Didn't have an account? </Text><Text style={tw`font-medium text-lg tracking-tighter text-[#0858B6]`} 
                            onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
                    </View>

                </View>
                
            </SafeAreaView>
            <Image
                source={require('../assets/images/circlebottom.png')}
                style={tw`absolute -bottom-60 left-0 w-100 h-80`}
                resizeMode='contain'
                />

    </View>  
   
  );
};

export default Login;

const styles = StyleSheet.create({});
