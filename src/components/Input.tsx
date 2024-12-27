import { TextInput, StyleSheet } from "react-native";
import { colors } from "../assets/colors";

type InputProps = {
  value: string;
  setValue: (value: string) => void;
}

export const Input = ({ value, setValue }: InputProps) => (
  <TextInput style={styles.textInput} value={value} onChangeText={setValue} />
)

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: colors.black,
  }
})
