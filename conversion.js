var execute = function(cookieN,cookieV,cookieE){
   		var d = new Date();
    	d.setTime(d.getTime() + (cookieE*24*60*60*1000));
    	var expires = "expires="+ d.toUTCString();
    	document.cookie = cookieN + "=" + cookieV + ";" + expires + ";path=/";
    	console.log('setting cookie now');
}
execute('pc',true,365);