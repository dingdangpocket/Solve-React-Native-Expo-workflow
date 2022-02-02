import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";
import { useEffect } from "react";
import { AntDesign, Foundation } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 

let MainHeight = Dimensions.get("window").height;
let MainWidth = Dimensions.get("window").width;
const NoteCard = (props) => {
  useEffect(() => {
    console.log("props", props);
  }, []);
  return (
    <View
      style={{
        height: 125,
        width:MainWidth*0.22,
        backgroundColor: "white",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom:3,
      }}
      key={props.item.id}
    >
      <View style={{ height: 90,width:MainWidth*0.22, backgroundColor: "rgb(250,250,250)",justifyContent:"center",alignItems:"center" }}>
        {/* <Image
          source={require("../assets/images/my0.png")}rgba(151,27,121, 0.85)
          style={{ height: 65, width: 65 }}
        ></Image> */}
        <Ionicons name="code-slash-sharp" size={48} color="gray" />
      </View>
      <View style={{ height: 35,width:MainWidth*0.22,  backgroundColor: "rgba(150,150,150,0.9)",justifyContent:"center",alignItems:"center" }}>
        <Text style={{fontSize:12,color:"white"}}>
          {props.item.title}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default NoteCard;
