import { Stack } from "expo-router";

export default function ProductsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="some-other-screen"
        options={{ title: "Some Other Screen" }}
      />
    </Stack>
  );
}
