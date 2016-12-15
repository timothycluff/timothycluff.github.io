/**
 * Created by Timmy_Tim_Tim on 12/10/16.
 */
'use strict'

portfolioApp.controller('SkillContentController',
    function SkillContentController($scope) {
        $scope.skillContent = {
            javaTitle: 'JAVA',
            webTitle: 'WEB',
            cTitle: 'C#',
            swiftTitle: 'SWIFT',
            javaDesc: 'I am currently a full stack Java developer at Fishbowl Inventory located in Orem, Utah. In high school I got the opportunity to take AP Computer Science which is were I obtained my knowledge of object oriented programming.',
            webDesc: 'I also do a lot of Html, Css, and AngularJS at Fishbowl. I was introduced to web programming during the summer of 2016 when I had the chance to take a bootcamp to learn the fundamentals of web programming.',
            cDesc: 'I took my very first programming class in C#. The class I took was Intro to Computer Science and I took the class my Junior year of high school. Now I am a freshman at Utah Valley University taking CS 1400 which is in C#.',
            swiftDesc: 'I will sometimes do a little bit of Swift here and there, but not a whole lot. In AP Computer Science my final project was a game that I made in Swift which involved physics, which was interesting to play with.'
        }
    }
);