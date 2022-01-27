import React from 'react';
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
} from 'react-native';
import Markdown from 'react-native-markdown-renderer';
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
const TheoryDescScreen = () => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <Text style={{fontSize:20}}>React性能优化方案</Text>
        <Text>作者:杨磊</Text>
        <Markdown style={styles} mergeStyle={true}>
          {copy}
        </Markdown>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    padding:10
  }
});
export default TheoryDescScreen;
