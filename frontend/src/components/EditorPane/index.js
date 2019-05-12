import Container from "./container";
import { connect } from "react-redux";
import * as editorActionCreators from "../../redux/actionCreators/editor";
import * as noteActionCreators from "../../redux/actionCreators/note";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initialize: () => dispatch(editorActionCreators.initialize()),
    changeInput: payload => dispatch(editorActionCreators.changeInput(payload)),
    fetchAddNote: () => dispatch(noteActionCreators.fetchAddNote())
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
