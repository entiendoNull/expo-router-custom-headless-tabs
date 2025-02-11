import { StyleSheet } from "react-native";
import {
  TabsDescriptor,
  TabsSlotRenderOptions
} from "expo-router/build/ui/Tabs";
import { Screen } from "react-native-screens";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

interface CustomTabSlotRendererProps {
  descriptor: TabsDescriptor;
  options: TabsSlotRenderOptions;
}

export function CustomTabSlotRenderer(props: CustomTabSlotRendererProps) {
  const { unmountOnBlur } = props.descriptor.options;
  const { isFocused } = props.options;

  if (unmountOnBlur && !isFocused) {
    return null;
  }

  if (!isFocused) {
    return null;
  }

  return (
    <Screen
      key={props.descriptor.route.key}
      enabled={props.options.detachInactiveScreens}
      activityState={isFocused ? 2 : 0}
      freezeOnBlur={props.descriptor.options.freezeOnBlur}
      style={[styles.screen, isFocused ? styles.focused : styles.unfocused]}
    >
      {isFocused && (
        <Animated.View
          style={styles.screenContainer}
          entering={FadeIn.duration(1000)}
          exiting={FadeOut.duration(1000)}
        >
          {props.descriptor.render()}
        </Animated.View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
  screen: {
    flex: 1,
    position: "relative"
  },
  focused: {
    zIndex: 1,
    display: "flex",
    flexShrink: 0,
    flexGrow: 1
  },
  unfocused: {
    zIndex: -1,
    display: "none",
    flexShrink: 1,
    flexGrow: 0
  }
});
