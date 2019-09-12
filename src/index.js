import 'jquery';
import _ from 'lodash';

import './assets/base.css';
import './assets/style.scss';
import tpl from './js/template';
import entry from './js/entry';





const root = document.createElement("div");

//img.setAttribute("src",icon);
//root.appendChild(img);
root.className = 'autoForm';
root.innerHTML = tpl.wrap;

$("body").append(root);

entry();




