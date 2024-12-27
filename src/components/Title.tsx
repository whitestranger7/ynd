import { StyleSheet, Text, View } from "react-native";
import { colors } from "../assets/colors";

export const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={[styles.text, styles.titleText]}>
        Try my search engine
      </Text>
      <Text style={[styles.text, styles.titleSubText]}>
        (I swear it works)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    marginTop: 15,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.black,
  },
  titleText: {
    fontSize: 28,
  },
  titleSubText: {
    fontSize: 18,
  },
})
