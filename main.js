window.onload = function()	{
	for(var i = 5;i <= 8;i++)	{
		console.log(i)
		document.getElementById(toString(i)).onmouseover = document.getElementById(toString(i - 4)).style['visibility'] = 'visible';
	}
}