		function Grading(){
		var a = parseInt(document.getElementById('English').value);
		var b = parseInt(document.getElementById('Maths').value);
		var c = parseInt(document.getElementById('Chemistry').value);
		var d = parseInt(document.getElementById('Physics').value);
		var final = a + b + c + d;
		var total = final / 4;
		
		document.getElementById("result").textContent = +final;
		document.getElementById("averg").textContent = +total;
		
			
			if(total >= 80 && total <= 100){
		document.getElementById("grad").textContent = 'A';}
			else if(total >= 60 && total < 80){
		document.getElementById("grad").textContent = 'B';}
			else if(total >= 50 && total < 60){
		document.getElementById("grad").textContent = 'C';}
			else if(total >= 45 && total < 50){
		document.getElementById("grad").textContent = 'D';}
			else if(total >= 40 && total < 45){
		document.getElementById("grad").textContent = 'E';}
			else{
		document.getElementById("grad").textContent = 'F';}
			
	}