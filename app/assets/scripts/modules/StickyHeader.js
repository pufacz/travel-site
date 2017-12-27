import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
   constructor() {
     this.siteHeader = $(".site-header");
     this.headerTriggerElement = $(".large-hero__title");
     this.createHeaderWaypoint();
     this.pageSections = $(".page-section");
     this.headerLink = $(".primary-nav a")
     this.createPageSectionWaypoints();
     this.addSmoothScrolling();
   }

   addSmoothScrolling() {
     this.headerLink.smoothScroll();
   }

   createHeaderWaypoint() {
     var that = this;
     new Waypoint({
       element: this.headerTriggerElement[0], //first always reference to DOM element
       handler: function(direction) {
         if (direction == "down") {
           that.siteHeader.addClass("site-header--dark");
         } else {
           that.siteHeader.removeClass("site-header--dark");
         }

       }
     });
   };

   createPageSectionWaypoints() {
       var that = this;
       this.pageSections.each(function() {
       var currentPageSection = this;
       new Waypoint({
         element: currentPageSection,
         handler: function(direction) {
           if (direction = "down") {
             var matchingHeaderLink = currentPageSection.getAttribute("data-matchink-link");
             that.headerLink.removeClass("is-current-link");
             $(matchingHeaderLink).addClass("is-current-link");
           }
         },
         offset: "18%"
       });
       new Waypoint({
         element: currentPageSection,
         handler: function(direction) {
           if (direction = "up") {
             var matchingHeaderLink = currentPageSection.getAttribute("data-matchink-link");
             that.headerLink.removeClass("is-current-link");
             $(matchingHeaderLink).addClass("is-current-link");
           }
         },
         offset: "-40%"
       });

     });
   }
}

export default StickyHeader;
