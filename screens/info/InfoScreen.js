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
  Linking,
} from "react-native";
import { useState, useEffect, useReducer, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import * as ImagePicker from "expo-image-picker";
const InfoScreen = () => {
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
  };
  const [userName, onChangeUserName] = React.useState(userInfo.userName);
  const [filed, onChangefiled] = React.useState(userInfo.filed);
  const [company, onChangeCompany] = React.useState(userInfo.company);
  const [about, onChangeAbout] = React.useState(userInfo.about);
  const [link, onChangeLink] = React.useState(userInfo.link);

  const getValue = () => {
    let formData = {
      userName: userName,
      filed: filed,
      company: company,
      about: about,
      link: link,
    };
    console.log("提交修改个人信息", formData);
  };

  const [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  // let openImagePickerAsync = async () => {
  //   let permissionResult =
  //     await ImagePicker.requestMediaLibraryPermissionsAsync();
  //   if (permissionResult.granted === false) {
  //     alert("Permission to access camera roll is required!");
  //     return;
  //   }
  //   let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //   console.log(pickerResult);
  // };

  let MainHeight = Dimensions.get("window").height;
  let MainWidth = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1, backgroundColor: "rgb(236,236,236)" }}>
      <Modal isVisible={isModalVisible}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: MainWidth * 0.7,
              height: MainHeight * 0.2,
              backgroundColor: "white",
              padding: 10,
            }}
          >
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
          <TouchableOpacity
            onPress={toggleModal}
            style={{
              backgroundColor: "rgba(151,47,151, 0.7)",
              width: 70,
              height: 30,
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              确认
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.CardCtr}>
        <View style={styles.Line1}>
          {selectedImage !== null ? (
            <Image
              style={styles.avatorContainer}
              // source={require("../../assets/images/123.jpg")}
              source={{ uri: selectedImage.localUri }}
              resizeMode="cover"
            ></Image>
          ) : (
            <Image
              style={styles.avatorContainer}
              source={require("../../assets/images/123.jpg")}
              resizeMode="cover"
            ></Image>
          )}
          <View style={styles.btnCtr}>
            <TouchableOpacity style={styles.btn} onPress={openImagePickerAsync}>
              <Text style={{ fontSize: 13 }}>更换</Text>
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
                <Text style={{ marginRight: 10, color: "rgb(165,165,165)" }}>
                  {userName}
                </Text>
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
                <Text style={{ marginRight: 10, color: "rgb(165,165,165)" }}>
                  {filed}
                </Text>
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
                <Text style={{ marginRight: 10, color: "rgb(165,165,165)" }}>
                  {company}
                </Text>
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
                <Text style={{ marginRight: 10, color: "rgb(165,165,165)" }}>
                  {about}
                </Text>
                <AntDesign name="right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => toggleModal("外链")}
          >
            <View
              style={{
                width: MainWidth * 0.9,
                height: 60,
                marginTop: 2,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>外链</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 10, color: "rgb(165,165,165)" }}>
                  {link}
                </Text>
                <AntDesign name="right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: MainWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => getValue()}
          style={{
            width: 70,
            height: 30,
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(151,47,151, 0.7)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "rgb(100,100,100)" }}>保存修改</Text>
        </TouchableOpacity>
      </View>
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
    borderBottomColor: "rgb(120,120,120)",
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
    // backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(190,190,190)",
  },
});
export default InfoScreen;
