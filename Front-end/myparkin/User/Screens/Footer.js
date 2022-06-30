import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export const Footer = () => {
  return (
    <View style={styles.Group41010}>
      <View style={styles.Group1301}>
        <View style={styles.Group851}>
          <Image
            style={styles.Group99}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A921?alt=media&token=a1079220-cbc1-4e04-99be-256cbacf247d",
            }}
          />
          <View style={styles.Group18}>
            <View style={styles.Line7} />
          </View>
          <View style={styles.Group1085}>
            <Image
              style={styles.Group115}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A931?alt=media&token=bc514255-d9ce-4e88-b654-88f89ce80898",
              }}
            />
          </View>
          <Image
            style={styles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A912?alt=media&token=59b63bac-7858-411a-bf97-0136a86869a3",
            }}
          />
        </View>
        <View style={styles.Group0107}>
          <Text style={styles.Txt747}>Home</Text>
          <Text style={styles.Txt413}>Saved</Text>
          <Text style={styles.Txt994}>Booking</Text>
          <Text style={styles.Txt1072}>Profile</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Group41010: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    height: "10%",
    bottom: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  Group1301: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "15%",
    // none: "0px",
    width: "90%",
    height: "16%",
    right: "4%",
  },
  Group851: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 2,
  },
  Group99: {
    width: 24,
    height: 26.67,
    marginRight: 76,
  },
  Group18: {
    paddingTop: 5,
    paddingBottom: 22,
    paddingLeft: 4,
    paddingRight: 4.22,
    marginRight: 77,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/pabo7awh17-79%3A914?alt=media&token=7b249d29-c6da-4d0f-a30d-3574b5e08b4f) */
    width: 18.22,
    height: 27,
  },
  Line7: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 10,
    height: 1,
  },

  Group1085: {
    paddingTop: 2,
    paddingBottom: 5,
    paddingLeft: 1,
    paddingRight: 1,
    marginRight: 77,
    backgroundColor: "rgba(188,0,99,1)",
    width: 19,
    height: 24,
  },
  Group115: {
    width: 14.73,
    height: 14.55,
  },

  Vector1: {
    width: 25,
    height: 27,
  },

  Group0107: {
    display: "flex",
    flexDirection: "row",
  },
  Txt747: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 67,
  },
  Txt413: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
    marginRight: 62,
  },
  Txt994: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(188,0,99,1)",
    marginRight: 64,
  },
  Txt1072: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(202,202,202,1)",
  },

  Vector2: {
    position: "absolute",
    top: "25.56%",
    bottom: "44.44%",
    left: "58.18%",
    right: "36.47%",
    width: 22.9,
    height: 27,
  },
});