var result=document.getElementById('result');
var textval=document.getElementById('textval');
var h1=document.getElementsByTagName('h1');
var text=document.getElementById('textbox')
text.onkeyup=function(){
	if(this.value!==""){
		result.innerHTML=nayNum(this.value.toString());
		textval.innerHTML=numFormat(result.innerHTML);
	} else {
		result.innerHTML="";
		textval.innerHTML="";
	}
};