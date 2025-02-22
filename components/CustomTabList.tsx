import * as React from "react";
import { View, StyleSheet, Platform } from "react-native";
import * as Haptics from "expo-haptics";
import { TabTrigger } from "expo-router/ui";
import { ToggleMenuButton } from "./ToggleMenuButton";
import { CustomTabButton } from "./CustomTabButton";

export function CustomTabList() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  function toggleExpandHandler() {
    setIsExpanded(!isExpanded);

    if (Platform.OS === "ios") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    }
  }

  return (
    <View style={styles.tabList}>
      <TabTrigger name="home" asChild reset="never">
        <CustomTabButton icon="home" isExpanded={isExpanded} index={2}>
          Home
        </CustomTabButton>
      </TabTrigger>
      <TabTrigger name="search" asChild reset="never">
        <CustomTabButton icon="search" isExpanded={isExpanded} index={1}>
          Search
        </CustomTabButton>
      </TabTrigger>
      <TabTrigger name="settings" asChild reset="never">
        <CustomTabButton icon="settings" isExpanded={isExpanded} index={0}>
          Settings
        </CustomTabButton>
      </TabTrigger>
      <ToggleMenuButton onPress={toggleExpandHandler} isExpanded={isExpanded} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabList: {
    bottom: 32,
    right: 32,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  }
});
