import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import AppContainer from './src/app'

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      // <View style={styles.container} >
      //   <Grid />
      // </View>
      <AppContainer />
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/Items/arrow_01a.png"),
      require("./assets/Items/book_01a.png"),
      require("./assets/Items/bow_01a.png"),
      require("./assets/Items/candy_01a.png"),
      require("./assets/Items/coin_01a.png"),
      require("./assets/Items/crystal_01a.png"),
      require("./assets/Items/fish_01a.png"),
      require("./assets/Items/gem_01a.png"),
      require("./assets/Items/gift_01a.png"),
      require("./assets/Items/giftopen_01a.png"),
      require("./assets/Items/helmet_01a.png"),
      require("./assets/Items/ingot_01a.png"),
      require("./assets/Items/key_01a.png"),
      require("./assets/Items/necklace_01a.png"),
      require("./assets/Items/pearl_01a.png"),
      require("./assets/Items/potion_01a.png"),
      require("./assets/Items/ring_01a.png"),
      require("./assets/Items/scroll_01a.png"),
      require("./assets/Items/shield_01a.png"),
      require("./assets/Items/spellbook_01a.png"),
      require("./assets/Items/staff_01a.png"),
      require("./assets/Items/sword_01a.png"),
      require("./assets/Items/sword_01b.png"),
      require("./assets/Items/sword_01c.png"),
      require("./assets/Items/sword_01d.png"),
      require("./assets/Items/sword_01e.png"),
      require("./assets/Items/sword_02a.png"),
      require("./assets/Items/sword_02b.png"),
      require("./assets/Items/sword_02c.png"),
      require("./assets/Items/sword_02d.png"),
      require("./assets/Items/sword_02e.png"),
      require("./assets/Items/sword_03a.png"),
      require("./assets/Items/sword_03b.png"),
      require("./assets/Items/sword_03c.png"),
      require("./assets/Items/sword_03d.png"),
      require("./assets/Items/sword_03e.png"),
    ])
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
