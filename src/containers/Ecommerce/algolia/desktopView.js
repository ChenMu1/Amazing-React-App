import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch/dom';
import { Footer, Sidebar, Content } from '../../../components/algolia';
import EmptyComponent from '../../../components/emptyComponent.js';
import { AlgoliaSearchConfig } from '../../../config';
import { setUrl, getInitData } from '../../../helpers/urlSync';
import './instantSearch.css';

export default class extends Component {
  state = {
    searchState: getInitData(),
  };
  setVoice = query => {
    const searchState = {
      ...this.state.searchState,
      page: '1',
      query,
    };
    this.setState({ searchState });
    setUrl(searchState);
  };
  render() {
    const searchInfo = {
      ...AlgoliaSearchConfig,
      indexName: 'default_search',
      searchState: this.state.searchState,
      urlSync: true,
      onSearchStateChange: searchState => {
        this.setState({ searchState });
        setUrl(searchState);
      },
    };
    return (
      <div className="isoAlgoliaSearchPage">
        {AlgoliaSearchConfig.appId
          ? <InstantSearch {...searchInfo}>
              <div className="isoAlgoliaMainWrapper">
                <Sidebar setVoice={this.setVoice} />
                <Content />
              </div>
              <Footer />
            </InstantSearch>
          : <EmptyComponent value="Please include algolia appId" />}
      </div>
    );
  }
}
