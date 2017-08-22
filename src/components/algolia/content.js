import React, { Component } from 'react';
import { connect } from 'react-redux';
import ecommerceActions from '../../redux/ecommerce/actions';
import {
  Hits,
  Pagination,
  SortBy,
  Stats,
  ClearAll
} from 'react-instantsearch/dom';
import Hit from './hit';

const { changeView } = ecommerceActions;

class Content extends Component {
  render() {
    const { view } = this.props;
    return (
      <div className="isoAlgoliaContentWrapper">
        <div className="isoAlgoliaTopBar">
          <Stats />
          <SortBy
            defaultRefinement="default_search"
            items={[
              { value: 'default_search', label: 'Default' },
              { value: 'price_asc', label: 'Lowest Price' },
              { value: 'price_desc', label: 'Highest Price' }
            ]}
          />
          <div className="isoViewChanger">
            <button
              type="button"
              className={
                view === 'gridView' ? 'isoGridView active' : 'isoGridView'
              }
              onClick={() => this.props.changeView('gridView')}
            >
              <i className="ion-grid" />
            </button>
            <button
              type="button"
              className={
                view === 'gridView' ? 'isoListView' : 'isoListView active'
              }
              onClick={() => this.props.changeView('listView')}
            >
              <i className="ion-navicon-round" />
            </button>
          </div>
          <ClearAll />
        </div>
        <Hits hitComponent={Hit} />
        <div className="isoAlgoliaPagination">
          <Pagination showLast />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    view: state.Ecommerce.toJS().view
  };
}
export default connect(mapStateToProps, { changeView })(Content);
