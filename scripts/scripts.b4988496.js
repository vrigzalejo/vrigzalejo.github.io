"use strict";angular.module("vrigzonlinegithubioApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","customSmoothScroll"]).config(["$routeProvider",function(a){a.when("/",{title:"Works",templateUrl:"views/works.html",controller:"WorkCtrl"}).when("/about",{title:"About",templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]).run(["$location","$rootScope",function(a,b){b.$on("$routeChangeSuccess",function(a,c){b.title=c.$$route.title})}]),$(document).ready(function(){function a(){var a=["#"+Math.random().toString(16).slice(2,8)];$("body").animate({backgroundColor:a[f]},5e3)}function b(a){return a.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}function c(){for(var a=0,b=arguments.length;b>a;a++){var c=arguments[a],d=$(c);if(d.scrollTop()>0)return c;d.scrollTop(1);var e=d.scrollTop()>0;if(d.scrollTop(0),e)return c}return[]}var d="animated swing",e="animated bounceInRight",f=0,g=5e3;setInterval(function(){a(),f++,1==f&&(f=0)},g),$("html").niceScroll({horizrailenabled:!1,touchbehavior:!0}),$(".small-logo").css({visibility:"hidden"}),$("a").hover(function(){$(this).addClass(d)},function(){$(this).removeClass(d)}),$(".works").show().addClass(e),setTimeout(function(){$(".about").show().addClass(e)},500),setTimeout(function(){$(".blog").show().addClass(e)},1e3);var h=b(location.pathname),i=c("html","body");$("a[href*=#]").each(function(){var a=b(this.pathname)||h;if(h===a&&(location.hostname===this.hostname||!this.hostname)&&this.hash.replace(/#/,"")){var c=$(this.hash),d=this.hash;if(d){var e=c.offset().top;$(this).click(function(a){a.preventDefault(),$(i).animate({scrollTop:e},400,function(){location.hash=d})})}}})}),$(window).scroll(function(){var a=$(".navbar").height(),b="62,195,246",c=$(".small-logo").height(),d=$(".big-logo").height(),e=0,f=c/d,g=$(window).scrollTop()*f,h=a-g;h>a&&(h=a),e>h&&(h=e),0>h&&(h=0),$(".small-logo-container ").css({"padding-top":h});var i=g/c;i>1&&(i=1),0>i&&(i=0);var j="rgba("+b+","+i+")";$(".navbar").css({"background-color":j});var k=.4*i;g>0?($(".navbar").css({"box-shadow":"0 2px 3px rgba(0,0,0,"+k+")",top:"0"}),$(".small-logo").css({visibility:"visible"}),$(".header").css({visibility:"hidden"})):($(".navbar").css({"box-shadow":"none","background-color":"transparent",top:"2em"}),$(".small-logo").css({visibility:"hidden"}),$(".header").css({visibility:"visible"}));var l=1.5*$(window).scrollTop(),m=$(window).height(),n=l/m;n=1-n,$(".arrow-wrap").css("opacity",n)}),angular.module("vrigzonlinegithubioApp").controller("WorkCtrl",["$scope","$location","$anchorScroll","CustomSmoothScroll",function(a,b,c,d){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.goToPortfolio=function(a){b.hash("portfolio"),d.scrollTo(a)};var e=function(a){f.length==a&&(a=0),$(".work-messages").html(f[a]).fadeIn(500).delay(1e3).fadeOut(500,function(){e(a+1)})},f=["Welcome!","To my portfolio site","I'm ready to innovate","For you..."];$(".work-messages").hide(),e(0)}]),angular.module("vrigzonlinegithubioApp").controller("AboutCtrl",["$scope",function(){}]),angular.module("vrigzonlinegithubioApp").controller("IndexCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("customSmoothScroll",[]).service("CustomSmoothScroll",["$document","$window",function(a,b){function c(a,b){return a.pageYOffset?a.pageYOffset:b.documentElement&&b.documentElement.scrollTop?b.documentElement.scrollTop:b.body.scrollTop?b.body.scrollTop:0}function d(a,b){for(var c=b.offsetTop,d=b;d.offsetParent&&d.offsetParent!=a.body;)d=d.offsetParent,c+=d.offsetTop;return c}var e=a[0],f=b;this.scrollDown=function(a,b,c,d){for(var e=0,f=Math.round(d/25),g=a+f,h=a;b>h;h+=f)setTimeout("window.scrollTo(0, "+g+")",e*c),g+=f,g>b&&(g=b),e++},this.scrollUp=function(a,b,c,d){for(var e=0,f=Math.round(d/25),g=a-f,h=a;h>b;h-=f)setTimeout("window.scrollTo(0, "+g+")",e*c),g-=f,b>g&&(g=b),e++},this.scrollToTop=function(a){scrollTo(0,a)},this.scrollTo=function(a,b){var g=e.getElementById(a);if(g){var h=c(f,e),i=d(e,g),j=i>h?i-h:h-i;if(100>j)this.scrollToTop(i);else{var k=Math.round(j);b=b||(k>20?20:k),i>h?this.scrollDown(h,i,b,j):this.scrollUp(h,i,b,j)}}}}]);