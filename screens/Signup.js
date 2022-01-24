import { View, Text,TextInput,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Signup = ({navigation}) => {
  return (
    <View style={tw`flex-1 bg-white p-0 overflow-hidden items-center `}>
     <View style={tw`mt-20 px-12    items-start w-100`}>
                    <Text style={tw.style('my-8 text-2xl font-medium tracking-tight  text-[#555555]',{fontFamily: `Rambla_700Bold`})}>Create your account</Text>
                    <TextInput
                        style={tw`my-6 h-12 w-full py-2 px-4 border-2 border-[#C0BCBC] rounded-lg placeholder:text-bold placeholder:text-[#555555]`}
                        placeholder='Email'
                        
                        keyboardType='email-address'
                        autoCapitalize='none'

                    />

                    <TextInput
                        style={tw`my-6 outline-none h-12 w-full py-2 px-4 border-2 border-[#C0BCBC] rounded-lg`}
                        placeholder='Password'
                        
                        secureTextEntry={true}
                        autoCapitalize='none'

                    />

                    <TextInput
                        style={tw`my-6 outline-none h-12 w-full py-2 px-4 border-2 border-[#C0BCBC] rounded-lg`}
                        placeholder='Confirm Password'
                        
                        secureTextEntry={true}
                        autoCapitalize='none'

                    />

                    <TouchableOpacity
                        style={tw`mt-12 h-12 w-full py-2 px-4 bg-[#2ECB6F] rounded-lg flex-row items-center justify-center`}
                        onPress={()=> navigation.navigate('Create Account')}

                    >
                        <Text style={tw`text-gray-100 font-medium text-xl`}>Sign Up</Text>
                    </TouchableOpacity>
                    

                </View>
                <Image
                source={require('../assets/images/circlebottom.png')}
                style={tw`absolute -bottom-60 left-0 w-100 h-80`}
                resizeMode='contain'
                />
    </View>
  );
};

export default Signup;
