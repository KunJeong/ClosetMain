/**
 * @flow
 */

import { connect } from 'react-redux';
import Masonry from '../components/Masonry'
import {
    addToLeft,
    addToRight
} from '../redux/modules/masonry';

function mapStateToProps(state) {
  return {
    masonry: state.masonry
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToLeft: (value, index, save) => dispatch(addToLeft(value, index, save)),
    addToRight: (value, index, save) => dispatch(addToRight(value, index, save))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Masonry);