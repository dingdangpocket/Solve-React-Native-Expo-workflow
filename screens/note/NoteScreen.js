import React, { useState,useMemo } from "react";
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

const copy = `
### useState
\`\`\` js
const [student,setStudent] = useState({stuName:"李毅",age:20})
const changeStudent = ()=>{
    setStudent({...student,stuName:"李凯"})
}
\`\`\`

###  useEffect
\`\`\` js
import React,{useEffect} from 'react'

useEffect(()=>{
    console.log("空数组：componentDidMount");
},[])
//(1)模拟componentDidMount


useEffect(()=>{
    console.log("无数组：componentDidUpdate");
})
//(2)模拟componentDidUpdate;

useEffect(()=>{
    console.log("数组[student.name]:componentDidUpdate"+student.age);
},[student.userName])
//(3)传递一个数组并监控这个值,变化时执行;

useEffect(()=>{
    console.log("数组[]:componentWillonMount");
    let timmer = setInterval(()=>{
        console.log(1);
    },1000)
    // 只有组件被销毁时才会执行这个return;
    return ()=>{
        console.log("定时器清除");
        clearInterval(timmer)
    }
},[])
//(4)模拟组件销毁执行;
\`\`\`
### useMemo
\`\`\` js
const [firstName,setFirstName] = useState("李海")
const [lastName,setLastName] = useState("李欣")
const fullName = useMemo(()=>{
    return firstName + lastName
    //返回的结果;
},[firstName,lastName])
   //需要计算的属性;
\`\`\`
`;

let MainHeight = Dimensions.get("window").height;
let MainWidth = Dimensions.get("window").width;
const noteScreen = ({ navigation }) => {

  const [firstName, setFirstName] = useState("李海");
  const [lastName, setLastName] = useState("李欣");
  const fullName = useMemo(() => {
    return firstName + lastName; //返回的结果;
  }, [firstName, lastName]); //需要计算的属性;
  
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.justify}>
          <Text style={{ fontSize: 20 }}>React.js笔记</Text>
          <Markdown mergeStyle={true}>{copy}</Markdown>
        </View>
      </ScrollView>
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
export default noteScreen;

// import React from 'react';
// import {View, StyleSheet,Dimensions,Text} from 'react-native';
// import {WebView} from 'react-native-webview';
// let MainHeight = Dimensions.get('window').height;
// let MainWidth = Dimensions.get('window').width;
// const ExampleDescScreen = () => {
//   return (

//       <View style={{flex: 1, alignItems: 'flex-end'}}>
//         <WebView
//           androidHardwareAccelerationDisabled
//           source={{uri:'https://www.baidu.com/'}}
//           javaScriptEnabled={true}
//           domStorageEnabled={true}
//           startInLoadingState={true}
//           startInLoadingState={true}
//           scalesPageToFit={true}
//           style={{
//             width:MainWidth,
//             height:MainHeight,
//           }}
//         />
//       </View>
//   );
// };
// const styles = StyleSheet.create({});
// export default ExampleDescScreen;
