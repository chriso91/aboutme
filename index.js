$(document).ready(function(){


	document.getElementById('calctext').style.display = 'none';
	document.getElementById('weathertext').style.display='none';
	document.getElementById('pomodorotext').style.display='none';
	document.getElementById('wikitext').style.display='none';
	document.getElementById('quotetext').style.display='none';
	document.getElementById('tictext').style.display='none';

	$('#calcdiv').hover(function(){
		$('#calctext').show();
		$('#calc').width('27vw');
		$('#calc').fadeTo(300, 0.1);
	},function(){
		$('#calctext').hide();
		$('#calc').width('25vw');
		$('#calc').fadeTo(300, 1);
	});

	$('#weatherdiv').hover(function(){
		$('#weathertext').show();
		$('#weather').width('27vw');
		$("#weather").fadeTo(300, 0.1);
	},function(){
		$('#weathertext').hide();
		$('#weather').width('25vw');
		$("#weather").fadeTo(300, 1);
	});

	$('#pomodorodiv').hover(function(){
		$('#pomodorotext').show();
		$('#pomodoro').width('27vw');
		$("#pomodoro").fadeTo(300, 0.1);
	},function(){
		$('#pomodorotext').hide();
		$('#pomodoro').width('25vw');
		$("#pomodoro").fadeTo(300, 1);
	});

	$('#wikidiv').hover(function(){
		$('#wikitext').show();
		$('#wiki').width('27vw');
		$("#wiki").fadeTo(300, 0.1);
	},function(){
		$('#wikitext').hide();
		$('#wiki').width('25vw');
		$("#wiki").fadeTo(300, 1);
	});

	$('#quotediv').hover(function(){
		$('#quotetext').show();
		$('#quote').width('27vw');
		$("#quote").fadeTo(300, 0.1);
	},function(){
		$('#quotetext').hide();
		$('#quote').width('25vw');
		$("#quote").fadeTo(300, 1);
	});

	$('#ticdiv').hover(function(){
		$('#tictext').show();
		$('#tic').width('27vw');
		$("#tic").fadeTo(300, 0.1);
	},function(){
		$('#tictext').hide();
		$('#tic').width('25vw');
		$("#tic").fadeTo(300, 1);
	});



	
	
})