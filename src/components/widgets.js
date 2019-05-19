import React, { Fragment } from 'react'

export const TextWidget = (title, content) => (
  <div className="widget">
    <div className="widget-content clear">
      <h3 className="widget-title">{ title }</h3>
      <div className="textwidget">
        { content }
      </div>
    </div>
  </div>
)

export const SearchWidget = (title) => (
  <div id="search-2" className="widget widget_search">
    <div className="widget-content clear">
      <h3 className="widget-title">{ title }</h3>
      <form role="search" method="get" className="search-form" action="">
				<label>
					<span className="screen-reader-text">Pesquisar por:</span>
					<input type="search" className="search-field" name="s" />
				</label>
				<input type="submit" className="search-submit" value="Pesquisar" />
			</form>
    </div>
  </div>
)