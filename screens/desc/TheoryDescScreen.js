import React, { useState } from "react";
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
  KeyboardAvoidingView,
} from "react-native";
import Markdown from "react-native-markdown-renderer";
import { AntDesign } from "@expo/vector-icons";
import ContentCard from "../../components/ContentCard";
import Comment from "../../components/Comment";
import Modal from "react-native-modal";
const copy = `
实际开发中,我们针对react的性能优化需要做一些特殊的处理,以下是一些常用的技术路线;
\`\`\` js
import React from "react"
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
class PictureCom extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [
        ],
        serverImgName:""
    };
    handleCancel = () => this.setState({ previewVisible: false });
    
    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined/>
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <>
                <Upload
                    action="http://127.0.0.1:8002/goods/fileUpload"
                    listType="picture-card"
                    name="imgSrc"
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
            </>
        );
    }
}
export default PictureCom
\`\`\`
## 表格
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
## 外链
[跳转到百度](http://www.baidu.com "title text!")
## 图片
![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
`;
let MainHeight = Dimensions.get("window").height;
let MainWidth = Dimensions.get("window").width;
const TheoryDescScreen = ({ navigation }) => {
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
  ]);
  //测试数据;
  
  //评论树测试数据;
  const [comment, setCommentData] = useState([
    {
      id: 0,
      publisher: "李飞",
      content:
        "这一篇文章真的写的不错,我在开发中按照这个流程执行,完美解决了我的问题;",
      childrenComment: [
        {
          id: 0,
          publisher: "杨磊",
          content: "我觉得不行",
          parentId: 0,
          anwser: "李飞",
        },
        {
          id: 1,
          publisher: "黄海",
          content: "我赞同你的观点",
          parentId: 0,
          anwser: "杨磊",
        },
      ],
    },
    {
      id: 1,
      publisher: "李海新",
      content: "为什么我没有获得这个数据流?",
      parentId: null,
    },
    {
      id: 2,
      publisher: "陈新伊",
      content: "我也觉得写的不错!",
      parentId: 0,
    },
    {
      id: 3,
      publisher: "胡斌",
      content: "在React中是如何使用的?",
      parentId: null,
      childrenComment: [
        {
          id: 0,
          publisher: "杨磊",
          content: "我觉得不行",
          parentId: 0,
          anwser: "李飞",
        },
        {
          id: 1,
          publisher: "黄海",
          content: "这篇文章质量非常高",
          parentId: 0,
          anwser: "杨磊",
        },
      ],
    },
  ]);
  //评论树测试数据;

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
  const [isModalVisible, setModalVisible] = useState(false);
  const [commentData, onChangeCommentData] = React.useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const publishComment = () => {
    console.log(commentData);
    let obj = {
      id: comment.length + 1,
      publisher: "李飞",
      content: commentData,
    };
    setCommentData([...comment, obj]);
    setModalVisible(!isModalVisible);
  };
  return (
    <>
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
            <TextInput
              style={styles.input}
              onChangeText={onChangeCommentData}
              value={commentData}
              placeholder="请输入你的评论内容"
            />
          </View>
          <TouchableOpacity
            onPress={publishComment}
            style={{
              backgroundColor: "rgba(151,47,151, 0.9)",
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
              发布
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ScrollView style={styles.container}>
        <View style={styles.justify}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: MainWidth,
                height: 65,
                backgroundColor: "white",
                borderBottomWidth: 1,
                borderBottomColor: "rgb(220,220,220)",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../../assets/images/solve.jpg")}
                  style={{ width: 60, height: 60, marginLeft: 5, marginTop: 2 }}
                  resizeMode="cover"
                ></Image>
                <View
                  style={{
                    width: 100,
                    height: 70,
                    justifyContent: "center",
                    marginLeft: 10,
                    marginTop: -5,
                  }}
                >
                  <Text>dingdang</Text>
                  <Text style={{ fontSize: 10 }}>前端开发</Text>
                </View>
              </View>

              <View style={{ width: 100, height: 70, marginRight: 5 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("UserHomePage");
                  }}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "gray" }}>主页</Text>
                  <AntDesign name="right" size={15} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <Text style={{ fontSize: 20 }}>React性能优化方案</Text>
          <Markdown mergeStyle={true}>{copy}</Markdown>
          <View
            style={{
              width: MainWidth * 0.95,
              height: 30,
              backgroundColor: "white",
              justifyContent: "center",
              padding: 3,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>相关文章</Text>
            <AntDesign name="right" size={15} color="gray" />
          </View>
          <View
            style={{
              width: MainWidth * 0.95,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cardData.map((item) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={item.id}
                  onPress={() => LinkToDesc(item.contentType)}
                  style={{ marginBottom: 5 }}
                >
                  <View>
                    <ContentCard item={item}></ContentCard>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          <View
            style={{
              width: MainWidth * 0.95,
              height: 28,
              backgroundColor: "white",
              marginTop: 10,
              marginBottom: 10,
              padding: 3,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15 }}>全部评论</Text>
            <AntDesign name="right" size={15} color="gray" />
          </View>

          <View
            style={{
              width: MainWidth * 0.95,
              flex: 1,
              backgroundColor: "white",
              justifyContent: "center",
              marginBottom: 60,
            }}
          >
            {comment.map((item) => {
              if (item.childrenComment != null) {
                return (
                  <>
                    <View
                      key={item.id}
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "rgb(180,180,180)",
                        padding: 3,
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          height: 50,
                          backgroundColor: "white",
                          flexDirection: "row",
                        }}
                      >
                        <Image
                          source={require("../../assets/images/solve.jpg")}
                          resizeMode="cover"
                          style={{ width: 50, height: 50 }}
                        ></Image>
                        <View
                          style={{
                            width: 100,
                            height: 50,
                            // backgroundColor: "orange",
                            flexDirection: "column",
                            justifyContent: "center",
                            marginTop: -8,
                            marginLeft: 5,
                          }}
                        >
                          <Text>{item.publisher}</Text>
                          <Text
                            style={{ fontSize: 10, color: "rgb(100,100,100)" }}
                          >
                            三天前
                          </Text>
                        </View>
                      </View>
                      <Text style={{ marginTop: 5, marginBottom: 5 }}>
                        {item.content}
                      </Text>
                      <Comment
                        childrenComment={item.childrenComment}
                        toggleModal={toggleModal}
                      />
                    </View>
                  </>
                );
              } else {
                return (
                  <>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "rgb(180,180,180)",
                        marginTop: 10,
                        padding: 3,
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          height: 50,
                          backgroundColor: "white",
                          flexDirection: "row",
                          marginTop: 5,
                        }}
                      >
                        <Image
                          source={require("../../assets/images/solve.jpg")}
                          resizeMode="cover"
                          style={{ width: 50, height: 50 }}
                        ></Image>
                        <View
                          style={{
                            width: 100,
                            height: 50,
                            flexDirection: "column",
                            justifyContent: "center",
                            marginTop: -8,
                            marginLeft: 5,
                          }}
                        >
                          <Text>{item.publisher}</Text>
                          <Text
                            style={{ fontSize: 10, color: "rgb(100,100,100)" }}
                          >
                            三天前
                          </Text>
                        </View>
                      </View>
                      <Text style={{ marginTop: 5 }}>{item.content}</Text>
                    </View>
                  </>
                );
              }
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
        behavior="position"
      >
        <View
          style={{
            width: MainWidth,
            height: 40,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => toggleModal()}>
            <View
              style={{
                width: MainWidth * 0.6,
                height: 30,
                backgroundColor: "rgb(230,230,230)",
                justifyContent: "center",
                marginLeft: 15,
                borderRadius: 15,
              }}
            >
              <Text style={{ marginLeft: 10 }}>输入评论....</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleModal()}
            style={{
              backgroundColor: "rgba(151,47,151,1)",
              width: 70,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 30,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              评论
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "rgb(240,240,240)",
  },
  justify: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TheoryDescScreen;
