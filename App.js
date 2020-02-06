import React, { useState } from 'react';
import Grid from './components/grid/grid.component'
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from "expo";


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
      <View style={styles.container} >
        <Grid />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/Food/Apple.png"),
      require("./assets/Food/AppleWorm.png"),
      require("./assets/Food/Avocado.png"),
      require("./assets/Food/Bacon.png"),
      require("./assets/Food/Beer.png"),
      require("./assets/Food/Boar.png"),
      require("./assets/Food/Bread.png"),
      require("./assets/Food/Brownie.png"),
      require("./assets/Food/Bug.png"),
      require("./assets/Food/Cheese.png"),
      require("./assets/Food/Cherry.png"),
      require("./assets/Food/Chicken.png"),
      require("./assets/Food/ChickenLeg.png"),
      require("./assets/Food/Cookie.png"),
      require("./assets/Food/DragonFruit.png"),
      require("./assets/Food/Eggplant.png"),
      require("./assets/Food/Eggs.png"),
      require("./assets/Food/Fish.png"),
      require("./assets/Food/FishFillet.png"),
      require("./assets/Food/FishSteak.png"),
      require("./assets/Food/Honey.png"),
      require("./assets/Food/Jam.png"),
      require("./assets/Food/Jerky.png"),
      require("./assets/Food/Lemon.png"),
      require("./assets/Food/Marmalade.png"),
      require("./assets/Food/MelonCantaloupe.png"),
      require("./assets/Food/MelonHoneydew.png"),
      require("./assets/Food/MelonWater.png"),
      require("./assets/Food/Moonshine.png"),
      require("./assets/Food/Olive.png"),
      require("./assets/Food/Onion.png"),
      require("./assets/Food/Peach.png"),
      require("./assets/Food/PepperGreen.png"),
      require("./assets/Food/Pepperoni.png"),
      require("./assets/Food/PepperRed.png"),
      require("./assets/Food/Pickle.png"),
      require("./assets/Food/PieApple.png"),
      require("./assets/Food/PieLemon.png"),
      require("./assets/Food/PiePumpkin.png"),
      require("./assets/Food/Pineapple.png"),
      require("./assets/Food/Potato.png"),
      require("./assets/Food/PotatoRed.png"),
      require("./assets/Food/Pretzel.png"),
      require("./assets/Food/Ribs.png"),
      require("./assets/Food/Roll.png"),
      require("./assets/Food/Saki.png"),
      require("./assets/Food/Whiskey.png"),
      require("./assets/Food/Wine.png")
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
