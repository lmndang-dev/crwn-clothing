//Fragment is react features that wrap the elements
import { Fragment } from "react/jsx-runtime";

//Import outlet feature from react router
//Link container help to navigate to another route
import { Outlet, Link } from "react-router-dom";

//Outlet help nested navigation page and keep the navigation bar stay the same
const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                {/* The Link component in react routing behave similar to anchor html element */}
                {/* When user click on logo, direct user back to homepage */}
                <Link className="logo-container" to="/">
                    <div>Logo</div>
                </Link>
                
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        Shop
                    </Link>
                </div>
            </div>

            {/* This outlet help navigate the page under the navigation bar */}
            {/* It can load the home page or the shop page etc. */}
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;