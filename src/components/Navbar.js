/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../css/base.scss';

const Navbar = () => {
  return (
    <header class="header">
      <div class="header-content responsive-wrapper">
        <div class="header-logo">
          <a href={`#`}>
            <div>
              <img src="https://assets.codepen.io/285131/untitled-ui-icon.svg" />
            </div>
            <img src="https://assets.codepen.io/285131/untitled-ui.svg" />
          </a>
        </div>
        <div class="header-navigation">
          <nav class="header-navigation-links">
            <a href="#"> Home </a>
            <a href="#"> Dashboard </a>
            <a href="#"> Projects </a>
            <a href="#"> Tasks </a>
            <a href="#"> Reporting </a>
            <a href="#"> Users </a>
          </nav>
          <div class="header-navigation-actions">
            <a href="#" class="button">
              <i class="ph-lightning-bold"></i>
              <span>Upgrade now</span>
            </a>
            <a href="#" class="icon-button">
              <i class="ph-gear-bold"></i>
            </a>
            <a href="#" class="icon-button">
              <i class="ph-bell-bold"></i>
            </a>
            <a href="#" class="avatar">
              <img src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg" alt="" />
            </a>
          </div>
        </div>
        <a href="#" class="button">
          <i class="ph-list-bold"></i>
          <span>Menu</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
