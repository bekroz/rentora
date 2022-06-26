import { COLORS, SIZES } from "../../../../theme";
import RN from "../../../common/react-native";

export default RN.StyleSheet.create({
  listContainer: {
    marginBottom: 20,
  },
  homeContainer: {
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: "#000000",
    borderBottomLeftRadius: 0,
    height: 150,
    width: SIZES.width / 1.5,
  },
  homeImg: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    borderBottomLeftRadius: 0,
    opacity: 0.7,
  },
  textContainer: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 20,
    padding: 5,
  },
  subTitle: {
    color: COLORS.white,
    fontSize: 10,
  },
  arrowKeyContainer: {
    height: 55,
    backgroundColor: "#234F68",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 50,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 100,
  },
});
