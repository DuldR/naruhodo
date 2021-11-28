// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from '../components/root.jsx'
import ConfigureStore from "../store/store.js"


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root")
    const store = ConfigureStore();

    ReactDOM.render(<Root store={store} />, root)
})