import React from 'react';
import { connect } from 'react-redux';
import ProductActions from '../../../Redux/ProductRedux';
import Product from './Products';
import ProductCategory from './ProductCategories';
import PosContext from '../PosContext';

class ProductScreen extends React.PureComponent {
  static contextType = PosContext;
  constructor(props) {
    super(props);
  }

  cancelSearch = () => {
    // this.setState(
    //   {
    //     searchTerm: '',
    //     category: false,
    //   },
    //   () => this.props.performSearch(''),
    // );
  };

  performSearch = (query) => {
    query = query;
    // this.setState({ category: false }, () => {
    //   if (query === '') {
    //     this.cancelSearch();
    //     return;
    //   }
    //   this.setState(
    //     {
    //       searchTerm: query,
    //     },
    //     () => {
    //       this.props.performSearch(query);
    //     },
    //   );
    // });
  };

  componentDidMount() {
    this.props.onRef(this);
  }
  render() {
    return (
      <React.Fragment>
        {this.context.inCategory ? (
          <ProductCategory />
        ) : (
          <Product />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  // ...redux state to props here
  fetching: state.products.fetchingAll,
  error: state.products.errorAll,
});

const mapDispatchToProps = dispatch => ({
  performSearch: query => dispatch(ProductActions.productSearchRequest(query)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductScreen);
