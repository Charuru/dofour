import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const { getCurrentWebContents, Menu, MenuItem } = require ('electron').remote;
//
let webContents = getCurrentWebContents ();
//
let rightClickPosition;
//
const contextMenu = new Menu ();
const menuItem = new MenuItem
(
    {
        label: 'Inspect Element',
        click: () =>
        {
            webContents.inspectElement (rightClickPosition.x, rightClickPosition.y);
        }
    }
);
contextMenu.append (menuItem);
//
webContents.on
(
    'context-menu',
    (event, params) =>
    {
        rightClickPosition = { x: params.x, y: params.y };
        contextMenu.popup ();
    }
);
