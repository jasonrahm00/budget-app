personalWebsite.controller('portfolioController', ['$scope', function ($scope) {
  $scope.mainHeader = "Jason Rahm's Portfolio";
  $scope.oneAtATime = true;
  $scope.portfolio = [
    {
      isOpen: true,
      "section": "Front-End Web Development",
      "description": "Since the spring of 2014, I have been teaching myself front-end web development languages and techniques, and I have received guidance from seasoned web developers on what languages and frameworks to target. I've also gained real-world experience in development during my contract at Janus Capital Group.",
      "examples": [
        {
          "link": "//www.janus.com/jcg-insti/strategies/janus-global-diversified-risk-premia",
          "anchor": "Select Janus Institutional Pages",
          "explanation": "The Institutional arm of Janus wanted some of their pages completely redesigned and a few new funds added. Unfortunately, the Institutional site is on an older technology stack and CMS and is difficult to manage; new designs are next to impossible without a significant time commitment from the developer team. So, the digital marketing manager looked to me to solve this problem. Using a lot of jQuery and cowboy-style coding (but very minimal inline styling), I was able to provide the pages the Institutional business was looking for while maintaining the look and feel of the actual Institutional site. The above linked page along with the 'Investment Insights', 'Defined Contribution' and 'About Us' pages in the main navigation bar utilize my custom styles while the other buttons take you to the standard Institutional site."
        },
        {
          "link": "//www.janus.com/advisor/campaign/fixed-income-offerings",
          "anchor": "Fixed Income for All Markets",
          "explanation": "I built this page for Janus Capital Group at the beginning of 2015. I was given an Axure file design and was able to lay the page out and implement all of the functionality they desired. Since I did not have access to upload custom styles for the bubbles, I had to use jQuery and a little in-line styling to achieve the colors and hover functionality. The small bubbles at the bottom of the page also feature jQuery tooltips that open on hover. The jQuery UI widgets were available within the Janus CMS, so I could build those pieces without in-line styling."
        },
        {
          "link": "//www.janus.com/retail/insights/wealth-strategies/essential-estate-planning-documents",
          "anchor": "Essential Estate Planning Documents",
          "explanation": "One of the tasks I was given while Janus re-platformed their Retail website was to add jQuery togglers to several articles. The widget was available within the CMS, so I was able to customize the properties to achieve the desired functionality. Due to the nature of the Ingeniux Content Management System, I had to create several common components (<div> tags) in the system so they can be reused wherever togglers are required."
        },
        {
          "link": "//www.janus.com/retail/planning/retirement/converting-your-traditional-ira",
          "anchor": "Converting Your Traditional IRA",
          "explanation": "Another project I took on at Janus was to create common components and an easy method to assign links to the right rail zone on all article pages. I achieved this using taxonomy and special component schemas called 'Annotations'. Rather than hard-coding right-rail links on the necessary pages, there is now a repository of links with associated taxonomy categories from which to choose. Given the opportunity, there are further improvements I would make to the right-rail creation and link assignment method."
        },
        {
          "link": "//www.janus.com/retail/planning/investing-basics/investor-education",
          "anchor": "Investor Education",
          "explanation": "The Java language and Grails framework are used by Janus to dynamically generate data tables throughout the site, primarily on the fund pages. I was able to repurpose the code for one of those tables to create this page. Since Janus content has an expiration date, whenver one of the documents on this table expires, the row will disappear until the content is refreshed and the expiration date changed."
        }
      ]
    },
    {
      "section": "Long-Form Articles",
      "description": "This is the area in which people have the most trouble when writing online. They write as they would for print - long paragraphs of text, maybe a picture or two. Always remember that people skim when reading online, so it is important to format your articles accordingly. Keep them short and to the point, utilize bold headers and bulleted lists or otherwise format the article in a manner that is easily digested by the reader.",
      "examples": [
        {
          "link": "//www.foodservicewarehouse.com/education/chefs-corner/why-going-green-in-the-restaurant-still-matters/c28272.aspx",
          "anchor": "Why Going Green in the Restaurant Still Matters",
          "explanation": "This is an article I wrote after the Great Recession. It explains why “going green” is still an important endeavor, even though the concept has fallen out of mainstream consciousness."
        },
        {
          "link": "//www.foodservicewarehouse.com/education/top-10-rules-of-break-room-etiquette/c27759.aspx",
          "anchor": "Top 10 Rules of Break Room Etiquette",
          "explanation": "This article explains how to properly utilize the employee break room. The tips were sourced from personal experience and blog and forum rants about horrible break room incidents."
        },
        {
          "link": "//www.thertastore.com/rta-myths/rta-myths",
          "anchor": "RTA Cabinet Myths",
          "explanation": "This is a freelance article I wrote for an eCommerce cabinet company. The article clarifies common misconceptions about ready-to-assemble kitchen cabinets."
        }
      ]
    },
    {
      "section": "Blog Posts",
      "description": "On the ladder of complexity and purpose, blogs are squarely between social media and long-form articles. Businesses use blogs to provide relevant information about the company and industry, and since blogs are less formal than articles, businesses can show their personality in the posts. Ideally, each blog post is no longer than 600 words; shorter is better, and each post should be about a single topic or tell a short story. I say “ideally” and “should” because a lot of individuals use blogs as journals and write paragraph upon paragraph. It is still important to follow proper web-writing techniques when writing blogs.",
      "examples": [
        {
          "link": "//www.blog.officefurniturespot.com/office-ergonomics-exercises-that-reduce-office-fatigue/",
          "anchor": "Office Ergonomics: Exercises that Reduce Office Fatigue",
          "explanation": "As an athlete who spends most of his day in front of a computer, I am keenly aware of how sitting at a desk strains the body. I used this awareness and some online research to write a blog series about office ergonomics for an eCommerce furniture company called InteriorMark. This is one of the posts."
        },
        {
          "link": "//www.blog.fireplacespot.com/product-highlight-gel-fireplaces/",
          "anchor": "Product Highlight: Gel Fireplaces",
          "explanation": "One way for eCommerce companies to utilize their blogs is to periodically showcase unique product categories. This is one such blog post that I wrote about gel fireplaces."
        }
      ]
    },
    {
      "section": "Webpage Content",
      "description": "I think writing content for landing pages is one of, if not the most difficult tasks faced by a writer. Each page has a purpose, and the content on that page needs to support that purpose. Depending on the site, you may only have a handful of words (or characters) to explain what the page is about. It can be challenging, but it’s a challenge I have faced on several occasions. Listed below are some websites for which I wrote all of the webpage content.",
      "examples": [
        {
          "link": "//k2wellness.com/",
          "anchor": "K2 Wellness",
          "explanation": "K2 Wellness is a sole-proprietorship that offers BioMeridian Testing, massage therapy and personal training options for the Denver area. I provided the landing page copy and general marketing guidelines for the owner of this company."
        },
        {
          "link": "//denverautoalliance.com/",
          "anchor": "Denver Auto Alliance",
          "explanation": "As a one-off freelance project, I wrote all of the landing page content for this local automotive repair service."
        }
      ]
    }
  ];
}]);