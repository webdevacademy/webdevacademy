import React, { Fragment } from 'react'
import { MenuWidget, SearchWidget, TagCloudWidget } from './widgets';

const Sidebar = (props) => {
  const menus = props.data.frontmatter.menus || false;

  return (
    <aside className="sidebar fright" role="complementary">
      <SearchWidget />
      {menus && menus.map(menu => {
        return <MenuWidget title="Hash Tables" key={menu} id={menu} />
      })}    
      <TagCloudWidget title="Tópicos" />
    </aside>
  )
}

export default Sidebar