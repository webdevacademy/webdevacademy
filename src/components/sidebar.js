import React, { Fragment } from 'react'
import { SearchWidget } from './widgets';

const Sidebar = () => (
  <aside className="sidebar fright" role="complementary">
    { SearchWidget("Pesquisar") }
	</aside>
)

export default Sidebar