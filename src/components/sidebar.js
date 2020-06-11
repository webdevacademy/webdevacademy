import React, { Fragment } from 'react'
import { MenuWidget, SearchWidget, TagCloudWidget } from './widgets';

const Sidebar = (props) => {
  const tags = props.data || false;

  return (
    <aside className="sidebar fright" role="complementary">
      <SearchWidget />
      {tags && tags.map(tag => {
        return <MenuWidget key={tag.slug} id={tag.slug} />
      })}    
      <TagCloudWidget title="Tópicos" />
    </aside>
  )
}

export default Sidebar