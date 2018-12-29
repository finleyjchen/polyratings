import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    {authUser.roles.includes(ROLES.ADMIN) && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <Fragment>
  <ul>
  
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
  <nav class="pa3 pa4-ns">
  <a class="link dim black b f1 tc db mb3 mb4-ns" href="#" title="Home">PolyRatings</a>
  <div class="tc pb3">
    <a class="link dim gray f6 f5-ns dib mr3" href="#" title="About">Get Verified</a>
    <a class="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
  </div>
</nav>
  </Fragment>
);

export default Navigation;
