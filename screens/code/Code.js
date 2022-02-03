import React from 'react';
import {View, StyleSheet} from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { ghcolors} from 'react-syntax-highlighter/styles/prism' // 7.0.1

const data = `import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import copy from'copy-to-clipboard';
import atomOneDark from 'react-syntax-highlighter/dist/styles/atom-one-dark';
const redButton = buttonStyle('rgb(252, 100, 95)');
const yellowButton = buttonStyle('rgb(253, 191, 65)');
const greenButton = buttonStyle('rgb(54, 206, 76)');

export default class CodeWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minimized: props.minimized || false, showMinus: false, copyHovered: false };
  }

  onMinimize = () => {
    if (this.props.onMinimize) {
      this.props.onMinimize();
    } else if (this.props.minimized === undefined) {
      this.setState({ minimized: true });
    }
  }

  onMaximize = () => {
    if (this.props.onMaximize) {
      this.props.onMaximize();
    } else if (this.props.minimized === undefined) {
      this.setState({ minimized: false });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.minimized !== undefined && (nextProps.minimized !== this.state.minimized)) {
      this.setState({ minimized: nextProps.minimized });
    }
  }
`;

const code = () => {
  return (
    <View>
        <SyntaxHighlighter
          style={ghcolors}
          customStyle={{padding: 0, margin: 0 }}
          language='javascript'
          fontSize={12}
          highlighter="prism"
        >
          {data}
        </SyntaxHighlighter>
    </View>
  );
}

const styles = StyleSheet.create({})

export default code;
