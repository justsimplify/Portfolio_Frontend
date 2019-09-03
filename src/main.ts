import { AjaxRequestBuilder } from '../lib/routes/ajaxHelper';
import * as $ from "jquery";
import { BasicDetails, Project, Skill, Experience, Education } from './interfaces';
import { returnTemplateString, hideProgess, initCollapsible } from './utils';
import LazyLoad from "vanilla-lazyload";
import HOST from '../lib/routes/hostConfig';

// Skills : 1000
AjaxRequestBuilder("skills").subscribe(ajaxResponse => {
    let result = ajaxResponse.response as Array<Skill>
    result.forEach(element => {
        hideProgess(".skillLoader", function () {
            $(".skillsCards").append(returnTemplateString(element.skillName, element.skillSet.join(", ")));
        });
    })
});

// Projects : 2000
AjaxRequestBuilder("projects").subscribe(ajaxResponse => {
    let result = ajaxResponse.response as Array<Project>
    result.forEach(element => {
        hideProgess(".projectLoader", function () {
            $(".projectCard").append(returnTemplateString(element.projectName, element.techStack.join(", "), element.projectDescription.split("\n").join("<br><br>")));
        });
    });
    initCollapsible('.projectCard')
});

// Experience : 3000
AjaxRequestBuilder("experience").subscribe(ajaxResponse => {
    let result = ajaxResponse.response as Array<Experience>
    result.forEach(element => {
        hideProgess(".expLoader", function () {
            $(".expCard").append(returnTemplateString(element.companyName, `${element.fromDate} - ${element.toDate}`, element.description.join("<br><br>")))
        });
    });
    initCollapsible('.expCard')
});

// Education : 4000
AjaxRequestBuilder("education").subscribe(ajaxResponse => {
    let result = ajaxResponse.response as Array<Education>
    result.forEach(element => {
        hideProgess(".eduLoader", function () {
            let percentOrCgpaText = (element.isCgpa ? "CGPA: " : "Percentage: ") + element.cgpa + (element.isCgpa ? "" : "%")
            $(".educationCards").append(returnTemplateString(element.schoolName, `${percentOrCgpaText}<br>${element.qualification}`))
        });
    });
});

// Basic Details : 5000
AjaxRequestBuilder("basic").subscribe(ajaxResponse => {
    let result = ajaxResponse.response as BasicDetails
    $(".pName").html(`${result.name}`)
    $(".pEmail").text(result.email)
    $(".pContact").text(result.contact)
    $(".pImage").attr({"data-bg": `url(${HOST}/basic/${result.profileImage})`})
    var myLazyLoad = new LazyLoad({
        elements_selector: ".pImage",
        callback_set: function(el)  {
            $(".pImageLoad").hide();
        }
    });
    $(".pImage").css({ 'background-size': 'cover', 'background-position': 'center center' });
    $(".socialLinks").html(`<a href="${result.linkedIn}" target="_blank"><i class="fab fa-linkedin-in" style="color: #0085ff;"></i></a> | <a href="${result.github}" target="_blank"><i class="fab fa-github"></i></a>`)
});