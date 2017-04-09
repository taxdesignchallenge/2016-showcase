// Masonry, Isotope
// external js: isotope.pkgd.js
// init Isotope


/*$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'reLayout',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  filter: '.submissions_2016',
	  animationOptions: {
	     duration: 7500,
	     easing: 'linear',
	     queue: false
	   }
});*/

/*var $grid = $('.grid').isotope({ });

$('.grid').isotope({
    layoutMode: "perfectMasonry"
});*/

$(window).load(function(){

var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
    percentPosition: true,
  	layoutMode: 'fitRows',
	masonry: {
		gutter: 0,
		/*itemSelector: '.grid-item',*/
		columnWidth: '.grid-sizer',
		gutter: 0,
		/*columnWidth: '.grid-sizer',*/
		percentPosition: true
	},
	filter: '.submissions_2016',
		animationOptions: {
		duration: 7500,
		easing: 'linear',
		queue: false
	}
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('.filters').on( 'click', 'li.iso-btn', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('.sorts').on( 'click', 'li.iso-btn', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'li.iso-btn', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


});

/*$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});*/


/*$("#content").isotope( 'remove', $(".element"), function(){
    $("#content").isotope( 'addItems', $(data), function(){
        $("#content").isotope( 'reLayout' callback );
    });
});*/

/*$(window).resize(function(){
   $(".grid").masonry().masonry("reloadItems");
});*/