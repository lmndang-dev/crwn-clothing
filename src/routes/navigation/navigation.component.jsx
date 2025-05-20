//Fragment is react features that wrap the elements
import { Fragment } from "react";

//Import outlet feature from react router
//Link container help to navigate to another route
import { Outlet } from "react-router-dom";

//Use selector to get the attribute from redux
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
//Create react element for the logo img
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { selectIsCartOpen } from "../../store/cart/cart.selection";

import { signOutUser } from "../../utils/firebase/firebase.utils";

//Import the navigation styles
//The NavigationContainer is a styled component
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

//Outlet help nested navigation page and keep the navigation bar stay the same
const Navigation = () => {
  //Get the currentUser from the UserContext
  //The UserContext is imported from the user.context file
  //const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        {/* The Link component in react routing behave similar to anchor html element */}
        {/* When user click on logo, direct user back to homepage */}
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          {/* Add shop route to navigation bar */}
          <NavLink to="/shop">SHOP</NavLink>

          {/* If user is logged in, show the sign out button */}
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            // If user is not logged in, show the sign in button
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          {/* Add cart icon to navigation bar */}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      {/* This outlet help navigate the page under the navigation bar */}
      {/* It can load the home page or the shop page etc. */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
