import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { get } from 'lodash';

import AnimeView from '../../components/Anime';
import { AnimeDetails } from '../../grahql/quries.js';

class Anime extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  render() {
    const { AnimeDetails, navigation } = this.props;
    return (
      <AnimeView
        AnimeDetails={AnimeDetails}
        navigation={navigation} />
    )
  }
}


export default graphql(AnimeDetails, {
  name: 'AnimeDetails',
  options: (props) => ({
    variables: {
      id: get(props, 'navigation.state.params.id', 0),
    },
  })
})(Anime);