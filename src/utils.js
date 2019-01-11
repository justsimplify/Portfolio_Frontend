"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const M = require("materialize-css");
const $ = require("jquery");
function returnTemplateString(header_left, header_right, body = "") {
    let s = `<li>\
        <div class="collapsible-header valign-wrapper waves-effect waves-rebeccapurple">\
            <div class="col l4 left-align bold">${header_left}</div>\
            <div class="col l8 right-align italic">${header_right}</div>\
        </div>\
        <div class="collapsible-body">${body}</div>\
    </li>`;
    return s;
}
exports.returnTemplateString = returnTemplateString;
function initCollapsible(elem) {
    var elems = document.querySelectorAll(elem);
    M.Collapsible.init(elems, {
        onOpenStart: function (el) {
            $(el).children(".collapsible-header").css({ "background": "rebeccapurple", "color": "white", "border-radius": "5px 5px 0px 0px" });
            $(el).children(".collapsible-body").css({ "background": "#EEEEEE", "border-radius": "0px 0px 5px 5px" });
        },
        onCloseStart: function (el) {
            $(el).children(".collapsible-header").css({ "background": "white", "color": "black", "border-radius": "0px 0px 0px 0px" });
            $(el).children(".collapsible-body").css({ "background": "white", "border-radius": "0px 0px 0px 0px" });
        }
    });
}
exports.initCollapsible = initCollapsible;
function hideProgess(elem, callback) {
    $(elem).hide(200, callback);
}
exports.hideProgess = hideProgess;
//# sourceMappingURL=utils.js.map