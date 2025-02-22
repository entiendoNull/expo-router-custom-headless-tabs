import * as React from "react";
import { StyleSheet } from "react-native";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { CustomTabList } from "@/components/CustomTabList";

export default function Layout() {
  return (
    <Tabs>
      <TabSlot />
      <CustomTabList />
      <TabList style={styles.tabList}>
        <TabTrigger name="home" href="/(home)" />
        <TabTrigger name="search" href="/search" />
        <TabTrigger name="settings" href="/settings" />
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabList: {
    display: "none"
  }
});
