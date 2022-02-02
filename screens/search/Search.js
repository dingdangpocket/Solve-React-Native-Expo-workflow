import React, { useState, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setName, getData } from "../../redux/actions";
import { createStackNavigator } from "@react-navigation/stack"; //引入
import ContentCard from "../../components/ContentCard";
const Stack = createStackNavigator();

let MainHeight = Dimensions.get("window").height;
let MainWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  codeBlock: {
    backgroundColor: "gray",
    borderBottomWidth: 1,
    borderColor: "red",
    fontSize: 13,
    color: "white",
    paddingRight: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    width: MainWidth * 0.8,
    borderWidth: 2,
    height: 40,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: MainWidth * 0.1,
    marginRight: MainWidth * 0.1,
  },
  TabViewItem: {
    display: "flex",
    flexWrap: "wrap",
  },
  searchArea: {},
  optionBox: {
    height: 60,
    width: 95,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginStart: 2,
    borderBottomWidth: 2,
    borderBottomColor: "#972F97",
    backgroundColor: "rgba(151,47,151, 0.7)",
  },
  optionBoxUnActived: {
    height: 60,
    width: 95,
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
  focusListContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "rgb(240,240,240)",
  },
});

const Search = ({ navigation }) => {
  const [name2, SetName2] = useState("");
  const { name, data } = useSelector((state) => state.userReducer);
  const [index, setIndex] = React.useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData()); //进页面调action请求函数;
  }, []);
  useEffect(() => {
    dispatch(getData()); //进页面调action请求函数;
  }, [index]);

  const setRedux = () => {
    dispatch(setName("Redux新名字"));
  };

  const saveData = async () => {
    navigation.navigate("Screen_B");
  };
  const go = () => {
    navigation.navigate("Screen_G", { name: "李华", id: "18" });
  };
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
  //选项列表
  const [optionList, setOptionList] = useState([
    { id: 0, content: "关注" },
    { id: 1, content: "精选" },
    { id: 2, content: "热门" },
    { id: 3, content: "示例" },
    { id: 4, content: "理论" },
    { id: 5, content: "问题" },
  ]);
  //选项列表
  //获得选项;
  const [current, setCurrent] = useState(0);
  const get = (optionId) => {
    console.log("点击的id", optionId);
    setCurrent(optionId);
  };

  //测试数据;
  const [cardData, setCardData] = useState([
    {
      id: 0,
      title: "React.js性能优化方案",
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
      tag: "理论",
      remdTag: "精选",
    },
    {
      id: 1,
      title: "Promise.all使用示例",
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
      tag: "示例",
      remdTag: "精选",
    },
    {
      id: 2,
      title: "Cannot read property blob of undefined",
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
      tag: "报错",
      remdTag: "热门",
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
      tag: "问题",
      remdTag: "热门",
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
      tag: "问题",
      remdTag: "热门",
    },
    {
      id: 5,
      title: "Vue.js响应式原理",
      content: "理论数据...",
      recordNum: "1076",
      solveNum: "786",
      spotNum: "684",
      commentNum: "692",
      publisher: "李飞",
      createTime: "3天前",
      MainTag: "前端",
      ProgramingLanguage: "javaScript",
      contentType: "theory",
      tag: "理论",
      remdTag: "热门",
    },
    {
      id: 6,
      title: "useRef使用示例",
      content: "示例数据...",
      recordNum: "1076",
      solveNum: "786",
      spotNum: "684",
      commentNum: "692",
      publisher: "李飞",
      createTime: "3天前",
      MainTag: "前端",
      ProgramingLanguage: "python",
      contentType: "example",
      tag: "示例",
      remdTag: "",
    },
  ]);
  //测试数据;

  const [SearchValue, setSearchValue] = useState("");

  //后端搜索;
  const searchData = () => {
    console.log("搜索内容", SearchValue);
    //axios...
    //setCardData(res)
  };
  //后端搜索;

  //前端搜索;
  const filterCardData = useMemo(() => {
    return cardData.filter((item) => {
      if (item.title.includes(SearchValue)) {
        return item;
      }
    });
  }, [SearchValue]);
  //前端搜索;

  return (
    <View>
      <ScrollView horizontal={false}>
        <View
          style={{
            backgroundColor: "rgb(250,250,250)",
            height: 50,
            width: MainWidth,
            flex: 1,
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "rgb(220,220,220)",
              width: MainWidth * 0.7,
              height: 35,
              borderColor: "black",
              marginLeft: MainWidth * 0.03,
              padding: 5,
            }}
            placeholder="请输入搜索内容..."
            onChangeText={setSearchValue}
            value={SearchValue}
          ></TextInput>
          <TouchableOpacity
            onPress={() => searchData()}
            style={{
              backgroundColor: "rgba(151,47,151, 0.7)",
              width: 70,
              height: 33,
              marginRight: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              搜索
            </Text>
          </TouchableOpacity>
        </View>
        {current == 0 ? (
          <View style={styles.focusListContainer}>
            {filterCardData.map((item) => {
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
        ) : null}
        {current == 1 ? (
          <View style={styles.focusListContainer}>
            {cardData
              .filter((item) => item.remdTag == "精选")
              .map((item) => {
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
        ) : null}
        {current == 2 ? (
          <View style={styles.focusListContainer}>
            {cardData
              .filter((item) => item.remdTag == "热门")
              .map((item) => {
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
        ) : null}
        {current == 3 ? (
          <View style={styles.focusListContainer}>
            {cardData
              .filter((item) => item.tag == "示例")
              .map((item) => {
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
        ) : null}
        {current == 4 ? (
          <View style={styles.focusListContainer}>
            {cardData
              .filter((item) => item.tag == "理论")
              .map((item) => {
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
        ) : null}
        {current == 5 ? (
          <View style={styles.focusListContainer}>
            {cardData
              .filter((item) => item.tag == "问题")
              .map((item) => {
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
        ) : null}
      </ScrollView>
    </View>
  );
};
export default Search;

// import React from 'react';
// import {View, StyleSheet} from 'react-native';

// const Search = () => {
//     return (
//         <View>

//         </View>
//     );
// }

// const styles = StyleSheet.create({})

// export default Search;
