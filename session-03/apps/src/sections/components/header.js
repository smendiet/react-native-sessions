import React from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require("../../../assets/bedu.png")}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 280,
    height: 120,
    resizeMode: "contain",
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row"
  },
});

export default Header;
