import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".work"), "60%"); /* write which element we're selecting (by using jquery class selector), and what offset they should use */
// new RevealOnScroll($(".contact-reveal"), "70%"); taking out the contact area reveal on scroll. 
var stickyHeader = new StickyHeader();