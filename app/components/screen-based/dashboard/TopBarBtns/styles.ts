import RN from "../../../common/react-native";
import { COLORS, SIZES } from "../../../../theme";

export default RN.StyleSheet.create({
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  locationBtn: {
    borderRadius: 25,
    backgroundColor: COLORS.white,
    width: SIZES.width / 2.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
  },
  location: {
    fontSize: 10,
    fontWeight: "500",
    color: COLORS.blue,
  },
  dropDown: {
    right: -5,
  },
  topLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  topRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bellBtn: {
    marginRight: 10,
    borderWidth: 1.2,
    borderColor: COLORS.green,
  },
  bellIcon: {
    width: "50%",
    height: "50%",
  },
  topRightBtn: {
    borderRadius: 50,
    backgroundColor: COLORS.white,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  userPic: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});
