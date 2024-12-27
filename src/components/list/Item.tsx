import { Image } from "expo-image";
import { Text, TouchableOpacity, StyleSheet, Linking, View, ActivityIndicator } from "react-native";
import { Repo, User } from "../../types/user";
import { useQuery } from "@tanstack/react-query";
import { searchForRepos } from "../../api/users";
import { useState } from "react";
import { ArrowDown } from "../../assets/icons/ArrowDown";
import { ArrowUp } from "../../assets/icons/ArrowUp";
import { Dropdown } from "./Dropdown";
import { colors } from "../../assets/colors";
import Animated from "react-native-reanimated";

const ICON_SIZE = 40;

export const Item = ({ url, avatar_url, login, repos_url, id }: User) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {data, refetch, isLoading, isError} = useQuery<Repo[]>({
    queryKey: ["searchForUserReposQuery", `repos_${login}`],
    queryFn: () => searchForRepos(repos_url),
    refetchOnMount: false,
    refetchInterval: false,
    enabled: false,
  });

  const Icon = isExpanded ? <ArrowUp /> : <ArrowDown />;

  const onItemPress = async () => {
    if (!isLoading) {
      await refetch();
      setIsExpanded((prev) => !prev);
    }
  }

  return (
    <Animated.View key={id}>
      <TouchableOpacity
        style={styles.item}
        onPress={onItemPress}
        onLongPress={() => openInBrowser(url)}
      >
        <View style={styles.user}>
          {avatar_url && <Image
            style={styles.avatar}
            source={avatar_url}
            cachePolicy="disk"
            transition={500}
          />}
          <Text style={styles.login} numberOfLines={1}>{login}</Text>
        </View>
        {!isLoading ? Icon : <ActivityIndicator />}
      </TouchableOpacity>
      {data && data.length > 0 && isExpanded && (
        <Dropdown data={data} />
      )}
    </Animated.View>
  )
}

const openInBrowser = (url: string) => {
  Linking.openURL(url);
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.black,
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  login: {
    fontSize: 18,
    marginRight: ICON_SIZE,
    color: colors.black,
  },
  avatar: {
    height: ICON_SIZE,
    width: ICON_SIZE,
    borderRadius: 10,
    marginRight: 12,
  }
})
