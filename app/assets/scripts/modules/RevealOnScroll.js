import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = $(".work");
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        this.itemsToReveal.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem, /* this is the DOM element to watch for */
                handler: function() { /* this is the thing you want to happen when the element is scrolled to. This code runs 3 times, once for each item in the collection. */
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: "80%" 
            });
        });
    }
}

export default RevealOnScroll;