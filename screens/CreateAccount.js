import { View, Text,TextInput,TouchableOpacity,Image,KeyboardAvoidingView,Platform } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { AntDesign } from '@expo/vector-icons';

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const CreateAccount = () => {

   const [gender,setGender] = useState('');
   const [showdate,setShowdate] = useState(false)
   const [btext,setBtext] = useState('')

   
   const handleConfirm = (date) =>{

   let tempDate = new Date(date);
   let fDate = monthNames[tempDate.getMonth()] +' '+ tempDate.getDate() + ', ' + tempDate.getFullYear(); 
    setBtext(fDate);
    setShowdate(false)
   }

   const handleChange = (gender)=>{
       setGender(gender)
   }

  return (
    <KeyboardAvoidingView style={tw`flex-1 bg-white p-0 overflow-hidden items-center `}>
     <View style={tw`mt-8 px-12    items-start w-100`}>
                    <Text style={tw.style('mt-12 text-2xl font-medium tracking-tight  text-[#555555]',{fontFamily: `Rambla_700Bold`})}>Create your account</Text>
                    <View style={tw`flex-row w-full  justify-between   space-x-4`}>
                            <TextInput
                                style={tw`my-6 h-12 w-54 py-2 px-4 border-2 border-[#C0BCBC] rounded-lg placeholder:text-bold placeholder:text-[#555555]`}
                                placeholder='First Name'
                                
                                
                                autoCapitalize='none'

                            />
                            <TextInput
                                style={tw`my-6 h-12 w-18 py-2 px-4 border-2 border-[#C0BCBC] rounded-lg placeholder:text-bold placeholder:text-[#555555]`}
                                placeholder='M.I.'
                                
                                keyboardType='email-address'
                                autoCapitalize='none'

                            />

                    </View>

                    <TextInput
                        style={tw`my-2 outline-none h-12 w-full py-2 px-4 border-2 border-[#C0BCBC] rounded-lg`}
                        placeholder='Lastname'
                        autoCapitalize='none'

                    />
                    <View style={tw`w-full`}>
                        <Text style={tw`font-medium text-lg text-gray-400 `}>Gender</Text>
                        <View style={tw`flex-row w-full `}>
                            <View style={tw`flex-row w-22 justify-around  items-center`}> 
                                <BouncyCheckbox style={tw` w-8 -mr-6`}
                                    unfillColor='#C0BCBC'
                                    iconStyle={{ borderColor: '#C0BCBC' }}
                                    fillColor='#2ECB6F'
                                    disableBuiltInState
                                    isChecked = {gender === 'Male'}
                                    onPress={()=> setGender('Male')}
                                   size={26}
                                    
                                /><Text>Male</Text>
                            </View>
                            <View style={tw`flex-row ml-6 w-22 justify-around items-center`}> 
                                <BouncyCheckbox style={tw`w-8 -mr-2`}
                                    unfillColor='#C0BCBC'
                                    iconStyle={{ borderColor: '#C0BCBC' }}
                                    disableBuiltInState
                                    fillColor='#2ECB6F'
                                    isChecked = {gender === 'Female'}
                                    onPress={()=> setGender('Female')}
                                    size={26}
                                    /><Text>Female</Text>
                            </View>
                            
                             
                        </View>
                    </View>
                    <View style={tw`w-full`}>
                        <Text style={tw`mt-2 font-medium text-lg text-gray-400 `}>Birthday</Text>
                        <View style={tw`flex-row w-52 h-12 items-center border-2 border-[#C0BCBC] rounded-lg`}>
                        <TextInput
                                style={tw`my-6 h-12 w-44 py-2 px-4 text-black  rounded-lg placeholder:text-bold placeholder:text-[#555555]`}
                                placeholder='Birthday'
                                value={btext}

                                editable={false}
                                
                                autoCapitalize='none'

                            />
                            <AntDesign name="calendar" size={24} color="gray"
                             onPress={()=>setShowdate(true)}
                                
                            />

                            <DateTimePickerModal
                                    isVisible={showdate}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={()=>setShowdate(false)}
                                />

                           

                        </View>
                       


                    </View>

                    <TextInput
                                style={tw`mt-6 h-12 w-full py-2 px-4 text-black  border-2 border-[#C0BCBC]   rounded-lg placeholder:text-bold placeholder:text-[#555555]`}
                                placeholder='Address'
                                autoCapitalize='none'

                            />
                    <Text style={tw`text-xs tracking-tighter w-full text-[#C0BCBC]`}>House number, Street Name, Barangay, Municipality, Province</Text>
                    <View style={tw`mt-4 w-full flex-row`}>
                    <BouncyCheckbox 
                        size={20}
                        unfillColor='transparent'
                        fillColor='#2ECB6F'
                        iconStyle={{
                            borderColor: '#C0BCBC' ,
                            borderRadius: 5, 
                          }}
                    /><Text style={tw`text-gray-400 font-bold`}>Yes, i understand and agree to the Terms of Service, including the <Text style={tw`text-[#0858B6]`}>User agreement and Privacy Policy.</Text></Text>
                    </View>
                    <TouchableOpacity
                        style={tw`mt-12 h-12 w-full py-2 px-4 bg-[#2ECB6F] rounded-lg flex-row items-center justify-center`}
                        onPress={()=> navigation.navigate('Create Account')}

                    >
                        <Text style={tw`text-gray-100 font-medium text-xl underline`}>Next</Text>
                    </TouchableOpacity>
                    

                </View>

               
                    <Image
                    source={require('../assets/images/circlebottom.png')}
                    style={tw`absolute -bottom-60 left-0 w-100 h-80`}
                    resizeMode='contain'
                    />
               
    </KeyboardAvoidingView>
  );
};

export default CreateAccount;
