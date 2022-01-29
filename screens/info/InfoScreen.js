import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { useState, useEffect, useReducer } from "react";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
const InfoScreen = () => {
  const forceUpdate = useReducer((bool) => !bool)[1];
  const [userInfo, setUserInfo] = useState({
    userName: "dingdang",
    filed: "前端",
    company: "solve",
    about: "写代码摸鱼",
    link: "www.dingdangpocket.com",
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState("用户名");
  const toggleModal = (value) => {
    setModalVisible(!isModalVisible);
    setStatus(value);
    forceUpdate() 
  };
  useEffect(() => {
    console.log("render");
  }, []);
  const [userName, onChangeUserName] = React.useState(userInfo.userName);
  const [filed, onChangefiled] = React.useState(userInfo.filed);
  const [company, onChangeCompany] = React.useState(userInfo.company);
  const [about, onChangeAbout] = React.useState(userInfo.about);
  const [link, onChangeLink] = React.useState(userInfo.link);
  return (
    <View style={{ flex: 1, backgroundColor: "rgb(236,236,236)" }}>
      <Modal isVisible={isModalVisible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ width: 200, height: 100, backgroundColor: "red" }}>
            {status == "用户名" ? (
              <TextInput
                style={styles.input}
                onChangeText={onChangeUserName}
                value={userName}
              />
            ) : null}
            {status == "职位" ? (
              <TextInput
                style={styles.input}
                onChangeText={onChangefiled}
                value={filed}
              />
            ) : null}
            {status == "公司" ? (
              <TextInput
                style={styles.input}
                onChangeText={onChangeCompany}
                value={company}
              />
            ) : null}
            {status == "简介" ? (
              <TextInput
                style={styles.input}
                onChangeText={onChangeAbout}
                value={about}
              />
            ) : null}
            {status == "外链" ? (
              <TextInput
                style={styles.input}
                onChangeText={onChangeLink}
                value={link}
              />
            ) : null}
          </View>
          <Button title="确认" onPress={toggleModal} />
        </View>
      </Modal>
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
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => toggleModal("用户名")}
          >
            <View style={styles.box}>
              <Text>用户名</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 10 }}>{userName}</Text>
                <AntDesign name="right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => toggleModal("职位")}
          >
            <View style={styles.box}>
              <Text>职位</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 10 }}>{filed}</Text>
                <AntDesign name="right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => toggleModal("公司")}
          >
            <View style={styles.box}>
              <Text>公司</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 10 }}>{company}</Text>
                <AntDesign name="right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => toggleModal("简介")}
          >
            <View style={styles.box}>
              <Text>简介</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 10 }}>{about}</Text>
                <AntDesign name="right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => toggleModal("外链")}
          >
            <View style={styles.box}>
              <Text>外链</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 10 }}>{link}</Text>
                <AntDesign name="right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Button title="保存修改"></Button>
    </View>
  );
};

let MainHeight = Dimensions.get("window").height;
let MainWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  CardCtr: {
    height: 430,
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
    marginTop: 2,
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
