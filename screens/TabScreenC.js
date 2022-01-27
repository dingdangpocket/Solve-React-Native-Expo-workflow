/**
 * Rich Editor Example
 * @deprecated Please refer to example.hooks.js
 * @author wxik
 * @since 2019-06-24 14:52
 */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Dimensions,
  Appearance,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import {
  actions,
  getContentCSS,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";
import { XMath } from "@wxik/core";
import { InsertLinkModal } from "./utils/insertLink";
import { EmojiView } from "./utils/emoji";

const imageList = [
  //   "https://img.lesmao.vip/k/h256/R/MeiTu/1293.jpg",
  //   "https://pbs.twimg.com/profile_images/1242293847918391296/6uUsvfJZ.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png",
];
const initHTML = ``;

const phizIcon = require("../assets/images/phiz.png");
const htmlIcon = require("../assets/images/html.png");

function createContentStyle(theme) {
  // Can be selected for more situations (cssText or contentCSSText).
  const contentStyle = {
    backgroundColor: "#2e3847",
    color: "#fff",
    caretColor: "red", // initial valid// initial valid
    placeholderColor: "gray",
    // cssText: '#editor {background-color: #f3f3f3}', // initial valid
    contentCSSText: "font-size: 16px; min-height: 200px;", // initial valid
  };
  if (theme === "light") {
    contentStyle.backgroundColor = "#fff";
    contentStyle.color = "#000033";
    contentStyle.placeholderColor = "#a9a9a9";
  }
  return contentStyle;
}

const ScreenC = (props) => {
  let { theme: initTheme = Appearance.getColorScheme(), navigation } = props;
  let richText = useRef();
  let linkModal = useRef();
  let scrollRef = useRef();
  // save on html
  let contentRef = useRef(initHTML);

  let [theme, setTheme] = useState(initTheme);
  let [emojiVisible, setEmojiVisible] = useState(false);
  let [disabled, setDisable] = useState(false);
  let contentStyle = useMemo(() => createContentStyle(theme), [theme]);

  // on save to preview
  let handleSave = useCallback(() => {
    navigation.push("preview", {
      html: contentRef.current,
      css: getContentCSS(),
    });
  }, []);

  let handleHome = useCallback(() => {
    navigation.push("index");
  }, []);

  // editor change data
  let handleChange = useCallback((html) => {
    // save html to content ref;
    contentRef.current = html;
  }, []);

  // theme change to editor color
  let themeChange = useCallback(({ colorScheme }) => {
    setTheme(colorScheme);
  }, []);

  let onTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  let onDisabled = useCallback(() => {
    setDisable(!disabled);
  }, [disabled]);

  let editorInitializedCallback = useCallback(() => {
    richText.current.registerToolbar(function (items) {
      // console.log('Toolbar click, selected items (insert end callback):', items);
    });
  }, []);

  let onKeyHide = useCallback(() => {}, []);

  let onKeyShow = useCallback(() => {
    TextInput.State.currentlyFocusedInput() && setEmojiVisible(false);
  }, []);

  // editor height change
  let handleHeightChange = useCallback((height) => {
    console.log("editor height change:", height);
  }, []);

  let handleInsertEmoji = useCallback((emoji) => {
    richText.current?.insertText(emoji);
    richText.current?.blurContentEditor();
  }, []);

  let handleEmoji = useCallback(() => {
    Keyboard.dismiss();
    richText.current?.blurContentEditor();
    setEmojiVisible(!emojiVisible);
  }, [emojiVisible]);

  let handleInsertVideo = useCallback(() => {
    richText.current?.insertVideo(
      "https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",
      "width: 50%;"
    );
  }, []);

  let handleInsertHTML = useCallback(() => {
    // this.richText.current?.insertHTML(
    //     `<span onclick="alert(2)" style="color: blue; padding:0 10px;" contenteditable="false">HTML</span>`,
    // );
    richText.current?.insertHTML(
      `<div style="padding:10px 0;" contentEditable="false">
                 <iframe  width="100%" height="220"  src="https://www.youtube.com/embed/6FrNXgXlCGA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>`
    );
  }, []);

  let onPressAddImage = useCallback(() => {
    // insert URL
    richText.current?.insertImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png",
      "background: gray;"
    );
    // insert base64
    // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
  }, []);

  let onInsertLink = useCallback(() => {
    // this.richText.current?.insertLink('Google', 'http://google.com');
    linkModal.current?.setModalVisible(true);
  }, []);

  let onLinkDone = useCallback(({ title, url }) => {
    richText.current?.insertLink(title, url);
  }, []);

  let handleFontSize = useCallback(() => {
    // 1=  10px, 2 = 13px, 3 = 16px, 4 = 18px, 5 = 24px, 6 = 32px, 7 = 48px;
    let size = [1, 2, 3, 4, 5, 6, 7];
    richText.current?.setFontSize(size[XMath.random(size.length - 1)]);
  }, []);

  let handleForeColor = useCallback(() => {
    richText.current?.setForeColor("blue");
  }, []);

  let handleHiliteColor = useCallback(() => {
    richText.current?.setHiliteColor("red");
  }, []);

  let handlePaste = useCallback((data) => {
    console.log("Paste:", data);
  }, []);

  // @deprecated Android keyCode 229
  let handleKeyUp = useCallback((data) => {
    // console.log('KeyUp:', data);
  }, []);

  // @deprecated Android keyCode 229
  let handleKeyDown = useCallback((data) => {
    // console.log('KeyDown:', data);
  }, []);

  let handleInput = useCallback(({ data, inputType }) => {
    // console.log(inputType, data)
  }, []);

  let handleMessage = useCallback(({ type, id, data }) => {
    let index = 0;
    switch (type) {
      case "ImgClick":
        richText.current?.commandDOM(
          `$('#${id}').src="${imageList[XMath.random(imageList.length - 1)]}"`
        );
        break;
      case "TitleClick":
        const color = ["red", "blue", "gray", "yellow", "coral"];

        // command: $ = document.querySelector
        richText.current?.commandDOM(
          `$('#${id}').style.color='${color[XMath.random(color.length - 1)]}'`
        );
        break;
      case "SwitchImage":
        break;
    }
    console.log("onMessage", type, id, data);
  }, []);

  let handleFocus = useCallback(() => {
    console.log("editor focus");
  }, []);

  let handleBlur = useCallback(() => {
    console.log("editor blur");
  }, []);

  let handleCursorPosition = useCallback((scrollY) => {
    // Positioning scroll bar
    scrollRef.current.scrollTo({ y: scrollY - 30, animated: true });
  }, []);

  let { backgroundColor, color, placeholderColor } = contentStyle;
  let dark = theme === "dark";

  const [value, setValue] = useState("");
  return (
    <>
      <InsertLinkModal
        placeholderColor={placeholderColor}
        color={color}
        backgroundColor={backgroundColor}
        onDone={onLinkDone}
        ref={linkModal}
      />
      <ScrollView
        style={[styles.scroll]}
        keyboardDismissMode={"none"}
        ref={scrollRef}
        nestedScrollEnabled={true}
        scrollEventThrottle={20}
      >
        <View style={styles.questionHead}>
          <TextInput
            style={styles.input}
            placeholder="请输入问题标题"
            onChangeText={(value) => {
              setValue(value);
            }}
            editable={true} //可编辑状态
          ></TextInput>
          <TouchableOpacity activeOpacity={0.8} style={styles.subBtn}>
            <Text style={styles.textDefault}>提交问题</Text>
          </TouchableOpacity>
        </View>

        <RichToolbar
          style={[styles.richBar]}
          flatContainerStyle={styles.flatStyle}
          editor={richText}
          disabled={disabled}
          selectedIconTint={"#2095F2"}
          disabledIconTint={"#bfbfbf"}
          onPressAddImage={onPressAddImage}
          onInsertLink={onInsertLink}
        />
        <RichEditor
          // initialFocus={true}
          disabled={disabled}
          editorStyle={contentStyle} 
          ref={richText}
          style={styles.rich}
          useContainer={true}
          initialHeight={400}
          enterKeyHint={"done"}
          containerStyle={{ borderRadius: 24 }}
          placeholder={"添加问题的详细描述以便于快速获得解决方案"}
          initialContentHTML={initHTML}
          editorInitializedCallback={editorInitializedCallback}
          onChange={handleChange}
          onPaste={handlePaste}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          onMessage={handleMessage}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCursorPosition={handleCursorPosition}
          pasteAsPlainText={true}
          onChange={(descriptionText) => {
            console.log("descriptionText:", descriptionText);
          }}
        />
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <RichToolbar
          style={[styles.richBar, dark && styles.richBarDark]}
          flatContainerStyle={styles.flatStyle}
          editor={richText}
          disabled={disabled}
          selectedIconTint={"#2095F2"}
          disabledIconTint={"#bfbfbf"}
          onPressAddImage={onPressAddImage}
          onInsertLink={onInsertLink}
          iconSize={20}
          actions={[
            // actions.insertVideo,
            actions.insertImage,
            actions.insertOrderedList,
            actions.code,
            actions.heading1,
            "fontSize",
          ]} 
          iconMap={{
            insertEmoji: phizIcon,
            [actions.foreColor]: ({ tintColor }) => (
              <Text style={[styles.tib, { color: "blue" }]}>FC</Text>
            ),
            [actions.hiliteColor]: ({ tintColor }) => (
              <Text
                style={[
                  styles.tib,
                  { color: tintColor, backgroundColor: "red" },
                ]}
              >
                BC
              </Text>
            ),
            [actions.heading1]: ({ tintColor }) => (
              <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
            ),
            [actions.heading4]: ({ tintColor }) => (
              <Text style={[styles.tib, { color: tintColor }]}>H4</Text>
            ),
            insertHTML: htmlIcon,
          }}
          insertEmoji={handleEmoji}
          insertHTML={handleInsertHTML}
          insertVideo={handleInsertVideo}
          fontSize={handleFontSize}
          foreColor={handleForeColor}
          hiliteColor={handleHiliteColor}
        />
        {emojiVisible && <EmojiView onSelect={handleInsertEmoji} />}
      </KeyboardAvoidingView>
    </>
  );
};
let MainHeight = Dimensions.get("window").height;
let MainWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  rich: {
    minHeight: 300,
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#e3e3e3",
  },
  topVi: {
    backgroundColor: "#fafafa",
  },
  richBar: {
    borderColor: "#efefef",
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  richBarDark: {
    backgroundColor: "#191d20",
    borderColor: "#696969",
  },
  scroll: {
    backgroundColor: "#ffffff",
  },
  scrollDark: {
    backgroundColor: "#2e3847",
  },
  darkBack: {
    backgroundColor: "#191d20",
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#e8e8e8",
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
  },
  tib: {
    textAlign: "center",
    color: "#515156",
  },

  flatStyle: {
    paddingHorizontal: 12,
  },
  questionHead: {
    height: 60,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    // backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
  },
  input: {
    height: 60,
    width: MainWidth * 0.8,
    borderBottomColor: "black",
    // backgroundColor:"blue"
  },
  subBtn: {
    width: MainWidth * 0.2,
    backgroundColor: "rgba(151,47,151, 0.7)",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textDefault: {
    color: "white",
    fontSize: 13,
  },
});
export default ScreenC;
