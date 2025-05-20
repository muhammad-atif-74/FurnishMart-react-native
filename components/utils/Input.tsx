import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'

type InputProps = {
    placeholder: string;
    value: string;
    onChangeText: (value: string) => void;
    type?: KeyboardTypeOptions;
    isPassword?: boolean;
};
const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, type = 'default', isPassword }) => {
    return (
        <TextInput
            secureTextEntry={isPassword}
            keyboardType={type}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            className="bg-[#f1f1f1] rounded-md px-4 py-4 text-base text-black mb-4"
            onChangeText={onChangeText}
            value={value}
        />
    )
}

export default Input