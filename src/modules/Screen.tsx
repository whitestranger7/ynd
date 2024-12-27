import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchForUser } from "../api/users";
import { User } from "../types/user";
import { List } from "../components/list/List";
import { Button } from "../components/Button";
import { colors } from "../assets/colors";

export const Screen = () => {
  const [searchValue, setSearchValue] = useState("");

  const {data, refetch, isLoading} = useQuery<User[]>({
    queryKey: ["searchForUserQuery", `users_${searchValue}`],
    queryFn: () => searchForUser(searchValue),
    enabled: false,
    refetchOnMount: false,
    refetchInterval: false,
  });

  const onButtonPress = async () => {
    if (searchValue) {
      await refetch();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <Input value={searchValue} setValue={setSearchValue} />
      <Button onPress={onButtonPress} isLoading={isLoading} />
      <List isLoading={isLoading} data={data} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    marginHorizontal: 25,
  },
  button: {
    backgroundColor: "transparent",
  }
});

