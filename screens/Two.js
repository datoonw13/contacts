import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class TwoScreen extends Component {
  render() {
    const articles = this.props.articles.map(article => (
      <View key={article.id} style={{ marginTop: 20, marginBottom: 20 }}>
        <Text>{article.body}</Text>
      </View>
    ));
    return (
      <View>
        <ScrollView>{articles}</ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({ articles: state.articles.articles });

export default connect(mapStateToProps)(TwoScreen);
