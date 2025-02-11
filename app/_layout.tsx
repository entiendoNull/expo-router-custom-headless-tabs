import * as React from "react";
import { StyleSheet } from "react-native";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { CustomTabList } from "@/components/CustomTabList";
import { CustomTabSlotRenderer } from "@/components/CustomTabSlotRenderer";

export default function Layout() {
  return (
    <Tabs>
      <TabSlot
        renderFn={(descriptor, options) => (
          <CustomTabSlotRenderer descriptor={descriptor} options={options} />
        )}
      />
      <CustomTabList />
      <TabList style={styles.tabList}>
        <TabTrigger name="home" href="/" />
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
