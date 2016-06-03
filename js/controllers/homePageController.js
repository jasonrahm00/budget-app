personalWebsite.controller('homePageController', ['$scope', function ($scope) {
  $scope.mainHeader = "About Jason Rahm";
  $scope.introduction = [
    "My name is Jason Rahm and this is my custom-built website. I am a skilled online writer and content manager, aspiring front-end web developer and seasoned start-up professional. On this site you'll find a portfolio of my recent work as well as an updated(ish) copy of my resume. I am looking for an interesting and challenging opportunity to utilize my existing content skillset while expanding my knowledge and experience in web development. I like to stay busy when I'm on the job, so if there are no tasks currently on my plate, I'll find something to do.",
    "When I'm not working or improving this website, you may see me out running around Denver or on the mountain trails. I also play online video games in my free time; World of Warcraft is my current poison of choice. When I need a break from the computer screen, I read or write."
];
  $scope.headshot = "images/jason-rahm.jpg";
}]);