import React, { Fragment } from 'react'
import { SearchWidget, TagCloudWidget } from './widgets';

const Sidebar = () => (
  <aside className="sidebar fright" role="complementary">
    <SearchWidget />
    <TagCloudWidget title="Tópicos" />
	</aside>
)

export default Sidebar