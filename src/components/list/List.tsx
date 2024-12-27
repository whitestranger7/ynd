import {
  ActivityIndicator,
  StyleSheet,
  View,
  FlatList,
  ListRenderItem,
} from "react-native";
import { User } from "../../types/user";
import { Item } from "./Item";

type ListProps = {
  isLoading: boolean;
  data?: User[];
}

export const List = ({ isLoading, data }: ListProps) => {
  const renderItem: ListRenderItem<User> = ({ item }) => (
    <Item {...item} />
  )

  return (
    <View style={styles.list}>
      {!isLoading ? (
        <FlatList data={data} renderItem={renderItem} showsVerticalScrollIndicator={false}/>
      ) : (
        <View style={styles.indicator}>
          <ActivityIndicator size="large"/>
        </View >
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
  },
  indicator: {
    marginTop: 50,
  }
});
