"use strict";function esc(a){return a.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")}angular.module("vrigzonlinegithubioApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","myPortfolio","duScroll","infinite-scroll","directives"]).value("duScrollDuration",3e3).value("duScrollOffset",20).config(["$routeProvider",function(a){a.when("/",{title:"Works",templateUrl:"views/works.html",controller:"WorkCtrl"}).when("/about",{title:"About",templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]).run(["$location","$rootScope",function(a,b){b.$on("$routeChangeSuccess",function(a,c){b.title=c.$$route.title})}]),$(document).ready(function(){function a(){var a=["#"+Math.random().toString(16).slice(2,8)];$("body").animate({backgroundColor:a[e]},45e3)}$.stellar({horizontalScrolling:!1,verticalOffset:40});var b="animated swing",c="animated bounceInRight",d="animated tada",e=0,f=5e3;setInterval(function(){a(),e++,1==e&&(e=0)},f),$(".animated-hover1").hover(function(){$(this).addClass(b)},function(){$(this).removeClass(b)}),$(".works").show().addClass(c),setTimeout(function(){$(".about").show().addClass(c)},500),setTimeout(function(){$(".blog").show().addClass(c)},1e3),$(".scroll-top-wrapper").hover(function(){$(this).addClass(d)},function(){$(this).removeClass(d)})});var scrollT=0;$(window).scroll(function(){var a=$(this).scrollTop();a>scrollT?$(".navbar-fixed-top").addClass("fixed").removeClass("default"):$(".navbar-fixed-top").addClass("default").removeClass("fixed"),scrollT=a,$(document).scrollTop()>10?($(".navbar").addClass("shrink navbar-colorized").removeClass("navbar-transparent"),$(".small-logo").addClass("small-logo-sm").removeClass("small-logo-big")):($(".navbar").addClass("navbar-transparent").removeClass("shrink navbar-colorized"),$(".small-logo").addClass("small-logo-big").removeClass("small-logo-sm"));var b=1.5*$(window).scrollTop(),c=$(window).height(),d=b/c;d=1-d,$("#workMessages").css({opacity:d}),d=1-d,$("#portfolio").css({opacity:d}),$(window).scrollTop()>100?$(".scroll-top-wrapper").addClass("show"):$(".scroll-top-wrapper").removeClass("show")}),angular.module("vrigzonlinegithubioApp").controller("WorkCtrl",["$scope","$location","$anchorScroll","$timeout","MyPortfolioData",function(a,b,c,d,e){e.portfolio().success(function(b){var c=b.messages[Math.floor(Math.random()*b.messages.length)],e=c.message,f=function(a){e.length===a&&(a=0),$(".work-messages").html(esc(e[a])).fadeIn(500).delay(1e3).fadeOut(500,function(){f(a+1)})};$(".work-messages").hide(),f(0),a.scroll=0,a.loadPortfolio=function(){d(a.scroll>210?function(){a.portfolio=b.portfolio}:function(){a.portfolio=[]})}}).error(function(a){console.log(a)})}]),angular.module("vrigzonlinegithubioApp").controller("AboutCtrl",["$scope",function(){}]),angular.module("vrigzonlinegithubioApp").controller("IndexCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()},a.goTo=function(a){b.hash(a),CustomSmoothScroll.scrollTo(a)}}]),angular.module("myPortfolio",[]).factory("MyPortfolioData",["$http",function(a){return{portfolio:function(){return a.get("/myportfolio.json")}}}]),angular.module("directives",[]).directive("loadPortfolio",["$window",function(a){return{scope:{scroll:"=loadPortfolio"},link:function(b){var c=angular.element(a),d=function(){b.scroll=c.scrollTop()};c.on("scroll",b.$apply.bind(b,d)),d()}}}]);