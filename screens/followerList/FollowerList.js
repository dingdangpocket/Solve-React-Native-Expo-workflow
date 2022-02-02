import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import UserCard from "../../components/UserCard";

const FollowerList = ({ navigation }) => {
  const [userData, setUserData] = useState([
    {
      id: 0,
      name: "陈伊",
      sign: "前端飞行✈️",
      avator: "../assets/images/solve.jpg",
    },
    { id: 1, name: "李海新", sign: "前端工程师❄️", avator: "" },
    { id: 2, name: "周新飞", sign: "后端工程师💰", avator: "" },
    { id: 3, name: "黄雪", sign: "安卓工程师🏠", avator: "" },
    { id: 4, name: "刘毅", sign: "架构师🎵", avator: "" },
    { id: 5, name: "陈可", sign: "产品经理📅", avator: "" },
    { id: 6, name: "何夕", sign: "运营总监⛰️", avator: "" },
    { id: 7, name: "尤风迎", sign: "运维🚗", avator: "" },
    { id: 8, name: "黄凯", sign: "测试💻", avator: "" },
    { id: 9, name: "陈力", sign: "UI设计💡", avator: "" },
    { id: 10, name: "刘思思", sign: "交互设计🚴‍♀️", avator: "" },
    { id: 11, name: "胡晓", sign: "产品发行👌", avator: "" },
  ]);
  return (
    <ScrollView style={{ backgroundColor: "rgb(230,230,230)" }}>
      {userData.map((item) => {
        return (
            <UserCard key={item.id} item={item} navigation={navigation}/>
         );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default FollowerList;
