/**
 * Babel: conversion code refresh - conversao de codigo react para que o browser entenda.
 * Webpack: para cada tipo de arquivo - converter de maneira diferente
 * Loaders: babel-loader, css-loader, image-loader,
 */
import { MDCRipple } from '@material/ripple'
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'))
import React from 'react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs'
import { ImportInfo } from './blocks/ImportInfo'
import { BootstrapComponent } from './blocks/BootstrapComponent'

export const page = () => (
  <>
    <Title />
    <Subtitle />
    <ImportInfo />
    <Description />
    <Primary />
    <ArgsTable story={PRIMARY_STORY} />
    <Stories />
    <BootstrapComponent />
  </>
  var buttons = document.querySelectorAll('.mdc-button, .mdc-fab');
  for (var i = 0, button; button = buttons[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(button);
  }
  
  var nodes = document.querySelectorAll('.mdc-icon-toggle');
  for (var i = 0, node; node = nodes[i]; i++) {
    mdc.iconToggle.MDCIconToggle.attachTo(node);
  }
  
  var checkboxes = document.querySelectorAll('.mdc-checkbox');
  for (var i = 0, checkbox; checkbox = checkboxes[i]; i++) {
    new mdc.checkbox.MDCCheckbox(checkbox);
  }
  
  var radios = document.querySelectorAll('.mdc-radio');
  for (var i = 0, radio; radio = radios[i]; i++) {
    new mdc.radio.MDCRadio(radio);
  }
  
  var interactiveListItems = document.querySelectorAll('.mdc-list-item');
  for (var i = 0, li; li = interactiveListItems[i]; i++) {
    mdc.ripple.MDCRipple.attachTo(li);
    // Prevent link clicks from jumping demo to the top of the page
    li.addEventListener('click', function(evt) {
      evt.preventDefault();
    });
  }
  
)
