
function myfunc() { 
    // id get    in input value
	var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
	b1 = document.getElementById("b1").value; 
	b2 = document.getElementById("b2").value; 
	b3 = document.getElementById("b3").value; 
	b4 = document.getElementById("b4").value; 
	b5 = document.getElementById("b5").value; 
	b6 = document.getElementById("b6").value; 
	b7 = document.getElementById("b7").value; 
	b8 = document.getElementById("b8").value; 
	b9 = document.getElementById("b9").value; 

    //  checkbox input value
	var b1btn, b2btn, b3btn, b4btn, b5btn, 
		b6btn, b7btn, b8btn, b9btn; 
		
	b1btn = document.getElementById("b1"); 
	b2btn = document.getElementById("b2"); 
	b3btn = document.getElementById("b3"); 
	b4btn = document.getElementById("b4"); 
	b5btn = document.getElementById("b5"); 
	b6btn = document.getElementById("b6"); 
	b7btn = document.getElementById("b7"); 
	b8btn = document.getElementById("b8"); 
	b9btn = document.getElementById("b9"); 

	//  X disabled  the other fields 
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
		document.getElementById('print').innerHTML = "Player X won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		return b1btn.style.color = "red" ,
		b2btn.style.color = "red", 
		 b3btn.style.color = "red"	} 
	 if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		return b1btn.style.color = "red" ,
		b4btn.style.color = "red", 
		 b7btn.style.color = "red"	} 
	 if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		return b7btn.style.color = "red" ,
		b8btn.style.color = "red", 
		 b9btn.style.color = "red"	} 
	 if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		return b3btn.style.color = "red" ,
		b6btn.style.color = "red", 
		 b9btn.style.color = "red"	} 
	 if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		return b1btn.style.color = "red" ,
		b5btn.style.color = "red", 
		 b9btn.style.color = "red"	} 
	 if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		return b3btn.style.color = "red" ,
		b5btn.style.color = "red", 
		 b7btn.style.color = "red"	} 
	 if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		return b2btn.style.color = "red" ,
		b5btn.style.color = "red", 
		 b8btn.style.color = "red"	} 
	 if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		return b4btn.style.color = "red" ,
		b5btn.style.color = "red", 
		 b6btn.style.color = "red"	} 

	// not a disabled all the other input 0 
	 if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
		b2 == '0') && (b3 == '0' || b3 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		return b1btn.style.color = "red" ,
		b2btn.style.color = "red", 
		 b3btn.style.color = "red"	} 
	 if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
		b4 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		return b1btn.style.color = "red" ,
		b4btn.style.color = "red", 
		 b7btn.style.color = "red"	} 
	 if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
		b8 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		return b7btn.style.color = "red" ,
		b8btn.style.color = "red", 
		 b9btn.style.color = "red"	} 
	 if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
		b6 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		return b3btn.style.color = "red" ,
		b6btn.style.color = "red", 
		 b9btn.style.color = "red"	} 
	 if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
		b5 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		return b1btn.style.color = "red" ,
		b5btn.style.color = "red", 
		 b9btn.style.color = "red"	} 
	 if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
		b5 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		return b3btn.style.color = "red" ,
		b5btn.style.color = "red", 
		 b7btn.style.color = "red"	} 
	 if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
		b5 == '0') && (b8 == '0' || b8 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		return b2btn.style.color = "red" ,
		b5btn.style.color = "red", 
		 b8btn.style.color = "red"	} 
	 if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
		b5 == '0') && (b6 == '0' || b6 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		return b4btn.style.color = "red" ,
		b5btn.style.color = "red", 
		 b6btn.style.color = "red"	} 

	//  Tie 
	 if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') && 
		(b4 == 'X' || b4 == '0') && (b5 == 'X' || 
			b5 == '0') && (b6 == 'X' || b6 == '0') && 
		(b7 == 'X' || b7 == '0') && (b8 == 'X' || 
			b8 == '0') && (b9 == 'X' || b9 == '0')) { 
	return	document.getElementById('print') 
			.innerHTML = "Match Tie"; 
	} 
	 if (flag == 1) { 
		return	document.getElementById('print') 
				.innerHTML = "Player X Turn"; 
		} 
		if (flag == 0){ 
		return	document.getElementById('print') 
				.innerHTML = "Player 0 Turn"; 
		} 
	} 
 

// reset
function myfunc_2() { 
	location.reload(); 
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 
 
// and  value X or 0 
let flag = 0;

function toggleButton(buttonId) {
  const button = document.getElementById(buttonId);
  if (flag === 0) {
    button.value = "X";
    flag = 1;
  } else {
    button.value = "0";
    flag = 0;
  }
  button.disabled = true;
}

// Toggle all buttons
const buttons = document.querySelectorAll('.cell');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    toggleButton(button.id);
  });
});


// function myfunc_4(){	
//if  (flag == 0) { 
// 		document.getElementById("b2").value = "X"; 
// 		document.getElementById("b2").disabled = true; 
// 		flag = 1; 
// 	} 
// 	else { 
// 		document.getElementById("b2").value = "0"; 
// 		document.getElementById("b2").disabled = true; 
// 		flag = 0; 
// 	} 
	 
// } 

// function myfunc_5(){	if  (flag == 0) { 
// 		document.getElementById("b3").value = "X"; 
// 		document.getElementById("b3").disabled = true; 
// 		flag = 1; 
// 	} 
// 	else { 
// 		document.getElementById("b3").value = "0"; 
// 		document.getElementById("b3").disabled = true; 
// 		flag = 0; 
// 	} 
	 
// } 

// function myfunc_6(){	if  (flag == 0) { 
// 		document.getElementById("b4").value = "X"; 
// 		document.getElementById("b4").disabled = true; 
// 		flag = 1; 
// 	} 
// 	else { 
// 		document.getElementById("b4").value = "0"; 
// 		document.getElementById("b4").disabled = true; 
// 		flag = 0; 
// 	} 
	 
// } 

// function myfunc_7()	{
// if  (flag == 0) { 
// 		document.getElementById("b5").value = "X"; 
// 		document.getElementById("b5").disabled = true; 
// 		flag = 1; 
// 	} 
// 	else { 
// 		document.getElementById("b5").value = "0"; 
// 		document.getElementById("b5").disabled = true; 
// 		flag = 0; 
// 	}
		 
// } 

// function myfunc_8(){	if (flag == 0) { 
// 		document.getElementById("b6").value = "X"; 
// 		document.getElementById("b6").disabled = true; 
// 		flag = 1; 
// 	} 
// 	else { 
// 		document.getElementById("b6").value = "0"; 
// 		document.getElementById("b6").disabled = true; 
// 		flag = 0; 
// 	} 
		 
// } 

// function myfunc_9(){	if  (flag == 0) { 
// 		document.getElementById("b7").value = "X"; 
// 		document.getElementById("b7").disabled = true; 
// 		flag = 1; 
// 	} 
// 	else { 
// 		document.getElementById("b7").value = "0"; 
// 		document.getElementById("b7").disabled = true; 
// 		flag = 0; 
// 	} 
		 
// } 

// function myfunc_10(){	if  (flag == 0) { 
// 		document.getElementById("b8").value = "X"; 
// 		document.getElementById("b8").disabled = true; 
// 		flag = 1; 
// 	} 
// 	else { 
// 		document.getElementById("b8").value = "0"; 
// 		document.getElementById("b8").disabled = true; 
// 		flag = 0; 
// 	}	 
// } 

// function myfunc_11(){	if  (flag == 0) { 
// 		document.getElementById("b9").value = "X"; 
// 		document.getElementById("b9").disabled = true; 
// 		flag = 1; 
// 	} 
// 	else { 
// 		document.getElementById("b9").value = "0"; 
// 		document.getElementById("b9").disabled = true; 
// 		flag = 0; 
// 	}	 
// } 



