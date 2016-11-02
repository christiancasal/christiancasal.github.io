import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#CFD8DC",
        "backgroundImage": "url('./images/cement.png')"
    },
    "cc-navbar": {
        "backgroundColor": "#607d8b",
        "width": "100%",
        "borderBottom": "#333 solid 1px"
    },
    "title": {
        "fontSize": "20pt",
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "textAlign": "center"
    },
    "dropdown-font-color": {
        "color": "#ab47bc"
    },
    "headerItems": {
        "display": "block",
        "fontSize": 2
    },
    "nav-table": {
        "display": "flex"
    },
    "play-time": {
        "textAlign": "center",
        "background": "black",
        "height": 350
    },
    "parallax-container": {
        "height": 500
    },
    "aboutHeader": {
        "marginLeft": 40
    },
    "projectHeader": {
        "marginRight": 40
    },
    "contactHeader": {
        "marginRight": 40
    },
    "cc-footer": {
        "backgroundColor": "#607d8b",
        "marginTop": -6,
        "borderTop": "#333 solid 1px"
    },
    "cb-imgs": {
        "maxWidth": "100%",
        "borderRadius": 25,
        "height": "auto"
    },
    "nyt-imgs": {
        "width": "100%"
    },
    "liri-imgs": {
        "width": "100%"
    },
    "video-fit": {
        "marginLeft": 10,
        "marginRight": 10
    },
    "mc-paragraph": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30
    },
    "clash": {
        "paddingRight": 40,
        "paddingBottom": 20
    },
    "nyt": {
        "paddingRight": 40,
        "paddingBottom": 20
    },
    "liri": {
        "paddingRight": 40,
        "paddingBottom": 20
    },
    "entry": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "project-title": {
        "fontSize": 24
    },
    "project-link": {
        "marginLeft": 10
    },
    "titleIcons": {
        "marginRight": 0,
        "marginTop": 0
    },
    "list-div": {
        "paddingLeft": 30
    },
    "linkIcons": {
        "width": "25%",
        "opacity": 0.5,
        "maxWidth": 35,
        "minWidth": 35,
        "WebkitTransition": "all 0.5s ease",
        "MozTransition": "all 0.5s ease",
        "OTransition": "all 0.5s ease"
    },
    "footerIcons": {
        "marginRight": 10,
        "marginTop": 10
    },
    "contactModal": {
        "borderTop": "#333 solid 1px"
    },
    "modalContact": {},
    "modalDesign": {
        "backgroundColor": "#607d8b"
    },
    "linkIcons:hover": {
        "opacity": 1,
        "WebkitBoxShadow": "0px 0px 0px rgba(255,255,255,0.8)",
        "MozBoxShadow": "0px 0px 0px rgba(255,255,255,0.8)",
        "boxShadow": "0px 0px 0px rgba(255,255,255,0.8)"
    },
    "dark-primary-color": {
        "background": "#455A64"
    },
    "default-primary-color": {
        "background": "#607D8B"
    },
    "light-primary-color": {
        "background": "#CFD8DC"
    },
    "text-primary-color": {
        "color": "#FFFFFF"
    },
    "accent-color": {
        "background": "#E040FB"
    },
    "primary-text-color": {
        "color": "#212121"
    },
    "secondary-text-color": {
        "color": "#727272"
    },
    "divider-color": {
        "borderColor": "#B6B6B6"
    }
});