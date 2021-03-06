import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { Image, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; //引入
import TabScreenA from "./screens/TabScreenA"; //引入
import TabScreenB from "./screens/TabScreenB"; //引入
import TabScreenC from "./screens/TabScreenC"; //引入
import ScreenG from "./screens/ScreenG"; //引入
import ScreenE from "./screens/ScreenE"; //引入
import TheoryDescScreen from "./screens/desc/TheoryDescScreen"; //引入
import ErrorDescScreen from "./screens/desc/ErrorDescScreen"; //引入
import ExampleDescScreen from "./screens/desc/ExampleDescScreen"; //引入
import QuestionDescScreen from "./screens/desc/QuestionDescScreen"; //引入
import InfoScreen from "./screens/info/InfoScreen"; //引入
import FollowerList from "./screens/followerList/FollowerList"; //引入
import MyFollowerList from "./screens/myfollowerList/MyfollowerList"; //引入
import UserHomePage from "./screens/userHomePage/UserHomePage"; //引入
import Search from "./screens/search/Search"; //引入
import Anwser from "./screens/anwser/Anwser"; //引入
import noteScreen from "./screens/note/NoteScreen"; //引入
import Code from "./screens/code/Code"; //引入
import { createStackNavigator } from "@react-navigation/stack"; //引入
import { Provider } from "react-redux";
import { Store } from "./redux/store";
const Stack = createStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: "#972F97", inactiveTintColor: "gray" }}
      screenOptions={({ route }) => ({
        activeTintColor: "#972F97",
        inactiveTintColor: "gray",
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          let icon;
          if (route.name === "首页") {
            icon = focused ? (
              <Image
                source={require("./assets/images/key1.png")}
                style={{ width: 29, height: 25 }}
              />
            ) : (
              <Image
                source={require("./assets/images/key0.png")}
                style={{ width: 27.5, height: 25 }}
              />
            );
          } else if (route.name === "我的") {
            icon = focused ? (
              <Image
                source={require("./assets/images/my1.png")}
                style={{ width: 31, height: 25 }}
              />
            ) : (
              <Image
                source={require("./assets/images/my0.png")}
                style={{ width: 29, height: 25 }}
              />
            );
          } else if (route.name == " ") {
            icon = focused ? (
              <Image
                source={require("./assets/images/addfill2.png")}
                style={styles.add}
              />
            ) : (
              <Image
                source={require("./assets/images/addfill2.png")}
                style={styles.add}
              />
            );
          }
          return icon;
        },
      })}
    >
      <Tab.Screen name="首页" component={TabScreenA} />
      <Tab.Screen name=" " component={TabScreenC} />
      <Tab.Screen name="我的" component={TabScreenB} />
    </Tab.Navigator>
  );
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.container}>
        <Provider store={Store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeTabs}
                options={{ header: () => null }}
              />
              <Stack.Screen name="Screen_G" component={ScreenG} />
              <Stack.Screen name="Screen_E" component={ScreenE} />
              <Stack.Screen
                name="TheoryDescScreen"
                component={TheoryDescScreen}
                options={{
                  title: '详情',
                  headerTitleStyle:{fontSize:15}
                }}
              />
              <Stack.Screen
                name="ErrorDescScreen"
                component={ErrorDescScreen}
                options={{
                  title: '详情',
                  headerTitleStyle:{fontSize:15}
                }}
              />
              <Stack.Screen
                name="ExampleDescScreen"
                component={ExampleDescScreen}
                options={{
                  title: '详情',
                  headerTitleStyle:{fontSize:15}
                }}
              />
              <Stack.Screen
                name="QuestionDescScreen"
                component={QuestionDescScreen}
                options={{
                  title: '详情',
                  headerTitleStyle:{fontSize:15}
                }}
              />
               <Stack.Screen
                name="InfoScreen"
                component={InfoScreen}
                options={{
                  title: '修改信息',
                  headerTitleStyle:{fontSize:15}
                }}
              />
               <Stack.Screen
                name="FollowerList"
                component={FollowerList}
                options={{
                  title: '关注者',
                  headerTitleStyle:{fontSize:15}
                }}
              />
                <Stack.Screen
                name="MyFollowerList"
                component={MyFollowerList}
                options={{
                  title: '我的关注',
                  headerTitleStyle:{fontSize:15}
                }}
              />
               <Stack.Screen
                name="UserHomePage"
                component={UserHomePage}
                options={{
                  title: '详情',
                  headerTitleStyle:{fontSize:15}
                }}
              />
                <Stack.Screen
                name="Search"
                component={Search}
                options={{
                  title:'搜索',
                  headerTitleStyle:{fontSize:15}
                }}
              />
              <Stack.Screen
                name="Anwser"
                component={Anwser}
                options={{
                  title:'编辑答案',
                  // headerStyle:{backgroundColor:"red"},
                  headerTitleStyle:{fontSize:15}
                }}
              />
                <Stack.Screen
                name="noteScreen"
                component={noteScreen}
                options={{
                  title:'笔记详情',
                  // headerStyle:{backgroundColor:"red"},
                  headerTitleStyle:{fontSize:15}
                }}
              />
                <Stack.Screen
                name="Code"
                component={Code}
                options={{
                  title:'代码',
                  // headerStyle:{backgroundColor:"red"},
                  headerTitleStyle:{fontSize:15}
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
  add: {
    width: 50,
    height: 50,
  },
});

// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {Image} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native'; //引入
// import TabScreenA from './screens/TabScreenA'; //引入
// import TabScreenB from './screens/TabScreenB'; //引入
// import TabScreenC from './screens/TabScreenC'; //引入
// import ScreenG from './screens/ScreenG'; //引入
// import ScreenE from './screens/ScreenE'; //引入
// import TheoryDescScreen from './screens/desc/TheoryDescScreen'; //引入
// import ErrorDescScreen from './screens/desc/ErrorDescScreen'; //引入
// import ExampleDescScreen from './screens/desc/ExampleDescScreen'; //引入
// import QuestionDescScreen from './screens/desc/QuestionDescScreen'; //引入
// import {createStackNavigator} from '@react-navigation/stack'; //引入
// const Stack = createStackNavigator();
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

// function HomeTabs() {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{activeTintColor: '#972F97', inactiveTintColor: 'gray'}}
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, size, color}) => {
//           let icon;
//           if (route.name === '首页') {
//             icon = focused ? (
//               <Image
//                 source={require('./assets/images/key1.png')}
//                 style={{width: 29, height: 25}}
//               />
//             ) : (
//               <Image
//                 source={require('./assets/images/key0.png')}
//                 style={{width: 27.5, height: 25}}
//               />
//             );
//           } else if (route.name === '我的') {
//             icon = focused ? (
//               <Image
//                 source={require('./assets/images/my1.png')}
//                 style={{width: 31, height: 25}}
//               />
//             ) : (
//               <Image
//                 source={require('./assets/images/my0.png')}
//                 style={{width: 29, height: 25}}
//               />
//             );
//           }else if (route.name ==" ") {
//             icon = focused ? (
//               <Image
//                 source={require('./assets/images/addfill2.png')}
//                 style={styles.add}
//               />
//             ) : (
//               <Image
//                 source={require('./assets/images/addfill2.png')}
//                 style={styles.add}
//               />
//             );
//           }
//           return icon;
//         },
//       })}>
//       <Tab.Screen name="首页" component={TabScreenA} />
//       <Tab.Screen name=" " component={TabScreenC} />
//       <Tab.Screen name="我的" component={TabScreenB} />
//     </Tab.Navigator>

//   );
// }
// import {Provider} from 'react-redux';
// import {Store} from './redux/store';
// const App = () => {
//   return (
// <Provider store={Store}>
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeTabs}
//         options={{header: () => null}}
//       />
//       <Stack.Screen name="Screen_G" component={ScreenG} />
//       <Stack.Screen name="Screen_E" component={ScreenE} />
//       <Stack.Screen name="TheoryDescScreen" component={TheoryDescScreen} />
//       <Stack.Screen name="ErrorDescScreen" component={ErrorDescScreen} />
//       <Stack.Screen name="ExampleDescScreen" component={ExampleDescScreen} />
//       <Stack.Screen name="QuestionDescScreen" component={QuestionDescScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
// </Provider>
//   );
// };
// const styles = StyleSheet.create({
//   add:{
//     width: 50,
//     height: 50,
//   }
// });
// export default App;
