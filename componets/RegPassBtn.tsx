import { TouchableOpacity, Text } from "react-native";

interface BtnProps {
    value?: string;
    marginTop: number;
    fontSize?: number;
}

const RegPassBtn = ({ value, marginTop, fontSize}: BtnProps) => {
    return (
        <TouchableOpacity style={{marginTop: marginTop}}>
            <Text style={{color: '#ff941a', textDecorationLine: 'underline', fontSize: fontSize}}>{value}</Text>
        </TouchableOpacity>
    );
}
export default RegPassBtn;