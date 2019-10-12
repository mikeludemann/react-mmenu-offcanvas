import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'mmenu-js/dist/mmenu'
import 'mmenu-js/dist/mmenu.css';

// Core
import Mmenu from "mmenu-js/dist/core/oncanvas/mmenu.oncanvas";

// Core Add-Ons
import offcanvas from "mmenu-js/dist/core/offcanvas/mmenu.offcanvas";
import screenReader from "mmenu-js/dist/core/screenreader/mmenu.screenreader";
import scrollBugFix from "mmenu-js/dist/core/scrollbugfix/mmenu.scrollbugfix";

// Extensions
/*
import borderstyle from "mmenu-js/dist/extensions/borderstyle/";
import effects from "mmenu-js/dist/extensions/effects";
import fullscreen from "mmenu-js/dist/extensions/fullscreen";
import listview from "mmenu-js/dist/extensions/listview";
import multiline from "mmenu-js/dist/extensions/multiline";
import pagedim from "mmenu-js/dist/extensions/pagedim";
import popup from "mmenu-js/dist/extensions/popup";
import positioning from "mmenu-js/dist/extensions/positioning";
import shadows from "mmenu-js/dist/extensions/shadows";
import themes from "mmenu-js/dist/extensions/themes";
import tileview from "mmenu-js/dist/extensions/tileview";
*/

// Wrappers
import angular from "mmenu-js/dist/wrappers/angular/mmenu.angular";
import bootstrap from "mmenu-js/dist/wrappers/bootstrap/mmenu.bootstrap";
import magento from "mmenu-js/dist/wrappers/magento/mmenu.magento";
import olark from "mmenu-js/dist/wrappers/olark/mmenu.olark";
import turbolinks from "mmenu-js/dist/wrappers/turbolinks/mmenu.turbolinks";
import wordpress from "mmenu-js/dist/wrappers/wordpress/mmenu.wordpress";

// Add-Ons
import autoheight from "mmenu-js/dist/addons/autoheight/mmenu.autoheight";
import backbutton from "mmenu-js/dist/addons/backbutton/mmenu.backbutton";
import columns from "mmenu-js/dist/addons/columns/mmenu.columns";
import counters from "mmenu-js/dist/addons/counters/mmenu.counters";
import dividers from "mmenu-js/dist/addons/dividers/mmenu.dividers";
import drag from "mmenu-js/dist/addons/drag/mmenu.drag";
import dropdown from "mmenu-js/dist/addons/dropdown/mmenu.dropdown";
import fixedelements from "mmenu-js/dist/addons/fixedelements/mmenu.fixedelements";
import iconbar from "mmenu-js/dist/addons/iconbar/mmenu.iconbar";
import iconpanels from "mmenu-js/dist/addons/iconpanels/mmenu.iconpanels";
import keyboardnavigation from "mmenu-js/dist/addons/keyboardnavigation/mmenu.keyboardnavigation";
import lazysubmenus from "mmenu-js/dist/addons/lazysubmenus/mmenu.lazysubmenus";
import navbars from "mmenu-js/dist/addons/navbars/mmenu.navbars";
import pagescroll from "mmenu-js/dist/addons/pagescroll/mmenu.pagescroll";
import searchfield from "mmenu-js/dist/addons/searchfield/mmenu.searchfield";
import sectionindexer from "mmenu-js/dist/addons/sectionindexer/mmenu.sectionindexer";
import setselected from "mmenu-js/dist/addons/setselected/mmenu.setselected";
import sidebar from "mmenu-js/dist/addons/sidebar/mmenu.sidebar";
import toggles from "mmenu-js/dist/addons/toggles/mmenu.toggles";

class Navi extends Component {

	constructor(props) {
		super(props)
		this.state = {}
  }

  componentDidMount(){

    Mmenu.addons = {
      // Core
      offcanvas,
      screenReader,
      scrollBugFix,
      // Extensions
      /*
      borderstyle,
      effects,
      fullscreen,
      listview,
      multiline,
      pagedim,
      popup,
      positioning,
      shadows,
      themes,
      tileview,
      */
      // Wrappers
      angular,
      bootstrap,
      magento,
      olark,
      turbolinks,
      wordpress,
      // Add-Ons
      autoheight,
      backbutton,
      columns,
      counters,
      dividers,
      drag,
      dropdown,
      fixedelements,
      iconbar,
      iconpanels,
      keyboardnavigation,
      lazysubmenus,
      navbars,
      pagescroll,
      searchfield,
      sectionindexer,
      setselected,
      sidebar,
      toggles
    };

    window.Mmenu = Mmenu;

    document.addEventListener(
      "DOMContentLoaded", () => {
        new Mmenu( "#" + this.props.id, this.props.options );
      }
    );

  }

  render(){
    return(
      <nav id={this.props.id}>
        {this.props.children}
      </nav>
    );
  }
  
}

Navi.propTypes = {
	id: PropTypes.string.isRequired,
	options: PropTypes.object.isRequired,
	children: PropTypes.element
}

// #####################################

class NaviList extends Component {

  render(){
    return(
      <ul className={this.props.class}>
        {this.props.children}
      </ul>
    );
  }
  
}

NaviList.propTypes = {
	class: PropTypes.string.isRequired,
	children: PropTypes.element
}

// #####################################

class NaviListItem extends Component {

  render(){
    return(
      <li className={this.props.class}>
        {this.props.children}
      </li>
    );
  }
  
}

NaviListItem.propTypes = {
	class: PropTypes.string.isRequired,
	children: PropTypes.element
}

// #####################################

class NaviListText extends Component {

  render(){
    return(
      <span className={this.props.class}>
        {this.props.children}
      </span>
    );
  }
  
}

NaviListText.propTypes = {
	class: PropTypes.string.isRequired,
	children: PropTypes.element
}

// #####################################

class NaviListLink extends Component {

  render(){
    return(
      <a href={this.props.url}>
        {this.props.children}
      </a>
    );
  }
  
}

NaviListLink.propTypes = {
	url: PropTypes.string.isRequired,
	children: PropTypes.element
}

// #####################################

export {
  Navi,
  NaviList,
  NaviListItem,
  NaviListText,
  NaviListLink
}