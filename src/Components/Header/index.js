import { connect } from "react-redux";
import "./style.scss";

const Header = ({ pageTitle }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="app-title">{pageTitle}</div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({ pageTitle: state.common.pageTitle });

export default connect(mapStateToProps, null)(Header);
