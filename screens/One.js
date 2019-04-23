import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import gerArticleList from '../store/actions/articles';
import { connect } from 'react-redux';

class OneScreen extends Component {
  render() {
    return (
      <View>
        <Text>screen1</Text>
        <Button title="Get Articles" onPress={this.props.getArticleList} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({ getArticleList: __ => dispatch(gerArticleList()) });

export default connect(
  null,
  mapDispatchToProps
)(OneScreen);
