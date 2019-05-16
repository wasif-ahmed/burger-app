import React from 'react';
// import Aux from '../../hoc/Aux';

const Layout = (props) => (
  // <Aux>
    <div>
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main>
    {props.children}
  </main>
   {/* </Aux>  */}
  </div>
);

export default Layout;