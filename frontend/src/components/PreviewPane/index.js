import Container from "./container";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  title: state.editor.title,
  content: state.editor.content
});

export default connect(mapStateToProps)(Container);
