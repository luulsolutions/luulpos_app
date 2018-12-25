import React from 'react';
import { FlatList, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux';
import ProductActions from '../../Redux/ProductRedux';
import SearchBar from '../../Components/SearchBar';
import GridView from 'react-native-super-grid';
import   LoadingFood   from '../../base_components/LoadingProducts'
// For empty lists
import AlertMessage from '../../Components/AlertMessage';

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/ProductLIstStyle';

class ProductList extends React.PureComponent {
  static onEnter() {

  }

  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  ************************************************************ */
  state = {
    page: 0,
    sort: 'id,asc',
    size: 20,
    loading: true,
    done: false,
    searchTerm: '',
    dataObjects: [],
  }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  ************************************************************ */
  renderRow({ item }) {
    console.log(item);
    return (
      <ImageBackground source={require('../../Images/coffe.jpg')} style={[styles.itemContainer]}>
        <Text style={styles.itemName}>{item.productName}</Text>
        <Text style={styles.itemCode}>{item.price}</Text>
      </ImageBackground>
    );
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  ************************************************************ */
  // Render a header?
  renderHeader = () =>
    <SearchBar onSearch={this.performSearch} searchTerm={this.state.searchTerm} onCancel={this.cancelSearch} />

  // Render a footer?
  // renderFooter = () =>
  //  <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <AlertMessage title="No Products Found" show={!this.props.fetching} />

  // renderSeparator = () =>
  //  <Text style={styles.label}> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => String(index)

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  cancelSearch = () => {
    this.setState({
      searchTerm: '',
    });
    this.fetchProducts();
  }

  performSearch = (query) => {
    if (query === '') {
      this.cancelSearch();
      return;
    }
    this.setState({
      searchTerm: query,
    });
    this.props.performSearch(query);
  }
  fetchProducts = () => {
    this.props.getAllProducts({ page: this.state.page, sort: this.state.sort, size: this.state.size });
  }

  handleLoadMore = () => {
    if (this.state.done || this.props.fetching) {
      return;
    }
    this.setState({
      page: this.state.page + 1,
      loading: true,
    });
    this.fetchProducts();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.products) {
      this.setState({
        done: newProps.products.length < this.state.size,
        dataObjects: this.state.loading ? [...this.state.dataObjects, ...newProps.products] : newProps.products,
        loading: false,
      });
    }
  }

  componentWillMount() {
    this.fetchProducts();
  }

  render() {
    if (fetching) {
      return <LoadingFood />;
    }
    return (
      <View style={styles.container}>
        <GridView
          style={styles.gridView}
          items={this.state.dataObjects}
          renderItem={(item =>
            (<ImageBackground source={{ uri: `data:${item.productImageContentType};base64,${item.productImage}` }} resizeMode="stretch" style={[styles.itemContainer]}>
              <Text style={styles.itemName}>{item.productName}</Text>
              <Text style={styles.itemCode}>${item.price}</Text>
            </ImageBackground>)

            )}
          onEndReached={this.handleLoadMore}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          onEndReached={this.handleLoadMore}
          onEndThreshold={100}
          ListHeaderComponent={this.renderHeader}
          /* ListFooterComponent={this.renderFooter} */
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}

        />

      </View>
    );
  }
}

const mapStateToProps = state => ({
    // ...redux state to props here
  products: state.products.products,
  fetching: state.products.fetchingAll,
  error: state.products.errorAll,
});

const mapDispatchToProps = dispatch => ({
  performSearch: query => dispatch(ProductActions.productSearchRequest(query)),
  getAllProducts: options => dispatch(ProductActions.productAllRequest(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
