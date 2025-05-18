//Fragment is react features that wrap the elements
import { Fragment, useContext } from "react";

//Import outlet feature from react router
//Link container help to navigate to another route
import { Outlet, Link } from "react-router-dom";

//Create react element for the logo img
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";

import "./navigation.styles.scss";

//Outlet help nested navigation page and keep the navigation bar stay the same
const Navigation = () => {
  //Get the currentUser from the UserContext
  //The UserContext is imported from the user.context file
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        {/* The Link component in react routing behave similar to anchor html element */}
        {/* When user click on logo, direct user back to homepage */}
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          {/* Add shop route to navigation bar */}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {/* Add Sign In route to navigation bar */}
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>

      {/* This outlet help navigate the page under the navigation bar */}
      {/* It can load the home page or the shop page etc. */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
