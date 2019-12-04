$(function() {
  // jQuery goes here...

  // $(".red-box").mouseenter(function() {
  //   $(this).stop().fadeTo(500, 0.5);
  //   $(this).text("I am hovered");
  // });

  // $(".red-box").mouseleave(function() {
  //   $(this).stop().fadeTo(500, 1);
  // });

  // hover(handlerIn, handlerOut)
  // $(".red-box").hover(function() {
  //   $(this).stop().fadeTo(500, 0.5);
  //   $(this).text("I am hovered");
  // }, function() {
  //   $(this).stop().fadeTo(500, 1);
  // });

  // adding same handler for multiple events
  // $(".red-box").on("click keydown", function() {});

  // Delegate Events (handles events on the child element ("p"))
  // $("#content").on("click", "p", function() {
  //   $(this).slideUp();
  // });
  // $("#content").append("<p>New paragrapgh added</p>");

  // passing same data to events
  // $(".red-box").click({
  //   user: "Peter"
  // }, function(event) {
  //   greetUser(event.data);
  // });

  // function greetUser(userdata) {
  //   username = userdata.user || "Anonymous";
  //   alert("Welcome back " + username + "!");
  // }

  // $("html").keydown(function(e) {
  //   console.log(e.which);
  // })

  // let ARROW_RIGHT = 39;

  // $("html").keydown(function(e) {
  //   if (e.which == ARROW_RIGHT) {
  //     $(".blue-box").stop().animate(
  //       {
  //         marginLeft: "+=20"
  //       }, 50
  //     );
  //   }
  // });

  // Working with form input (focus and blur)
  // let inputFields = $("input:text, input:password, textarea");

  // inputFields.focus(function() {
  //   $(this).css("box-shadow", "0 0 4px #666");
  // });

  // inputFields.blur(function() {
  //   $(this).css("box-shadow", "none");
  // });

  // $("#name").blur(function() {
  //   let text = $(this).val();
  //   if (text.length < 3) {
  //     $(this).css("box-shadow", "0 0 4px #811");
  //   } else {
  //     $(this).css("box-shadow", "0 0 4px #181");
  //   }
  // })

  let flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  
  $.getJSON(flickrApiUrl, {
    // options
    tags: "sun, beach",
    tagmode: "any",
    format: "json"
  }).done(function(data) {
    // success
    console.log(data);
    $.each(data.items, function(index, value) {
      console.log(value);
      $("<img>").attr("src", value.media.m).appendTo("#flickr");

      if (index == 4) {
        return false;
      }

    });
  }).fail(function() {
    // failure
    alert("Ajax call failed");
  });

});