	
		setInterval(function(){
		current=new Date()
		let date=current.getDate()
		let month=current.getMonth()
		let year=current.getFullYear()
		let hours=current.getHours()
		let minutes=current.getMinutes()
		let sec=current.getSeconds()

		if (hours>=0 && hours<12) {
		let gets=("0" +date ).slice(-2)+"/"+("0" +(month+1)).slice(-2)+"/"+year;
	    let	sets=("0" + hours).slice(-2)+":"+("0" + minutes).slice(-2)+":"+("0" + sec).slice(-2)+"AM";
		document.getElementById("Indiadate").innerHTML=sets+"<br>On:"+""+gets;
	}else if(hours==12 ){

		let gets=("0" +date ).slice(-2)+"/"+("0" +(month+1)).slice(-2)+"/"+year;
	    let	sets=("0" + hours).slice(-2)+":"+("0" + minutes).slice(-2)+":"+("0" + sec).slice(-2)+"PM";
		document.getElementById("Indiadate").innerHTML=sets+"<br>On:"+""+gets;

	}else{
		let gets=("0" +date ).slice(-2)+"/"+("0" +(month+1)).slice(-2)+"/"+year;
	    let	sets=("0" + (hours-12)).slice(-2)+":"+("0" + minutes).slice(-2)+":"+("0" + sec).slice(-2)+"PM";
		document.getElementById("Indiadate").innerHTML=sets+"<br>On:"+""+gets;

	}

					},1000);



		function Bad(){
			document.getElementById("thanks").innerHTML="Thanks for Reviewing it !!!!"
		}

		function Good(){
			document.getElementById("thanks").innerHTML="Thanks for Reviewing it !!!!"
		}

		function Average(){
			alert("Thanks for Reviewing it !!!!")
		}