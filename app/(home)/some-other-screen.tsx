import { Text, View, StyleSheet } from "react-native";

export default function SomeOtherScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Some Other Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 24
  }
});
