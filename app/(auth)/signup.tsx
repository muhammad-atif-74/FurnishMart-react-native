import React from 'react';
import {
    Alert,
    Button,
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { router } from 'expo-router';
import colors from '@/assets/colors';
// import furnishMart from '../../assets/images/furnishMart.png'

// Validation Schema
const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email address.'),
    username: Yup.string().required('Username is required.'),
    password: Yup.string()
        .required('Password is required.')
        .min(6, 'Password must be at least 6 characters'),
});

// Form initial values type
interface FormValues {
    email: string;
    username: string;
    password: string;
}

const Signup: React.FC = () => {
    const handleSignup = (values: FormValues) => {
        Alert.alert('Signup Submitted', `Welcome, ${values.username}!`);
        // API call here
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* <Image source={furnishMart} style={{ width: 150, height: 150, resizeMode: 'contain', marginHorizontal: "auto" }} /> */}
                <Text style={styles.title}>SIGN UP TO FURNISH MART</Text>

                <Formik
                    initialValues={{ email: '', username: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSignup}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                        <>
                            {/* Username Field */}
                            <Text style={styles.label}>Username</Text>
                            <TextInput
                                placeholder="Your Username"
                                placeholderTextColor="#aaa"
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                style={styles.input}
                            />
                            {touched.username && errors.username && <Text style={styles.error}>{errors.username}</Text>}

                            {/* Email Field */}
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                placeholder="you@example.com"
                                placeholderTextColor="#aaa"
                                keyboardType="email-address"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                style={styles.input}
                            />
                            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

                            {/* Password Field */}
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                style={styles.input}
                            />
                            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

                            {/* Submit Button */}
                            <TouchableOpacity
                                onPress={handleSubmit as any}
                                style={[styles.button, isSubmitting && styles.buttonDisabled]}
                                disabled={isSubmitting}
                            >
                                <Text style={styles.buttonText}>{isSubmitting ? 'Submitting...' : 'Sign Up'}</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>

                <TouchableOpacity onPress={() => router.push('/(auth)/signin')}>
                    <Text style={styles.switchText}>Already have an account? Sign in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Signup;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    content: {
        width: '100%',
        alignSelf: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 32,
        fontWeight: 'bold',
    },
    label: {
        color: colors.primary,
        fontSize: 14,
        marginBottom: 4,
        marginTop: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 6,
        color: 'white',
        fontSize: 14,
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 2,
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 24,
    },
    buttonDisabled: {
        opacity: 0.6,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    },
    switchText: {
        textAlign: 'center',
        color: 'white',
        marginTop: 16,
    },
});
