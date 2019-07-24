import { connect } from 'react-redux';
import Masonry from '../components/Masonry'
import {
    addToLeft,
    addToRight
} from '../redux/modules/masonry';

function mapStateToProps(state) {
  return {
    masonry: state.masonry // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToLeft: (value, index, save) => dispatch(addToLeft(value, index, save)),
    addToRight: (value, index, save) => dispatch(addToRight(value, index, save))
  }; // here we're mapping actions to props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Masonry);