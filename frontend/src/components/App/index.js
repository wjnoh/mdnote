import Container from "./container";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as noteActionCreators from "../../redux/actionCreators/note";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNotes: () => dispatch(noteActionCreators.fetchNotes())
  };
};

// React-router와 Redux 함께 쓰려면 withRouter로 묶어야 한다.
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Container)
);
