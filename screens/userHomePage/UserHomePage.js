import React, { Profiler, useState, useRef, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ContentCard from "../../components/ContentCard";
const UserHomePage = ({ navigation }) => {
  //测试数据;
  const [cardData, setCardData] = useState([
    {
      id: 0,
      title: "React性能优化方案",
      content: "理论内容数据...",
      recordNum: "1076",
      solveNum: "786",
      spotNum: "684",
      commentNum: "692",
      publisher: "张海",
      createTime: "3天前",
      MainTag: "前端",
      ProgramingLanguage: "python",
      contentType: "theory",
    },
    {
      id: 1,
      title: "Promise.all()使用示例",
      content: "示例内容数据...",
      recordNum: "1076",
      solveNum: "786",
      spotNum: "684",
      commentNum: "692",
      publisher: "何新",
      createTime: "3天前",
      MainTag: "前端",
      ProgramingLanguage: "python",
      contentType: "example",
    },
    {
      id: 2,
      title: "Cannot read property blob of undefined?",
      content: "报错内容数据...",
      recordNum: "1076",
      solveNum: "786",
      spotNum: "684",
      commentNum: "692",
      publisher: "李斯",
      createTime: "3天前",
      MainTag: "前端",
      ProgramingLanguage: "python",
      contentType: "error",
    },
    {
      id: 3,
      title: "Ajax中如何获得数据?",
      content: "问题数据...",
      recordNum: "1076",
      solveNum: "786",
      spotNum: "684",
      commentNum: "692",
      publisher: "陈新",
      createTime: "3天前",
      MainTag: "前端",
      ProgramingLanguage: "python",
      contentType: "question",
    },
    {
      id: 4,
      title: "如何系统学习React-Native?",
      content: "问题数据...",
      recordNum: "1076",
      solveNum: "786",
      spotNum: "684",
      commentNum: "692",
      publisher: "李飞",
      createTime: "3天前",
      MainTag: "前端",
      ProgramingLanguage: "python",
      contentType: "question",
    },
  ]);
  //测试数据;
  //选项列表
  const [optionList, setOptionList] = useState([
    { id: 0, content: "动态" },
    { id: 1, content: "发布" },
    { id: 2, content: "笔记" },
    { id: 3, content: "更多" },
  ]);
  //选项列表

  //获得选项;
  const [current, setCurrent] = useState(0);
  const get = (optionId) => {
    console.log("点击的id", optionId);
    setCurrent(optionId);
    onPressTouch();
  };
  //获得选项;

  //scrollView跳转到指定位置
  let MainHeight = Dimensions.get("window").height;
  let MainWidth = Dimensions.get("window").width;
  const scrollRef = useRef();
  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: MainHeight * 0.32,
      animated: true,
    });
  };
  //scrollView跳转到指定位置

  //跳转内容页面详情;
  const LinkToDesc = (contentType) => {
    if (contentType == "theory") {
      navigation.navigate("TheoryDescScreen");
    }
    if (contentType == "error") {
      navigation.navigate("ErrorDescScreen");
    }
    if (contentType == "example") {
      navigation.navigate("ExampleDescScreen");
    }
    if (contentType == "question") {
      navigation.navigate("QuestionDescScreen");
    }
  };
  //跳转内容页面详情;
  const editInfo = () => {
    navigation.navigate("InfoScreen");
  };
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };

  return (
    <>
      <ScrollView
        ref={scrollRef}
        style={styles.container}
        stickyHeaderIndices={[1]}
        // onScroll={(event) => {
        //   {
        //     console.log(event.nativeEvent.contentOffset.x); //水平滚动距离
        //     console.log(event.nativeEvent.contentOffset.y); //垂直滚动距离
        //     if (event.nativeEvent.contentOffset.y > 213) {
        //       console.log("导航吸顶");
        //     }
        //   }
        // }}
      >
        <View style={styles.CardCtr}>
          <View style={styles.Line1}>
            <Image
              style={styles.avatorContainer}
              source={require("../../assets/images/123.jpg")}
              resizeMode="cover"
            ></Image>
            <View style={styles.infoCtr}>
              <Text style={{ fontSize: 16 }}>dingdang</Text>
              <Text style={{ fontSize: 12, color: "rgb(120,120,120)" }}>
                前端开发
              </Text>
              <Text style={{ fontSize: 10, color: "rgb(120,120,120)" }}>
                写代码、摸鱼、🚴
              </Text>
            </View>
            <View style={styles.btnCtr}>
              {/* <TouchableOpacity style={styles.btn} onPress={() => editInfo()}>
                <Text style={{ fontSize: 12 }}>编辑</Text>
              </TouchableOpacity> */}
            </View>
          </View>
          <View style={styles.Line2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("MyFollowerList")}
            >
              <View style={styles.box}>
                <Text>73</Text>
                <Text>关注</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("FollowerList")}
            >
              <View style={styles.box}>
                <Text>823</Text>
                <Text>关注者</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.box}>
              <Text>78</Text>
              <Text>solve</Text>
            </View>
            <View style={styles.box}>
              <Text>14</Text>
              <Text>推荐</Text>
            </View>
          </View>
        </View>

        <View horizontal={false}>
          <View style={styles.optionArea}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.optionAreaLeft}
            >
              {optionList.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.9}
                    onPress={() => get(item.id)}
                  >
                    <View
                      style={
                        item.id == current
                          ? styles.optionBox
                          : styles.optionBoxUnActived
                      }
                    >
                      <Text
                        style={
                          item.id == current
                            ? styles.textDefault
                            : styles.textUnActived
                        }
                      >
                        {item.content}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
        {current == 0 ? (
          <ScrollView>
            <View style={styles.focusListContainer}>
              {cardData.map((item) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    key={item.id}
                    onPress={() => LinkToDesc(item.contentType)}
                  >
                    <View>
                      <ContentCard item={item}></ContentCard>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        ) : null}
        {current == 1 ? (
          <ScrollView>
            <View style={styles.focusListContainer}>
              {cardData.map((item) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    key={item.id}
                    onPress={() => LinkToDesc(item.contentType)}
                  >
                    <View>
                      <ContentCard item={item}></ContentCard>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        ) : null}
        {current == 2 ? (
          <ScrollView>
            <View style={styles.focusListContainer}>
              {cardData.map((item) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    key={item.id}
                    onPress={() => LinkToDesc(item.contentType)}
                  >
                    <View>
                      <ContentCard item={item}></ContentCard>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        ) : null}
        {current == 3 ? (
          <ScrollView>
            <View style={styles.optionBoxContainer}>
              <Text>其他</Text>
            </View>
          </ScrollView>
        ) : null}
      </ScrollView>
    </>
  );
};

let MainHeight = Dimensions.get("window").height;
let MainWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(240,240,240)",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  CardCtr: {
    height: 210,
    // backgroundColor: "gray",
    flex: 1,
    marginTop: 5,
    flexDirection: "column",
  },
  Line1: {
    height: 80,
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Line2: {
    height: 80,
    backgroundColor: "white",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  avatorContainer: {
    width: 70,
    height: 70,
    // backgroundColor: "red",
    borderRadius: 50,
    marginLeft: 10,
  },
  infoCtr: {
    width: 100,
    height: 70,
    backgroundColor: "white",
    marginLeft: MainWidth * 0.05,
    justifyContent: "center",
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
    borderColor: "rgb(170,170,170)",
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "rgb(240,240,240)",
  },
  optionArea: {
    // backgroundColor: "green",
    width: MainWidth,
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
  },
  optionAreaLeft: {
    // backgroundColor: "blue",
    height: 50,
    width: MainWidth,
  },
  optionBox: {
    height: 50,
    width: MainWidth * 0.25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#972F97",
    backgroundColor: "rgba(151,47,151, 0.9)",
  },
  optionBoxUnActived: {
    height: 60,
    width: MainWidth * 0.25,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textDefault: {
    color: "white",
    fontSize: 15,
  },
  textUnActived: {
    color: "gray",
  },
  CardListContainer: {
    backgroundColor: "red",
    height: MainHeight,
  },
  focusListContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  optionBoxContainer: {
    backgroundColor: "rgb(240,240,240)",
    height: MainHeight,
  },
});
export default UserHomePage;
