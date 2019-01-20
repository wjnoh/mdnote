import Container from "./container";
import { connect } from "react-redux";
import { actionCreators as EditorAction } from "../../redux/modules/editor";
import { actionCreators as NoteAction } from "../../redux/modules/note";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initialize: () => dispatch(EditorAction.initialize()),
    changeInput: payload => dispatch(EditorAction.changeInput(payload)),
    addNote: payload => dispatch(NoteAction.addNote(payload))
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
