$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.flex_space_between');
	console.log(dropdownlink);
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        $next = $this.next();
    console.log($this);
    $next.slideToggle();
    $this.parent().toggleClass('open');
    console.log($el.find('.submenuItems'));
    /*if(!e.data.multiple) {
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }*/
  }
  console.log($('.accordion-menu li div'));
  var accordion = new Accordion($('.accordion-menu'), false);
  
 var div = ($('.accordion-menu li div'));
 $('.accordion-menu li div').on('click',function(e) {
    var $this = $(this);
	if($this.attr("class") == 'flex_space_between') return;
    $('.accordion-menu li').find('.active').removeClass('active');
    $this.toggleClass('active');
	
    console.log(div.find('.active'));
  });
  function move_left(e){
	  var lectures = $(this).closest('.course').find('.lectures');
	  var num = lectures.attr("num");
	  var len= lectures.children().length;
	  
	  console.log($(this))
	  if($(this).children(":first").attr("class")=='fa fa-chevron-right'){
		  if(len-num >= 4){
			  
		  $(this).closest('.course').find(`.lectures li:nth-child(${num})`).animate({
					width: "toggle",left: '-=250'
				});lectures.attr('num', ++num);}
	  }
	  else if(num > 1){
		  
		  console.log(num)
		  $(this).closest('.course').find(`.lectures li:nth-child(${num - 1})`).animate({
					width: "toggle",left: '+=250'
				});lectures.attr('num', --num);}
	  
		  
  }
  
  $('.nav_button').on('click',move_left);
})

