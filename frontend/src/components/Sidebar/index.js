import Container from "./container";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  notes: state.note.notes,
  showError: state.note.showError,
  error: state.note.error
});

// withRouter가 없으니 SidebarNote도 영향을 받더라.
export default withRouter(connect(mapStateToProps)(Container));
