import Container from "./container";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  notes: state.note.notes,
  showError: state.note.showError
});

export default connect(mapStateToProps)(Container);
