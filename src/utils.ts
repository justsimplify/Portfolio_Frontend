import * as M from "materialize-css"
import * as $ from "jquery";

export function returnTemplateString(header_left: string, header_right: string, body: string = "") {
    let s: string = `<li>\
        <div class="collapsible-header valign-wrapper waves-effect waves-rebeccapurple">\
            <div class="col l4 left-align bold">${header_left}</div>\
            <div class="col l8 right-align italic">${header_right}</div>\
        </div>\
        <div class="collapsible-body">${body}</div>\
    </li>`
    return s
}

export function initCollapsible(elem) {
    var elems = document.querySelectorAll(elem);
    M.Collapsible.init(elems, {
        onOpenStart: function (el) {
            $(el).children(".collapsible-header").css({ "background": "rebeccapurple", "color": "white", "border-radius": "5px 5px 0px 0px" });
            $(el).children(".collapsible-body").css({ "background": "#EEEEEE", "border-radius": "0px 0px 5px 5px" });
        },
        onCloseStart: function (el) {
            $(el).children(".collapsible-header").css({ "background": "white", "color": "black", "border-radius": "0px 0px 0px 0px" });
            $(el).children(".collapsible-body").css({ "background": "white", "border-radius": "0px 0px 0px 0px"  });
        }
    });
}

export function hideProgess(elem, callback) {
    $(elem).hide(200, callback)
}