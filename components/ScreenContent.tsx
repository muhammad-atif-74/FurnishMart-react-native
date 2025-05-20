import { Text, View, TextInput, Pressable } from 'react-native';

export const ScreenContent = () => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-500 px-6">
      <View className="w-full max-w-sm space-y-6">
        <Text className="text-3xl font-bold text-center text-red-600">
          Welcome Back
        </Text>
        <Text className="text-center text-gray-500">
          Sign in to your account to continue
        </Text>

        <View className="space-y-4">
          <TextInput
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            className="border border-gray-300 rounded-xl px-4 py-3 text-base text-black"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 text-base text-black"
          />
        </View>

        <Pressable className="bg-green-600 py-3 rounded-xl items-center">
          <Text className="text-white text-base font-semibold">Sign In</Text>
        </Pressable>

        <Text className="text-center text-gray-400 text-sm">
          Don't have an account? <Text className="text-green-600">Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};
