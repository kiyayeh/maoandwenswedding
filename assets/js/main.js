$(document).ready(function() {
   
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -55, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	}); 
     
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();         
    
    /* ======= Countdown ========= */
	// set the date we're counting down to
    var target_date = new Date("December 26, 2015").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown =  document.getElementById("countdown-box");
    var days_span = document.createElement("SPAN");
    days_span.className = 'days';
    countdown.appendChild(days_span);
    var hours_span = document.createElement("SPAN");
    hours_span.className = 'hours';
    countdown.appendChild(hours_span);
    var minutes_span = document.createElement("SPAN");
    minutes_span.className = 'minutes';
    countdown.appendChild(minutes_span);
    var secs_span = document.createElement("SPAN");
    secs_span.className = 'secs';
    countdown.appendChild(secs_span);
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
     
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value.
        days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit script">Days</span>';
        hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit script">Hrs</span>';
        minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit script">Mins</span>';
        secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit script">Secs</span>';
        
      
        //countdown.innerHTML = days + "d, " + hours + "h, "
       // + minutes + "m, " + seconds + "s";  
     
    }, 1000);




    /* ======= RSVP Form (Dependent form field) ============ */
    $('#cguests').on("change", function(){
        console.log('Yes');
        if ($(this).val() == "") {
            $('.guestinfo-group').slideDown(); //hide
            console.log('not selected');
        } else if ($(this).val() == 'No_thanks' ) {
            $('.guestinfo-group').slideUp(); //hide
            console.log('No guests');
        } else if ($(this).val() == 'yes' ) {
            $('.guestinfo-group').slideDown(); //show

            console.log('Has guests');
        }


    });


    /* ======= Google Map ======= */
    map = new GMaps({
        div: '#map',
        lat: 25.0412964,
        lng: 121.521172,
        scrollwheel:false,
        zoom: 15
    });
    
    map.addMarker({
        lat: 25.0412964,
        lng: 121.521172,
        verticalAlign: 'top',
        title: 'Ceremony Location',  
        infoWindow: {
            content: '<div class="note">婚禮地點</div><h4 class="map-title script">"台大庭園會館"</h4><div class="address"><span class="region">"徐州路2號 （台大醫院國際會議中心）"</span><br><span class="postal-code"></span><br><span class="city-name">"台北市"</span></div>'
        }
        
        
    });



    //map.addMarker({
    //    lat: 50.969747,
    //    lng: -3.199985,
    //    title: 'Reception Location',
    //    infoWindow: {
    //        content: '<div class="note">Reception</div><h4 class="map-title script">The Manor House</h4><div class="address"><span class="region">Address line goes here</span><br><span class="postal-code">Postcode</span><br><span class="city-name">City</span></div>'
    //    }
    //
    //});


    /*display marker 1 address on load */
    google.maps.event.trigger(map.markers[0], 'click');
    /*display marker 2 address on load */
    google.maps.event.trigger(map.markers[1], 'click');

    console.log('I love you Da Mao !! >/////<');

    

    /* ======= Instagram ======= */
    //Instafeed.js - add Instagram photos to your website
    //Ref: http://instafeedjs.com/

    var loadButton = document.getElementById('load-more');
    var feed = new Instafeed({
            limit: 28,
            get: 'tagged',
            tagName: 'filmweddingphotographer', /* Remember to use a unique hastag for the wedding */
            clientId: "467ede5a6b9b48ae8e03f4e2582aeeb3", /* IMPORTANT: REPLACE THE DEMO ID WITH YOUR CLIENTID! Find out clientID: http://darkwhispering.com/how-to/get-a-instagram-client_id-key */
            resolution: 'thumbnail',
            template: '<a class="instagram-item item" href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a>',
            sortBy: 'most-liked',
          // every time we load more, run this function
          after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
              loadButton.setAttribute('disabled', 'disabled');
            }
          },
    });

    // bind the load more button
    loadButton.addEventListener('click', function() {
      feed.next();
    });

    // run our feed!
    feed.run();


    /* ===== Packery ===== */
    //Ref: http://packery.metafizzy.co/
    //Ref: http://imagesloaded.desandro.com/

    var $container = $('#photos-wrapper');
    
    // init
    $container.imagesLoaded(function () {
        $container.packery({
            itemSelector: '.item',
            percentPosition: true
        });
    });

    /* ======= jQuery form validator ======= */ 
	///* Ref: http://jqueryvalidation.org/documentation/ */
	//$(".rsvp-form").validate({
	//	messages: {
	//	    name: {
    	//		required: 'Please enter your full name' //You can customise this message
	//		},
	//		email: {
	//			required: 'Please enter your email' //You can customise this message
	//		},
	//		events: {
	//			required: 'Are you attending?' //You can customise this message
	//		},
	//		guests: {
	//			required: 'How many guests?' //You can customise this message
	//		},
	//		//guestinfo: {
	//		//	required: 'Please provide name(s)' //You can customise this message
	//		//},
	//	}
	//});
  

});