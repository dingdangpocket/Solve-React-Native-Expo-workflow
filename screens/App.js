// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {Image} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native'; //引入
// import TabScreenA from './android/app/src/pages/TabScreenA'; //引入
// import TabScreenB from './android/app/src/pages/TabScreenB'; //引入
// import TabScreenC from './android/app/src/pages/TabScreenC'; //引入
// import ScreenG from './android/app/src/pages/ScreenG'; //引入
// import ScreenE from './android/app/src/pages/ScreenE'; //引入
// import TheoryDescScreen from './android/app/src/pages/desc/TheoryDescScreen'; //引入
// import ErrorDescScreen from './android/app/src/pages/desc/ErrorDescScreen'; //引入
// import ExampleDescScreen from './android/app/src/pages/desc/ExampleDescScreen'; //引入
// import QuestionDescScreen from './android/app/src/pages/desc/QuestionDescScreen'; //引入
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
//                 source={require('./android/app/src/static/key1.png')}
//                 style={{width: 29, height: 25}}
//               />
//             ) : (
//               <Image
//                 source={require('./android/app/src/static/key0.png')}
//                 style={{width: 27.5, height: 25}}
//               />
//             );
//           } else if (route.name === '我的') {
//             icon = focused ? (
//               <Image
//                 source={require('./android/app/src/static/my1.png')}
//                 style={{width: 31, height: 25}}
//               />
//             ) : (
//               <Image
//                 source={require('./android/app/src/static/my0.png')}
//                 style={{width: 29, height: 25}}
//               />
//             );
//           }else if (route.name ==" ") {
//             icon = focused ? (
//               <Image
//                 source={require('./android/app/src/static/addfill2.png')}
//                 style={styles.add}
//               />
//             ) : (
//               <Image
//                 source={require('./android/app/src/static/addfill2.png')}
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
// import {Store} from './android/app/src/redux/store';
// const App = () => {
//   return (
//     <Provider store={Store}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Home"
//             component={HomeTabs}
//             options={{header: () => null}}
//           />
//           <Stack.Screen name="Screen_G" component={ScreenG} />
//           <Stack.Screen name="Screen_E" component={ScreenE} />
//           <Stack.Screen name="TheoryDescScreen" component={TheoryDescScreen} />
//           <Stack.Screen name="ErrorDescScreen" component={ErrorDescScreen} />
//           <Stack.Screen name="ExampleDescScreen" component={ExampleDescScreen} />
//           <Stack.Screen name="QuestionDescScreen" component={QuestionDescScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// };
// const styles = StyleSheet.create({
//   add:{
//     width: 50,
//     height: 50,
//   }
// });
// export default App;
