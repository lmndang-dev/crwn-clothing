//Fragment is react features that wrap the elements
import { Fragment, useContext } from "react";

//Import outlet feature from react router
//Link container help to navigate to another route
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
//Create react element for the logo img
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

//Outlet help nested navigation page and keep the navigation bar stay the same
const Navigation = () => {
  //Get the currentUser from the UserContext
  //The UserContext is imported from the user.context file
  const { currentUser } = useContext(UserContext);

  const { isCartOpen } = useContext(CartContext);

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

          {/* If user is logged in, show the sign out button */}
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            // If user is not logged in, show the sign in button
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          {/* Add cart icon to navigation bar */}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      {/* This outlet help navigate the page under the navigation bar */}
      {/* It can load the home page or the shop page etc. */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
