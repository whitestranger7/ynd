import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../assets/colors";

type ButtonProps = {
  isLoading: boolean;
  onPress: () => void;
}

export const Button = ({isLoading, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {!isLoading ?
        <Text style={styles.text}>Search</Text>
        : <ActivityIndicator/>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    marginVertical: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: colors.white,
  },
})
