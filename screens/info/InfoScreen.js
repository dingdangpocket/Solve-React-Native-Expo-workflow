import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const InfoScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "rgb(236,236,236)" }}>
      <View style={styles.CardCtr}>
        <View style={styles.Line1}>
          <Image
            style={styles.avatorContainer}
            source={require("../../assets/images/123.jpg")}
            resizeMode="cover"
          ></Image>
          <View style={styles.btnCtr}>
            <TouchableOpacity style={styles.btn} onPress={() => editInfo()}>
              <Text style={{ fontSize: 16 }}>更换</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Line2}>
          <View style={styles.box}>
            <Text>用户名</Text>
            <Text style={{ marginRight: 10 }}>dingdang</Text>
          </View>
          <View style={styles.box}>
            <Text>职位</Text>
            <Text style={{ marginRight: 10 }}>前端开发</Text>
          </View>
          <View style={styles.box}>
            <Text>公司</Text>
            <Text style={{ marginRight: 10 }}>solve</Text>
          </View>
          <View style={styles.box}>
            <Text>简介</Text>
            <Text style={{ marginRight: 10 }}>写代码、摸鱼、🚴</Text>
          </View>
          <View style={styles.box}>
            <Text>外链</Text>
            <Text style={{ marginRight: 10 }}>www.dingdangpocket.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

let MainHeight = Dimensions.get("window").height;
let MainWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  CardCtr: {
    height: 430,
    // backgroundColor: "green",
    marginTop: 5,
    flexDirection: "column",
    padding: 8,
  },
  Line1: {
    height: 80,
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  avatorContainer: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    borderRadius: 50,
    marginLeft: 10,
  },
  btnCtr: {
    width: 80,
    height: 80,
    marginLeft: MainWidth * 0.2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  Line2: {
    height: 320,
    backgroundColor: "white",
    marginTop: 15,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  box: {
    width: MainWidth * 0.9,
    height: 60,
    marginTop:2,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});
export default InfoScreen;
