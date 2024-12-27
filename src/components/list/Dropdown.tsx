import { Text, StyleSheet, TouchableOpacity, View, Linking } from "react-native";
import { Repo } from "../../types/user";
import { colors } from "../../assets/colors";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Star } from "../../assets/icons/Star";
import { Eye } from "../../assets/icons/Eye";
import { Issue } from "../../assets/icons/Issue";

type DropdownProps = {
  data: Repo[];
}

export const Dropdown = ({ data }: DropdownProps) => {
  return (
    <Animated.View
      entering={FadeInUp}
      style={styles.wrapper}
    >
      {data.map(({ name,
                   id,
                   url,
                   description,
                   stargazers_count,
                   watchers_count,
                   open_issues_count }) => {

        const statsConfig = [
          {Icon: <Star />, value: stargazers_count, label: "Stargazers Count"},
          {Icon: <Eye />, value: watchers_count, label: "Watchers Count"},
          {Icon: <Issue />, value: open_issues_count, label: "Issues Count"},
        ]

        const onPress = () => {
          Linking.openURL(url);
        }

        return (
          <TouchableOpacity key={id} style={styles.itemContainer} onPress={onPress}>
            <Text style={styles.itemName}>{name}</Text>
            {description && <Text style={styles.itemDescription}>{description}</Text>}
            <View style={styles.statsContainer}>
              {statsConfig.map(({ Icon, value, label }) => (
                <View style={styles.stat} key={label}>
                  {Icon}
                  <Text style={styles.statText}>{value}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        )
      })}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  itemContainer: {
    marginBottom: 10,
    backgroundColor: colors.black,
    padding: 10,
    borderRadius: 8,
  },
  itemName: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 5,
  },
  itemDescription: {
    color: colors.white,
    fontSize: 11,
  },
  statsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 10,
  }
})
