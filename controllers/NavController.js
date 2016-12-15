/**
 * Created by Timmy_Tim_Tim on 12/8/16.
 */
'use strict'

portfolioApp.controller('NavController',
    function NavController($scope) {
        $scope.navbar = {
            txtHome: "HOME",
            txtAbout: "ABOUT",
            txtSkills: "SKILLS",
            txtEducation: "EDUCATION",
            txtContact: "CONTACT"
        }
    }
);