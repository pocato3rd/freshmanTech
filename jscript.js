var gameOver = function(id) {
    $(id).append("<img src='images/gameOver.gif' class='gameOverGif'/>");
};
var restart = function(){
    $('#resetButton').click(function(){
      $('.active, .disabled, .story, #main-container p').css("display","none");
      $('.active').removeClass('active');
      $('.disabled').removeClass('disabled');
      $('.start').css("display","block");
      $('.start *').css("display","inline-block");
      $('.start *').addClass('active');
      $('.start *').css("text-align","center");
      $('.gameOverGif').css("display","none");
    });
};
var hide = function() {
    $('.active').css("display","none");
    $('#main-container p').css("display","none");
};
var main = function(){
   dead = false;
   var $fire = $('#fire');
   var $water = $('#water');
   var $earth = $('#earth');
   var el = "none";
   /*BEGINNING OF FIRST FIRE PATH*/
   $fire.click(function(){
      if ($('#fire').hasClass('active')) {
	 hide();
	 $('.active').removeClass('active').addClass('disabled');
	 var $fireMoral = $('#moralFireQ, #moralFireAns');
	 var $moralFireOpts = $('#moralFireYes, #moralFireNo');
	 $fireMoral.css("display","block");
	 $moralFireOpts.css("display","inline-block");
	 $moralFireOpts.addClass('active');
	 restart();
      }
      $('#moralFireYes').click(function(){
	if ($('#moralFireYes').hasClass('active')) {
	   hide();
	   $('.active').removeClass('active').addClass('disabled');
	   gameOver('#moralFireAns');
	   $('#moralFireAns').append("<p>You must have good MORALITY to become a FIRE mage. Without this attribute, the element will control you.<br> You are not accepted</p>");
	   restart();
	}
      });
      $('#moralFireNo').click(function(){
	if ($('#moralFireNo').hasClass('active')) {
	   hide();
	   $('.active').removeClass('active').addClass('disabled');
	   var $fireWill = $('#willFireQ, #willFireAns');
	   var $willFireOpts = $('#willFireYes, #willFireNo');
	   $fireWill.css("display","block");
	   $willFireOpts.css("display","inline-block");
	   $willFireOpts.addClass('active');
	   restart();
	}
      });
      $('#willFireYes').click(function(){
	if ($('#willFireYes').hasClass('active')) {
	   hide();
	   $('.active').removeClass('active').addClass('disabled');
	   el = "fire";
	   $('#mainChoice2').css('display','block');
	   $('#welcome, #journeyQ').css("display","block");
	   var $journeyOpts = $('#journeyDragon, #journeyTemple');
	   $journeyOpts.css("display","inline-block");
	   $journeyOpts.addClass('active');
	   restart();
	}
      });
      $('#willFireNo').click(function(){
	if ($('#willFireNo').hasClass('active')) {
	   hide();
	   $('.active').removeClass('active').addClass('disabled');
	   gameOver('#willFireAns');
	   $('#willFireAns').append("<p>You must have strong WILLPOWER to become a FIRE mage. Without this attribute, the element will control you.<br> You are not accepted.</p>");
	   restart();
	}
      });
   });
   /* END OF FIRST FIRE PATH */
   /* BEGINNING OF FIRST WATER PATH */
   $water.click(function(){
      if ($('#water').hasClass('active')) {
	 hide();
	 $('.active').removeClass('active').addClass('disabled');
	 var $waterMoral = $('#moralWaterQ, #moralWaterAns');
	 var $moralWaterOpts = $('#moralWaterYes, #moralWaterNo');
	 $waterMoral.css("display", "block");
	 $moralWaterOpts.css("display","inline-block");
	 $moralWaterOpts.addClass('active');
	 restart();
      }
      $('#moralWaterYes').click(function(){
	 if ($('#moralWaterYes').hasClass('active')){
	    hide();
	    $('.active').removeClass('active').addClass('disabled');
	    var $waterPatience = $('#patienceWaterQ, #patienceWaterAns');
	    var $patienceWaterOpts = $('#patienceWaterYes, #patienceWaterNo');
	    $waterPatience.css("display","block");
	    $patienceWaterOpts.css("display","inline-block");
	    $patienceWaterOpts.addClass('active');
	    restart();
	 }
      });
      $('#moralWaterNo').click(function(){
	 if ($('#moralWaterNo').hasClass('active')){
	    hide();
	    $('.active').removeClass('active').addClass('disabled');
	    gameOver('#moralWaterAns');
	    $('#moralWaterAns').append("<p>You must have good MORALITY to become a WATER mage. Without this attribute, the element will drive you insane.<br> You are not accepted</p>");
	    restart();
	 }
      });
      $('#patienceWaterYes').click(function(){
	 if ($('#patienceWaterYes').hasClass('active')){
	    hide();
	    $('.active').removeClass('active').addClass('disabled');
	    el = "water";
	    $('#mainChoice2').css('display','block');
	    $('#welcome, #journeyQ').css("display","block");
	    var $journeyOpts = $('#journeyDragon, #journeyTemple');
	    $journeyOpts.css("display","inline-block");
	    $journeyOpts.addClass('active');
	    restart();
	 }
      });
      $('#patienceWaterNo').click(function(){
	 if ($('#patienceWaterNo').hasClass('active')){
	    hide();
	    $('.active').removeClass('active').addClass('disabled');
	    gameOver('#patienceWaterAns');
	    $('#patienceWaterAns').append("<p>You must have PATIENCE to become a WATER mage. Without this attribute, the element will drive you insane. <br>You are not accepted</p>");
	    restart();
	 }
      });
   });
   /* END OF FIRST WATER PATH */ 
   $earth.click(function(){
      if ($('#earth').hasClass('active')){
	  hide();
	 $('.active').removeClass('active').addClass('disabled');
	 var $earthMoral = $('#moralEarthQ, #moralEarthAns');
	 var $moralEarthOpts = $('#moralEarthYes, #moralEarthNo');
	 $earthMoral.css("display", "block");
	 $moralEarthOpts.css("display","inline-block");
	 $moralEarthOpts.addClass('active');
	 restart();
      }
      $('#moralEarthYes').click(function(){
	 if ($('#moralEarthYes').hasClass('active')) {
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    gameOver('#moralEarthAns');
	    $('#moralEarthAns').append("<p>You must have good MORAL. Otherwise, you will never harness the EARTH and you will be wasting a spot in our school.<br> You are not accepted.</p>");
	    restart();
	 }
      });
      $('#moralEarthNo').click(function(){
	 if ($('#moralEarthNo').hasClass('active')) {
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    var $earthSense = $('#senseEarthQ, #senseEarthAns');
	    var $senseEarthOpts = $('#senseEarthYes, #senseEarthNo');
	    $earthSense.css("display","block");
	    $senseEarthOpts.css("display","inline-block");
	    $senseEarthOpts.addClass('active');
	    restart();
	 }
      });
      $('#senseEarthYes').click(function(){
	 if ($('#senseEarthYes').hasClass('active')){
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    el = "earth";
	    $('#mainChoice2').css('display','block');
        $('#welcome, #journeyQ').css("display","block");
		var $journeyOpts = $('#journeyDragon, #journeyTemple');
        $journeyOpts.css("display","inline-block");
		$journeyOpts.addClass('active');
		restart();
	 }
      });
      $('#senseEarthNo').click(function(){
	 if ($('#senseEarthNo').hasClass('active')){
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    gameOver('#senseEarthAns');
	    $('#senseEarthAns').append("<p>You must have acute SENSES to understand the EARTH. Otherwise, you will never harness the EARTH and you will be wasting a spot in our school.<br> You are not accepted.</p>");
	    restart();
	 }
      });
   });
   /* END OF FIRST EARTH PATH */
   /* BEGINNING OF FIRST DRAGON PATH */
   $('#journeyDragon').click(function(){
      if ($('#journeyDragon').hasClass('active')) {
	  hide();
	 $('.active').removeClass('active').addClass('disabled');
	 var $climbDragon = $('#climbDragonQ, #climbDragonAns');
	 var $climbDragonOpts = $('#climbDragonYes, #climbDragonNo');
	 $climbDragon.css("display","block");
     $climbDragonOpts.css("display","inline-block");
	 $climbDragonOpts.addClass('active');
	 restart();
      }
      $('#climbDragonYes').click(function(){
	 if ($('#climbDragonYes').hasClass('active')) {
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    var $packDragon = $('#packDragonQ, #packDragonAns');
	    var $packDragonOpts = $('.packDragonCho');
	    $packDragon.css("display","block");
        $packDragonOpts.css("display","inline-block");
	    $packDragonOpts.addClass('active');
	    restart();
	 }
      });
      $('#climbDragonNo').click(function(){
	 if ($('#climbDragonNo').hasClass('active')) {
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    gameOver('#climbDragonAns');
	    $('#climbDragonAns').append("<p>You struggle up the mountain and are exhausted by the time you reach the DRAGON's lair. You make a loud grunt as you sit down to take a break, waking the DRAGON. His green eyes open wide and you are soon within his stomach</p>");
	    restart();
	 }
      });
      $('#packDragonLight').click(function(){
	 if ($('#packDragonLight').hasClass('active')) {
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    var $weaponDragon = $('#weaponDragonQ, #weaponDragonAns');
	    var $weaponDragonOpts = $('.weaponDragonCho');
	    $weaponDragon.css("display","block");
        $weaponDragonOpts.css("display","inline-block");
	    $weaponDragonOpts.addClass('active');
	    restart();
	 }
      });
      $('#packDragonHeavy').click(function(){
	 if ($('#packDragonHeavy').hasClass('active')) {
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    gameOver('#packDragonAns');
	    $('#packDragonAns').append("<p>You struggle up the mountain and are exhausted by the time you reach the DRAGON's lair. You make a loud grunt as you sit down to take a break, waking the DRAGON. His green eyes open wide and you are soon within his stomach</p>");
	    restart();
	 }
      });
      $('#weaponDragonSword').click(function(){
	 if ($('#weaponDragonSword').hasClass('active')) {
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    var $strategySword = $('#strategySwordQ,#strategySwordAns');
	    var $strategySwordOpts = $('.strategySwordCho');
	    $strategySword.css("display","block");
        $strategySwordOpts.css("display","inline-block");
	    $strategySwordOpts.addClass('active');
	    restart();
	 }
      });
      var strategy = "none";
      $('#strategySwordOff').click(function(){
	 if ($('#strategySwordOff').hasClass('active')) {
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    var $pathSword = $('#pathSwordQ, #pathSwordAns');
	    var $pathSwordOpts = $('.pathSwordCho');
	    $pathSword.css("display","block");
        $pathSwordOpts.css("display","inline-block");
	    $pathSwordOpts.addClass('active');
	    strategy = "off";
	    restart();
	 }
      });
      $('#strategySwordDef').click(function(){
	 if ($('#strategySwordDef').hasClass('active')) {
	     hide();
	    $('.active').removeClass('active').addClass('disabled');
	    var $pathSword = $('#pathSwordQ, #pathSwordAns');
	    var $pathSwordOpts = $('.pathSwordCho');
	    $pathSword.css("display","block");
        $pathSwordOpts.css("display","inline-block");
	    $pathSwordOpts.addClass('active');
	    strategy = "def";
	    restart();
	 }
      });
      $('#pathSwordDrop').click(function(){
         if($('#pathSwordDrop').hasClass('active')) {
	     hide();
            $('.active').removeClass('active').addClass('disabled');
            if (strategy === "def") {
		gameOver('#pathSwordAns');
               $('#pathSwordAns').append("<p>You drop down. The drop is farther than you thought. As you land, your ankle breaks. You scream in pain, waking the DRAGON. The DRAGON peers down at you writhing. The DRAGON silences your screams.</p>");
	       restart();
            } else {
               var $exitSword = $('#exitSwordQ, #exitSwordAns');
               var $exitSwordOpts = $('.exitSwordCho');
               $exitSword.css("display","block");
               $exitSwordOpts.css("display","inline-block");
               $exitSwordOpts.addClass('active');
	       restart();
            }
         }
      });
      $('#pathSwordClimb').click(function(){
         if($('#pathSwordClimb').hasClass('active')) {
	     hide();
            $('.active').removeClass('active').addClass('disabled');
            if (strategy === "def") {
		gameOver('#pathSwordAns');
               $('#pathSwordAns').append("<p>You slowly climb down to the lair. Approaching the entrance slowly. Your sword scrapes the ground. The DRAGON's eyes bolt open. He snaps at you, but you block it. You block each bite, moving closer to his chest. You plunge the sword into the DRAGON's heart. The DRAGON collapses on top of you. You suffocate underneath the DRAGON</p>");
	       restart();
            } else {
		gameOver('#pathSwordAns');
               $('#pathSwordAns').append("<p>You climb quickly down the rocks to get to the entrance. Your foot slips and knocks a rock down, waking the DRAGON. The DRAGON clambers out of the lair and your sword clatters to the ground.</p>");
	       restart();
            }
         }
      });
      $('#exitSwordGlide').click(function(){
         if($('#exitSwordGlide').hasClass('active')) {
            hide();
            $('.active').removeClass('active').addClass('disabled');
	    gameOver('#exitSwordAns');
            $('#exitSwordAns').append("<p>You cut off the DRAGON's wings and hold them out. You jump. Your corpse scares a hiker as it bounces beside her.</p>");
            restart();
        }
      });
      $('#exitSwordClimb').click(function(){
         if($('#exitSwordClimb').hasClass('active')) {
            hide();
            $('.active').removeClass('active').addClass('disabled');
            $('#exitSwordAns').append("<p>After a tedious and exhausting climb down, you finally make it. You trudge back to the SCHOOL OF MAGES<p>");
            $('#mainStoryEnd, #mainStoryEnd *').css("display","block");
            restart();
         }
      });
      $('#weaponDragonBow').click(function(){
	 if ($('#weaponDragonBow').hasClass('active')) {
        hide();
	    $('.active').removeClass('active').addClass('disabled');
	    var accBow = $('#accBowQ, #accBowAns');
	    var accBowOpts = $('.accBowCho');
	    accBow.css("display","block");
        accBowOpts.css("display","inline-block");
	    accBowOpts.addClass('active');
        restart();
	 }
      });
       $('#accBowYes').click(function(){
           if ($('#accBowYes').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
              var rangeBow = $('#rangeBowQ, #rangeBowAns');
              var rangeBowOpts = $('.rangeBowCho');
              rangeBow.css("display", "block");
              rangeBowOpts.css("display","inline-block");
              rangeBowOpts.addClass('active');
              restart();
           }
       });
       $('#accBowNo').click(function(){
           if ($('#accBowNo').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');  
	      gameOver('#accBowAns');
              $('#accBowAns').append("<p>You load a bolt. The CROSSBOW string snaps. The sound wakes the DRAGON. You back away as he rises above you. There is now one less person on the planet</p>");
              restart();
           }
       });
       $('#rangeBowLong').click(function(){
           if ($('#rangeBowLong').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
              var aimBow = $('#aimBowQ, #aimBowAns');
              var aimBowOpts = $('.aimBowCho');
              aimBow.css("display","block");
              aimBowOpts.css("display","inline-block");
              aimBowOpts.addClass('active');
              restart();
           }
       });
       $('#rangeBowShort').click(function(){
           if ($('#rangeBowShort').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
              $('#rangeBowAns').append("<p>You climb slowly down the mountain to the entrance. You release a bolt into the darkness. The DRAGON wakes from the bolt bouncing off of it's scales. It's eyes are bright in the darkness. You fire two more bolts into the cave. Snuffing out the light. The only way down is to climb down the way you came up. It seems like it takes an enternity, but you finally arrive at the bottom exhausted. You start on your way back to the SCHOOL OF MAGES</p>");
              $('#mainStoryEnd, #mainStoryEnd *').css("display","block");
              restart();
           }
       });
       $('#aimBowHead').click(function(){
           if ($('#aimBowHead').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled'); 
	      gameOver('#aimBowAns');
              $('#aimBowAns').append("<p>You aim for the head. The bolts bounces harmlessly off a large scale. The DRAGON now knows where you are. You have no where to run. A hiker at the base of the mountain finds a new CROSSBOW</p>");
              restart();
           }
       });
       $('#aimBowWings').click(function(){
           if ($('#aimBowWings').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
              $('#aimBowAns').append("<p>You aim for the wings, the bolt pierces clean through it's wing. The DRAGON roars in pain and terror as it plummets to the ground before it's skull crushes onto it's brain as it strikes the ground.<br>The DRAGON is defeated. The only way down is to climb down the way you came up. It seems like it takes an enternity, but you finally arrive at the bottom exhausted. You start on your way back to the SCHOOL OF MAGES</p>");
              $('#mainStoryEnd, #mainStoryEnd *').css("display","block");
              restart();
           }
       });
   });
   /*END OF DRAGON PATH*/
   /*BEGINNING OF TEMPLE PATH*/
   $('#journeyTemple').click(function(){
      if ($('#journeyTemple').hasClass('active')) {
         hide();
	     $('.active').removeClass('active').addClass('disabled');
         var $puzzleTemple = $('#puzzleTempleQ, #puzzleTempleAns');
         var $puzzleTempleOpts = $('.puzzleTempleCho');
         $puzzleTemple.css("display","block");
         $puzzleTempleOpts.css("display","inline-block");
         $puzzleTempleOpts.addClass('active');
         restart();
      }
       $('#puzzleTempleYes').click(function(){
           if ($('#puzzleTempleYes').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
              var $catTemple = $('#catTempleQ, #catTempleAns');
              var $catTempleOpts = $('.catTempleCho');
              $catTemple.css("display","block");
              $catTempleOpts.css("display","inline-block");
              $catTempleOpts.addClass('active');
              restart();
           }
       });
       $('#puzzleTempleNo').click(function(){
           if ($('#puzzleTempleNo').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
	      gameOver('#puzzleTempleAns');
              $('#puzzleTempleAns').append("<p>You arrive at the TEMPLE. The first thing you do is stare at the door for hours. You try every possible way you can think of. The door just won't open. You trudge back to the SCHOOL OF MAGES in failure</p>");
              restart();
           }
       });
       $('#catTempleDog').click(function(){
           if ($('#catTempleDog').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');   
	      gameOver('#catTempleAns');
              $('#catTempleAns').append("<p>You shout 'Dog' until your face is red and your lungs burn, but the door doesn't budge. You trudge back to the school</p>");
              restart();
           }
       });
       $('#catTempleCat').click(function(){
           if ($('#catTempleCat').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
              var $chainTemple = $('#chainTempleQ, #chainTempleAns');
              var $chainTempleOpts = $('.chainTempleCho');
              $chainTemple.css("display","block");
              $chainTempleOpts.css("display","inline-block");
              $chainTempleOpts.addClass('active');
              restart();
           }
       });
       $('#hawkPlanktonFish').click(function(){
           if ($('#hawkPlanktonFish').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
	      gameOver('#chainTempleAns');
              $('#chainTempleAns').append("<p>The door behind you slams shut! You must've pushed the wrong order. You bang on the door, but it doesn't budge. You hear gears turn inside the walls. Water flows out of gates above the braziers, plunging you into darkness. Your magic won't work. Your screams echo with the fast flow of water and you are soon submerged. Your corpse will not be found until 20 years later.</p>");
              restart();
           }
       });
       $('#hawkFishPlankton').click(function(){
           if ($('#hawkFishPlankton').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
	      gameOver('#chainTempleAns');
              $('#chainTempleAns').append("<p>The door behind you slams shut! You must've pushed the wrong order. You bang on the door, but it doesn't budge. You hear gears turn inside the walls. Water flows out of gates above the braziers, plunging you into darkness. Your magic won't work. Your screams echo with the fast flow of water and you are soon submerged. Your corpse will not be found until 20 years later.</p>");
              restart();
           }
       });
       $('#planktonFishHawk').click(function(){
           if ($('#planktonFishHawk').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
	      gameOver('#chainTempleAns');
              $('#chainTempleAns').append("<p>The door behind you slams shut! You must've pushed the wrong order. You bang on the door, but it doesn't budge. You hear gears turn inside the walls. Water flows out of gates above the braziers, plunging you into darkness. Your magic won't work. Your screams echo with the fast flow of water and you are soon submerged. Your corpse will not be found until 20 years later.</p>");
              restart();
           }
       });
       $('#planktonHawkFish').click(function(){
           if ($('#planktonHawkFish').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled'); 
              var $weaponTemple = $('#weaponTempleQ, #weaponTempleAns');
              var $weaponTempleOpts = $('.weaponTempleCho');
              $weaponTemple.css("display","block");
              $weaponTempleOpts.css("display","inline-block");
              $weaponTempleOpts.addClass('active');
              restart();
           }
       });
       $('#fishPlanktonHawk').click(function(){
           if ($('#fishPlanktonHawk').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
	      gameOver('#chainTempleAns');
              $('#chainTempleAns').append("<p>The door behind you slams shut! You must've pushed the wrong order. You bang on the door, but it doesn't budge. You hear gears turn inside the walls. Water flows out of gates above the braziers, plunging you into darkness. Your magic won't work. Your screams echo with the fast flow of water and you are soon submerged. Your corpse will not be found until 20 years later.</p>");
              restart();
           }
       });
       $('#fishHawkPlankton').click(function(){
           if ($('#fishHawkPlankton').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
	      gameOver('#chainTempleAns');
              $('#chainTempleAns').append("<p>The door behind you slams shut! You must've pushed the wrong order. You bang on the door, but it doesn't budge. You hear gears turn inside the walls. Water flows out of gates above the braziers, plunging you into darkness. Your magic won't work. Your screams echo with the fast flow of water and you are soon submerged. Your corpse will not be found until 20 years later.</p>");
              restart();
           }
       });
       $('#weaponTempleSword').click(function(){
          if ($('#weaponTempleSword').hasClass('active')) {
             hide();
             $('.active').removeClass('active').addClass('disabled');
             var $stratTemple = $('#stratTempleQ, #stratTempleAns');
             var $stratTempleOpts = $('.stratTempleCho');
             $stratTemple.css("display","block");
             $stratTemple.css("display","inline-block");
             $stratTempleOpts.addClass('active');
             restart();
          }
       });
       $('#stratTempleBlock').click(function(){
          if ($('#stratTempleBlock').hasClass('active')) {
             hide();
             $('.active').removeClass('active').addClass('disabled');
             var $exitSwordTemp = $('#exitSwordTempQ, #exitSwordTempAns');
             var $exitSwordTempOpts = $('.exitSwordTempCho');
             $exitSwordTemp.css("display","block");
             $exitSwordTempOpts.addClass('active');
             restart();
          }
       });
       $('#stratTempleAttack').click(function(){
          if ($('#stratTempleAttack').hasClass('active')) {
             hide();
             $('.active').removeClass('active').addClass('disabled');
	     gameOver('#stratTempleAns');
             $('#stratTempleAns').append("<p>The snake snaps at you, you pull your sword back to slice at her, but you're too slow. Your sword clatters to the ground.</p>");
             restart();
          }
       });
       $('#exitSwordTempJump').click(function(){
          if ($('#exitSwordTempJump').hasClass('active')) {
             hide();
             $('.active').removeClass('active').addClass('disabled');
	     gameOver('#exitSwordTempAns');
             $('#exitSwordTempAns').append("<p>You run and jump , you are short by a fraction of an inch. You fall into the water, the charged water from your battle transfers electricity into your body</p>");
             restart();
          }
       });
       $('#exitSwordTempRead').click(function(){
          if ($('#exitSwordTempRead').hasClass('active')) {
             hide();
             $('.active').removeClass('active').addClass('disabled');
             var $sinkTemple = $('#sinkTempleQ, #sinkTempleAns');
             var $sinkTempleOpts = $('.sinkTempleCho');
             $sinkTemple.css("display","block");
             $sinkTempleOpts.css("display","inline-block");
             $sinkTempleOpts.addClass('active');
             restart();
          }
       });
       $('#sinkTempleEnd').click(function(){
          if ($('#sinkTempleEnd').hasClass('active')) {
             hide();
             $('.active').removeClass('active').addClass('disabled');
	     gameOver('#sinkTempleAns');
             $('#sinkTempleAns').append("<p>The ground shakes, you hear a groan from above, then the ceiling crashes in on you.</p>");
             restart();
          }
       });
       $('#sinkTempleRound').click(function(){
          if ($('#sinkTempleRound').hasClass('active')) {
             hide();
             $('.active').removeClass('active').addClass('disabled');
             $('#sinkTempleAns').append("<p>The ground shakes. A part of the wall opposite the door falls. It's creates a bridge, with another archway. You walk through, you go up stairs. The tunnel starts to brighten and you come out. You cover your eyes from the harsh rays of the sun. You are out. You are exhausted, but you stumble back to the SCHOOL OF MAGES.</p>");
             $('#mainStoryEnd, #mainStoryEnd *').css("display","block");
             restart();
          }
       });
       $('#weaponTempleEl').click(function(){
          if ($('#weaponTempleEl').hasClass('active')) {
             hide();
             $('.active').removeClass('active').addClass('disabled');
             if (el == "fire") {
                var $exitFire = $('#exitFireQ,#exitFireAns');
                var $exitFireOpts = $('.exitFireCho');
                $exitFire.css("display","block");
                $exitFireOpts.css("display","inline-block");
                $exitFireOpts.addClass('active');
                restart();
             } else if (el == "water") {
                var $exitWater = $('#exitWaterQ,#exitWaterAns');
                var $exitWaterOpts = $('.exitWaterCho');
                $exitWater.css("display","block");
                $exitWaterOpts.css("display","inline-block");
                $exitWaterOpts.addClass('active');
                restart();
             } else if (el == "earth") {
		 gameOver('#weaponTempleAns');
                $('#weaponTempleAns').append("<p>You listen for the EARTH's vibrations, but it's silence. You crouch to feel the platfrom. It's metal, not earth. You just fed the snake.<p>");
                restart();
             }   
          }
       });
       $('#exitFireJump').click(function(){
          if ($('#exitFireJump').hasClass('active')) {
             hide();
             $('.active').removeClass('active').addClass('disabled');
	     gameOver('#exitFireAns');
             $('#exitFireAns').append("<p>You run and jump , you are short by a fraction of an inch. You fall into the water, your nose smashes into the ledge.</p>");
             restart();
          }
       });
       $('#exitFireRead').click(function(){
           if ($('#exitFireRead').hasClass('active')) {
             hide();
             $('.active').removeClass('active').addClass('disabled');
             var $sinkTemple = $('#sinkTempleQ, #sinkTempleAns');
             var $sinkTempleOpts = $('.sinkTempleCho');
             $sinkTemple.css("display","block");
             $sinkTempleOpts.css("display","inline-block");
             $sinkTempleOpts.addClass('active');
             restart();
           }
       });
       $('#exitWaterRead').click(function(){
           if ($('#exitWaterRead').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
              var $sinkTemple = $('#sinkTempleQ, #sinkTempleAns');
              var $sinkTempleOpts = $('.sinkTempleCho');
              $sinkTemple.css("display","block");
              $sinkTempleOpts.css("display","inline-block");
              $sinkTempleOpts.addClass('active');
              restart();
           }
       });
       $('#exitWaterDoor').click(function(){
           if ($('#exitWaterDoor').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
              var $exitDoor = $('#exitDoorQ, #exitDoorAns');
              var $exitDoorOpts = $('.exitDoorCho');
              $exitDoor.css("display","block");
              $exitDoorOpts.css("display","inline-block");
              $exitDoorOpts.addClass('active');
              restart();
           }
       });
       $('#exitDoorLift').click(function(){
           if ($('#exitDoorLift').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
	      gameOver('#exitDoorAns');
              $('#exitDoorAns').append("<p>You lift up the door an inch and it shoots up. Water bursts through and pushes you back into the snake room. The water completely envolopes you.</p>");
              restart();
           }
       });
       $('#exitDoorEl').click(function(){
           if ($('#exitDoorEl').hasClass('active')) {
              hide();
              $('.active').removeClass('active').addClass('disabled');
              $('#exitDoorAns').append("<p>You push the water behind the door. You feel it shift. You hold your concentration as you lift the door. The water is slipt on either side of the stairs. You rush up and the water falls back to normal as you reach the final step. You walk outside into the blinding sunlight. You are exhausted, but you trudge back to the SCHOOL OF MAGES.</p>");
              $('#mainStoryEnd, #mainStoryEnd *').css("display","block");
              restart();
           }
       });
   });
};

$(document).ready(main);