import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function App() {
  return (
    <View style={styles.screen}>
      <MapView // 셀프클로징해도 되지만 후의 마커를 위해서
        style={styles.map}
        initialRegion={{
          latitude: 37.0,
          longitude: 126.0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        provider={PROVIDER_GOOGLE}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
