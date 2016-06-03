personalWebsite.controller('resumeController', ['$scope', function ($scope) {
  $scope.name = "Jason Rahm";
  $scope.mainHeader = "Jason Rahm's Resume";
  $scope.objective = "Junior/Intermediate Front-End Developer and Content Manager with an extensive background in content creation, website development and content management for a variety of eBusinesses and startups. Uniquely qualified to assist in the development and redevelopment of first-rate websites and web-based content. Self-driven lifelong learner who is always looking for ways to improve the experience for both internal and external website users.";
  $scope.education = {
    "completed": 2004,
    "school": "Purdue University",
    "degree": "Bachelors",
    "major": "English and Psychology"
  };
  $scope.qualifications = [
    "Proven record of quick turnaround on all development tasks and an enthusiasm for learning new technologies and tackling challenging projects.",
    "Critical thinker who excels at identifying process-improvement opportunities that positively affect the development and management of web-based content.",
    "Excellent written and oral communication skills with a history of successful team coordination, consensus building and project management.",
    "Direct experience with e-business startup tactics and growth stratagems, including the execution of strategic development projects."
  ];
  $scope.skills = {
    "Content Management Systems": ["Ingeniux", "NetSuite", "WordPress", "Bigcommerce", "Additional Custom Platforms"],
    "Web Development": ["AngularJS", "HTML", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Grails", "PHP", "Python"],
    "Project Management": ["Confluence", "Jira", "Trello"],
    "Authoring": ["Microsoft Office Suite", "AP Style"],
    "Marketing": ["MailChimp"]
  };
  $scope.jobs = [
    {
      "title": "Content Manager",
      "employer": "SavvyBoater.com",
      "start": {
        "month": "December",
        "year": 2015
      },
      "end": {
        "month": "January",
        "year": 2016
      },
      "description": "As a freelance, part-time content manager, performed SEO and code audits on various categories and sections of the site. Used audit insights to make content, code and UX updates to improve the overall user experience, drive more traffic and improve conversion rates for this eCommerce site."
    },
    {
      "title": "Front-End Web Developer",
      "employer": "Janus Capital Group",
      "start": {
        "month": "September",
        "year": 2014
      },
      "end": {
        "month": "October",
        "year": 2015
      },
      "description": "During this one-year contract, acted as Build Lead and coordinated with the Digital Marketing and Developer teams to assure new sites and pages were built as cleanly as possible.",
      "duties": [
        "Re-factored existing Grails code or coded from scratch to dynamically generate new filter tables and dynamic webpage content.",
        "Created custom Grails, JavaScript and jQuery functions and methods to achieve page functionality that was not available.",
        "Worked with the QA team to generate test cases for new code and functionality.",
        "Brainstormed features and functionality for a custom CMS which the company will build to replace Ingeniux in the near future.",
        "Built web pages based on provided wireframes and content and provided design enhancement ideas to improve the user experience."
      ]
    },
    {
      "title": "Content Manager/Copywriter",
      "employer": "Self-Employed",
      "start": {
        "month": "May",
        "year": 2011
      },
      "end": {
        "month": "September",
        "year": 2014
      },
      "description": "Responsible for content creation, maintenance and development tasks for a variety of clients across multiple industries.",
      "duties": [
        "Edited and rewrote HTML code for 2100 educational articles in six weeks as the company (PTontheNet) migrated to a custom content management system. Also provided feedback on how to further improve articles using SEO best practices and proper web-writing techniques.",
        "Edited HTML and JavaScript files to update existing content and add new content to various websites for Atrful Messaging, a boutique web-design firm.",
        "Wrote blog posts and uploaded and managed content in WordPress for Accelerate Health, a Massage/Chiropractic business.",
        "Wrote web content for a Massage Therapy and Nutrition company (K2 Wellness). Also provided marketing suggestions and site functionality ideas.",
        "Created blog posts, wrote copy and edited photos for 50 - 100 products a week for InteriorMark, an eCommerce furniture company."
      ]
    },
    {
      "title": "Content Developer",
      "employer": "egoBoom.com",
      "start": {
        "month": "June",
        "year": 2012
      },
      "end": {
        "month": "March",
        "year": 2014
      },
      "description": "Responsible for all aspects of company content creation, including product content, site content, marketing copy and brand identity for this social polling startup company. egoBoom won the Tech Cocktail award for Denver’s Hottest Start-Up in August 2013.",
      "duties": [
        "Researched and crafted hundreds of complex psychological assessment questions, balancing “humor and science”, for egoBoom’s core polling product.",
        "Performed comprehensive market research and produced reports detailing competitive outlook, product opportunities and potential threats.",
        "Engaged in weekly roundtable meetings with management to discuss all aspects of product development and deployment, offering critical insight where applicable."
      ]
    },
    {
      "title": "Olympic Trials Hopeful",
      "employer": "FoodServiceWarehouse.com",
      "start": {
        "month": "January",
        "year": 2010
      },
      "end": {
        "month": "May",
        "year": 2011
      },
      "description": "Received sponsorship from FoodServiceWarehouse.com to train full-time in an effort to qualify for the 2012 Olympic Marathon Trials. Training involved running 80 - 100 miles a week and cross-training five times a week. Set a personal record of 2:46 at the 2010 Cincinnati Flying Pig Marathon and was targeting a sub-2:35 at Chicago of the same year, but a calf muscle tear two months prior to the race effectively ended professional running career."
    },
    {
      "title": "Copywriter",
      "employer": "FoodServiceWarehouse.com",
      "start": {
        "month": "January",
        "year": 2007
      },
      "end": {
        "month": "January",
        "year": 2010
      },
      "description": "Researched and wrote hundreds of SEO-rich articles for the foodservice education center of this eCommerce startup. The Education Center drove 30% of all traffic to the site and is, to this day, the most comprehensive online resource for foodservice education.",
      "duties": [
        "Within three months of launching the education center, the Health and Safety section ranked in the Top 10 of Google organic results for the targeted term 'restaurant health and safety'.",
        "Performed keyword research, analyzed site and article traffic and used the data to direct the development of new content.",
        "Uploaded content into the custom CMS and edited the HTML to improve readability and user experience.",
        "Participated in a weekly roundtable with writing team to copyedit new articles, provide overall project feedback and brainstorm additional article ideas."
      ]
    }
  ];
}]);