import Container from "./container";
import { connect } from "react-redux";
import { actionCreators } from "../../redux/modules/note";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getNotes: () => dispatch(actionCreators.getNotes())
  };
};

const mapStateToProps = (state, ownProps) => ({
  notes: state.note.notes,
  loaded: state.note.loaded
});

// React-router와 Redux 함께 쓰려면 withRouter로 묶어야 한다.
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container)
);
