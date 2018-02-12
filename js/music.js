$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"CUCUK 1",
			mp3:"mp3/1.mp3"
		},
		{
			title:"CUCUK 2",
			mp3:"mp3/2.mp3"
		},
		{
			title:"CUCUK 3",
			mp3:"mp3/3.mp3"
		},
		{
			title:"CUCUK 4",
			mp3:"mp3/4.mp3"
		},
		{
			title:"CUCUK 5",
			mp3:"mp3/5.mp3"
		},
		{
			title:"CUCUK 6",
			mp3:"mp3/6.mp3"
		},
		{
			title:"CUCUK 7",
			mp3:"mp3/7.mp3"
		},
		{
			title:"CUCUK 8",
			mp3:"mp3/8.mp3"
		},
		{
			title:"CUCUK 9",
			mp3:"mp3/9.mp3"
		},
		{
			title:"CUCUK 10",
			mp3:"mp3/10.mp3"
		},
		{
			title:"CUCUK 11",
			mp3:"mp3/11.mp3"
		},
		{
			title:"CUCUK 12",
			mp3:"mp3/12.mp3"
		},
		{
			title:"CUCUK 13",
			mp3:"mp3/13.mp3"
		},
	], {
		swfPath: "jPlayer-2.9.2/dist/jplayer",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
});