import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import { useEffect } from "react";
import { AntDesign, Foundation } from "@expo/vector-icons";
const ContentCard = (props) => {
  useEffect(() => {
    console.log("props", props);
  }, []);
  return (
    <View style={styles.cardContainer} key={props.item.id}>
      <View style={styles.titleArea}>
        <Text>{props.item.title}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.leftArea}>
          <View style={styles.authorArea}>
            <Text style={{ fontSize: 10, color: "gray" }}>
              {props.item.publisher}&nbsp;|&nbsp;
            </Text>
            <Text style={{ fontSize: 10, color: "gray" }}>
              {props.item.createTime}&nbsp;|&nbsp;
            </Text>
            <Text style={{ fontSize: 10, color: "gray" }}>
              {props.item.tag}
            </Text>
          </View>
          <View style={styles.contentArea}>
            <Text style={{ fontSize: 12, color: "gray" }}>
              {props.item.content}
            </Text>
          </View>
        </View>
        <View style={styles.rightArea}>
          <View style={styles.imageArea}>
            <Image
              style={styles.imageArea}
              source={require("../assets/images/solve.jpg")}
              resizeMode="cover"
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.iconArea}>
        <AntDesign name="eye" size={10} color="gray" />

        <Text style={{ fontSize: 10, color: "gray" }}>
          &nbsp; 浏览:{props.item.recordNum}&nbsp; &nbsp;
        </Text>
        <Foundation name="key" size={13} color="gray" />
        <Text style={{ fontSize: 10, color: "gray" }}>
          &nbsp; solve:{props.item.solveNum}&nbsp; &nbsp;
        </Text>
        <AntDesign name="like1" size={10} color="gray" />
        <Text style={{ fontSize: 10, color: "gray" }}>
          &nbsp; spot:{props.item.spotNum}&nbsp; &nbsp;
        </Text>
      </View>
    </View>
  );
};
let MainHeight = Dimensions.get("window").height;
let MainWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  cardContainer: {
    width: MainWidth * 0.95,
    height: 155,
    backgroundColor: "white",
    marginTop: 10,
  },
  titleArea: {
    width: MainWidth * 0.9,
    height: 35,
    // backgroundColor: "white",
    justifyContent: "center",
    padding: 3,
  },
  container: {
    width: MainWidth * 0.9,
    height: 90,
    // backgroundColor: "green",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 3,
  },
  iconArea: {
    width: MainWidth * 0.9,
    height: 30,
    // backgroundColor: "orange",
    flexDirection: "row",
    alignItems: "center",
    padding: 3,
  },
  leftArea: {
    width: MainWidth * 0.66,
    height: 100,
    // backgroundColor: "yellow",
  },
  authorArea: {
    height: 20,
    width: "100%",
    // backgroundColor: 'red',
    flexDirection: "row",
    alignContent: "center",
  },
  contentArea: {
    height: 69,
    width: "100%",
    // backgroundColor: "blue",
    overflow: "hidden",
  },
  rightArea: {
    width: MainWidth * 0.22,
    height: 83,
    backgroundColor: "gray",
  },
  imageArea: {
    width: MainWidth * 0.22,
    height: 83,
    backgroundColor: "gray",
  },
});

export default ContentCard;
