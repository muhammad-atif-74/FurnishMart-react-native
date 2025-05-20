import { useNavigation } from '@react-navigation/native';
import Button from 'components/utils/Button';
import Input from 'components/utils/Input';
import { useState } from 'react';
import { Text, View, Pressable, SafeAreaView, Alert, Image } from 'react-native';
import { ALERT_TYPE, Dialog, Toast } from 'react-native-alert-notification';
import furnishMart from '../../assets/furnishMart.png'

export const Signin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email === "" || password === "") {
      return Toast.show({
        type: ALERT_TYPE.DANGER,
        title: '',
        textBody: 'Please fill out the fields.',
      })
    }
  }


  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-blue-100 px-6">
      <View className="w-full max-w-xl space-y-6 ">
        <Image source={furnishMart} style={{ width: 100, height: 100, resizeMode: 'contain', marginHorizontal: "auto" }} />
        <Text className="text-3xl uppercase font-bold text-center text-primaryColor">
          Welcome Back
        </Text>
        <Text className="text-center text-secondaryColor mb-14">
          Sign in to your account to continue
        </Text>

        <View className="space-y-4">
          <Input onChangeText={setEmail} placeholder="Enter email" type="default" value={email} />
          <Input onChangeText={setPassword} placeholder="Enter password" type="default" value={password} isPassword />
        </View>

        <Button handleSubmit={handleSubmit} title='Sign in' />

        <Text className="text-center text-gray-400 text-sm">
          Don't have an account? <Text className="text-primaryColor" onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};