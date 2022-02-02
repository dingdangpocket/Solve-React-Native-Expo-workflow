import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, Image,  Alert } from "react-native";
import {
  gestureHandlerRootHOC,
  TouchableOpacity,
} from "react-native-gesture-handler";

let MainHeight = Dimensions.get("window").height;
let MainWidth = Dimensions.get("window").width;
const UserCard = (props) => {
  useEffect(() => {
    console.log("地址", props.item.avator);
    console.log("地址", props.navigation);
  }, []);
  const cancleFollow = () => {
    Alert.alert(
      "提示信息",
      "确认要取消关注此人吗?",
      [
        { text: "确认", onPress: () => console.log("提交成功") },
        { text: "取消", onPress: () => console.log("输出取消") },
      ],
      { cancelable: true }
    ); //可关闭;
  };
  return (
    <View
      style={{
        width: MainWidth,
        height: 75,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => props.navigation.navigate("UserHomePage")}
        style={{
          width: MainWidth * 0.16,
          // backgroundColor: "orange",
          height: 65,
        }}
      >
        <Image
          source={require("../assets/images/solve.jpg")}
          style={{
            width: MainWidth * 0.16,
            // backgroundColor: "orange",
            height: 65,
          }}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("UserHomePage")}
        style={{
          width: MainWidth * 0.5,
          // backgroundColor: "white",
          height: 75,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text>{props.item.name}</Text>
        <Text style={{color:"gray",fontSize:12}}>{props.item.sign}</Text>
      </TouchableOpacity>
      <View
        style={{
          width: MainWidth * 0.18,
          // backgroundColor: "white",
          height: 75,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
        onPress={()=>cancleFollow()}
        >
          <Text style={{color:"gray",fontSize:12}}>已关注</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UserCard;
