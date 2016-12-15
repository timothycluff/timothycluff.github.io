/**
 * Created by Timmy_Tim_Tim on 12/8/16.
 */
'use script'

portfolioApp.controller('AboutController',
    function AboutController($scope) {
        $scope.aboutMe = {
            title: "ABOUT ME",
            txtSectionOne: "I am an 18-year-old college student currently working as a software developer at Fishbowl Inventories.",
            txtPartTwo: "I am currently attending Utah Valley University and working on a Bachelors in Computer Science.",
            txtSectionTwo: "I have been programming for about two years and learned from classes I took in school as self-teaching myself in my free time.",
            txtQuote: "\"When you are a carpenter making a beautiful chest of drawers, you are not going to use a piece of plywood on the back, even though it faces the wall and nobody will ever see it. You will know it is there, so you are going to use a beautiful piece of wood on the back. For you to sleep well at night, the aesthetic, the quality, has to be carried all the way through.\"",
            txtAuthor: "- Steve Jobs"
        }
    }
);