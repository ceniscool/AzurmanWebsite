$("#speak").mouseenter(function(){
	$("<audio></audio>").attr({ 
		'src':'audio/'+Math.ceil(Math.random() * 5)+'whatsyourmajor.mp3', 
		'volume':0.4,
		'autoplay':'autoplay'
	}).appendTo("body");
});
