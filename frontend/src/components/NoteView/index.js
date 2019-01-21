import Container from "./container";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  notes: state.note.notes,
  loaded: state.note.loaded
});

export default connect(mapStateToProps)(Container);
