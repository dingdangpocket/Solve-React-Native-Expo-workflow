import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const Comment = (props) => {
  return (
    <View
      style={{
        marginLeft: 10,
        backgroundColor: "rgb(230,230,230)",
        padding: 5,
      }}
    >
      {props.childrenComment.map((item) => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 3,
            }}
            key={props.childrenComment.id}
          >
            <Text>
              {item.publisher}回复{item.anwser}:{item.content}
            </Text>
            <TouchableOpacity onPress={() => props.toggleModal()}>
              <FontAwesome name="commenting-o" size={18} color="gray" />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Comment;
