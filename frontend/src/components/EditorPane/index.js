import Container from "./container";
import { connect } from "react-redux";
import { actionCreators } from "../../redux/modules/editor";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeInput: payload => dispatch(actionCreators.changeInput(payload))
  };
};

const mapStateToProps = (state, ownProps) => ({
  title: state.editor.title,
  content: state.editor.content
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
