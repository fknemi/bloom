import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    gully_bold: require('../../assets/fonts/gully/otf/gully_bold.otf'),
    gully_medium: require('../../assets/fonts/gully/otf/gully_medium.otf'),
    gully_regular: require('../../assets/fonts/gully/otf/gully_regular.otf'),
    gully_light: require('../../assets/fonts/gully/otf/gully_light.otf'),
    super_sunshine: require('../../assets/fonts/super_sunshine/ttf/super_sunshine.ttf'),
    pixer: require('../../assets/fonts/pixer/ttf/pixer.ttf'),

  });
