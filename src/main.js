"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ajaxHelper_1 = require("../lib/routes/ajaxHelper");
const $ = require("jquery");
const utils_1 = require("./utils");
const vanilla_lazyload_1 = require("vanilla-lazyload");
const hostConfig_1 = require("../lib/routes/hostConfig");
// Skills : 1000
ajaxHelper_1.AjaxRequestBuilder("skills").subscribe(ajaxResponse => {
    let result = ajaxResponse.response;
    result.forEach(element => {
        utils_1.hideProgess(".skillLoader", function () {
            $(".skillsCards").append(utils_1.returnTemplateString(element.skillName, element.skillSet.join(", ")));
        });
    });
});
// Projects : 2000
ajaxHelper_1.AjaxRequestBuilder("projects").subscribe(ajaxResponse => {
    let result = ajaxResponse.response;
    result.forEach(element => {
        utils_1.hideProgess(".projectLoader", function () {
            $(".projectCard").append(utils_1.returnTemplateString(element.projectName, element.techStack.join(", "), element.projectDescription));
        });
    });
    utils_1.initCollapsible('.projectCard');
});
// Experience : 3000
ajaxHelper_1.AjaxRequestBuilder("experience").subscribe(ajaxResponse => {
    let result = ajaxResponse.response;
    result.forEach(element => {
        utils_1.hideProgess(".expLoader", function () {
            $(".expCard").append(utils_1.returnTemplateString(element.companyName, `${element.fromDate} - ${element.toDate}`, element.description.join("<br>")));
        });
    });
    utils_1.initCollapsible('.expCard');
});
// Education : 4000
ajaxHelper_1.AjaxRequestBuilder("education").subscribe(ajaxResponse => {
    let result = ajaxResponse.response;
    result.forEach(element => {
        utils_1.hideProgess(".eduLoader", function () {
            let percentOrCgpaText = (element.isCgpa ? "CGPA: " : "Percentage: ") + element.cgpa + (element.isCgpa ? "" : "%");
            $(".educationCards").append(utils_1.returnTemplateString(element.schoolName, `${percentOrCgpaText}<br>${element.qualification}`));
        });
    });
});
// Basic Details : 5000
ajaxHelper_1.AjaxRequestBuilder("basic").subscribe(ajaxResponse => {
    let result = ajaxResponse.response;
    $(".pName").html(`${result.name}`);
    $(".pEmail").text(result.email);
    $(".pContact").text(result.contact);
    $(".pImage").attr({ "data-bg": `url(${hostConfig_1.default}/basic/${result.profileImage})` });
    var myLazyLoad = new vanilla_lazyload_1.default({
        elements_selector: ".pImage",
        callback_set: function (el) {
            $(".pImageLoad").hide();
        }
    });
    $(".pImage").css({ 'background-size': 'cover', 'background-position': 'center center' });
});
//# sourceMappingURL=main.js.map