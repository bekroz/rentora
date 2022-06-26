import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const DEFAULT_TEXT_SIZE = 16;

const SIZES = {
  base: 8,
  text: DEFAULT_TEXT_SIZE, // 16
  padding: 20,
  h1: DEFAULT_TEXT_SIZE + 2 * 6, // 28
  h2: DEFAULT_TEXT_SIZE + 2 * 4, // 24
  h3: DEFAULT_TEXT_SIZE + 2 * 2, // 20
  h4: DEFAULT_TEXT_SIZE + 2 * 1, // 18
  sm: DEFAULT_TEXT_SIZE - 2, // 14
  xs: DEFAULT_TEXT_SIZE - 3, // 13
  xxs: DEFAULT_TEXT_SIZE - 4, // 12
  width, // width of the screen
  height, // height of the screen
};

export default SIZES;
