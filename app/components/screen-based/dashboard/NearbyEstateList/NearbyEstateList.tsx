import React from "react";
import RN from "../../../common/react-native";
import { COLORS } from "../../../../theme";
import styles from "./styles";
import heartIcon from "../../../../../assets/png/dashboard/dashboard-heart.png";
import estateImg from "../../../../../assets/png/dashboard/dashboard-apartment-1.jpeg";
import locationIcon from "../../../../../assets/png/dashboard/dashboard-location.png";
import starIcon from "../../../../../assets/png/dashboard/dashboard-star.png";
import { ImageBackground } from "react-native";

const EstateImgContainer = () => {
  return (
    <ImageBackground
      source={estateImg}
      style={styles.estateImgContainer}
      imageStyle={styles.estateImg}
    >
      <RN.TouchableOpacity style={styles.heartBtn}>
        <RN.Image style={{ width: 15, height: 15 }} source={heartIcon} />
      </RN.TouchableOpacity>
      <RN.TouchableOpacity style={styles.priceBtn}>
        <RN.Text style={styles.price}>$220/Month</RN.Text>
      </RN.TouchableOpacity>
    </ImageBackground>
  );
};

const EstateDetails = () => {
  return (
    <RN.View style={styles.estateDetailsContainer}>
      <RN.View style={styles.locationWrapper}>
        <RN.Text style={styles.location}>Wings Tower</RN.Text>
      </RN.View>
      <RN.View style={styles.bottomDetailsContainer}>
        <RN.Image source={starIcon} style={styles.starIcon} />
        <RN.Text style={styles.estateRating}>4.9</RN.Text>
        <RN.Image
          source={locationIcon}
          style={styles.locationIcon}
          resizeMode="contain"
        />
        <RN.Text style={styles.estateLocation}>Jakarta, Indondesia</RN.Text>
      </RN.View>
    </RN.View>
  );
};
const NearbyEstateCard = () => {
  return (
    <RN.TouchableOpacity
      style={{
        backgroundColor: COLORS.cardColor,
        width: 160,
        height: 230,
        borderRadius: 25,
      }}
    >
      <EstateImgContainer />
      <EstateDetails />
    </RN.TouchableOpacity>
  );
};

const SuggestedAgentHeader = () => {
  return (
    <RN.View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <RN.Text style={{ color: "#252B5C", fontSize: 18, fontWeight: "700" }}>
        Top Locations
      </RN.Text>
      <RN.Text style={{ color: "#234F68", fontWeight: "600", fontSize: 10 }}>
        explore
      </RN.Text>
    </RN.View>
  );
};

const NearbyEstateList = () => {
  return <NearbyEstateCard />;
};

export default NearbyEstateList;
