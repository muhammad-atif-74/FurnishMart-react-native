import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';

type Variant = 'primary' | 'secondary' | 'danger';
type StyleType = 'fill' | 'outline';

type ButtonProps = {
    title: string;
    handleSubmit?: () => void;
    variant?: Variant;
    styleType?: StyleType;
};

const getButtonStyles = (variant: Variant, styleType: StyleType) => {
    const base = 'py-3 rounded-xl items-center mb-2 border';

    const variants = {
        primary: {
            fill: 'bg-primaryColor border-primaryColor',
            outline: 'bg-transparent border-primaryColor',
            text: 'text-backgroundColor',
            textOutline: 'text-primaryColor',
        },
        secondary: {
            fill: 'bg-secondaryColor border-secondaryColor',
            outline: 'bg-transparent border-secondaryColor',
            text: 'text-white',
            textOutline: 'text-secondaryColor',
        },
        danger: {
            fill: 'bg-red-600 border-red-600',
            outline: 'bg-transparent border-red-600',
            text: 'text-white',
            textOutline: 'text-red-600',
        },
    };

    const current = variants[variant];

    return {
        button: `${base} ${styleType === 'fill' ? current.fill : current.outline}`,
        text: `${styleType === 'fill' ? current.text : current.textOutline} text-base font-semibold`,
    };
};

const Button: React.FC<ButtonProps> = ({
    title,
    handleSubmit,
    variant = 'primary',
    styleType = 'fill',
}) => {
    const styles = getButtonStyles(variant, styleType);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            className={styles.button}
            onPress={handleSubmit}
        >
            <Text className={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
