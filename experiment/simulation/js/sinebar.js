
/// This dw_tester.js file is developped by,
///Piyali Chattopadhyay
///Project_scientist- Technical
///Virtual Lab Projects,Mechanical Engineering Department,IIT Kharagpur


$(document).ready(function(){
  $("#instcontrol").click(function(){
    $("#inst").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#myTables").click(function(){
	
	
    $("#obsT").slideToggle("slow");
	
	
  
  });
});

///change object image

function changeImg1(){

document.getElementById('chkobj').value = 1;	
document.getElementById('obj').src = "images/testobj3.png";	
document.getElementById('obj').style.width = 13 +"%";
document.getElementById('obj').style.left = 24.2 +"%";
document.getElementById('obj').style.top = -8 +"%";
document.getElementById('dbtn').disabled = true;
}

function changeImg2(){
	
document.getElementById('chkobj').value = 2;	
document.getElementById('obj').src = "images/testobj2.png";	
document.getElementById('obj').style.width = 35 +"%";
document.getElementById('obj').style.left = 15.2 +"%";
document.getElementById('obj').style.top = -18 +"%";
document.getElementById('dbtn').disabled = false;	
}

///object movement

function MoveobjR(){
	document.getElementById('obj').classList.remove("moveLeftobj");
		   document.getElementById('holder').classList.remove("moveLeftholder");
	 document.getElementById('obj').classList.add("moveRightobj");
	 document.getElementById('holder').classList.add("moveRightholder");
	$('#chkside').val(2); 
	
	document.getElementById('cb').style.left = 82 +"%";
	document.getElementById('dstand').style.left = 93 +"%";
	document.getElementById('dial').style.left = 90 +"%";
	document.getElementById('pspan').style.left = 85 +"%";
	
	document.getElementById('cb').style.top = -75 +"%";
	document.getElementById('dstand').style.top = -29 +"%";	
	document.getElementById('pspan').style.top = -84 +"%";
	
	 }

function MoveobjL(){
	document.getElementById('obj').classList.remove("moveRightobj");
		   document.getElementById('holder').classList.remove("moveRightholder");
	 document.getElementById('obj').classList.add("moveLeftobj");
	 document.getElementById('holder').classList.add("moveLeftholder");
	 $('#chkside').val(1);	
	 
	 document.getElementById('cb').style.left = -6 +"%";
	document.getElementById('dstand').style.left = 5 +"%";
	document.getElementById('dial').style.left = 1 +"%";
	document.getElementById('pspan').style.left = -1 +"%";
	
	document.getElementById('cb').style.top = -69 +"%";
	document.getElementById('dstand').style.top = -23 +"%";
	document.getElementById('pspan').style.top = -80 +"%";
}

///dial movement

function calibrate(){
	//document.getElementById('obj').classList.remove("moveLeftobj");
		//   document.getElementById('holder').classList.remove("moveLeftholder");
		if(document.getElementById('chkside').value == 1){
	 document.getElementById('cb').classList.add("movedial");
	 document.getElementById('dstand').classList.add("movestand");
	 
	 setTimeout(function(){
	document.getElementById('cb').classList.remove("movedial");
	 document.getElementById('dstand').classList.remove("movestand");
	 },2000);
	 
	 }
	 
	 if(document.getElementById('chkside').value == 2){
	 document.getElementById('cb').classList.add("movedialL");
	 document.getElementById('dstand').classList.add("movestandL");
	 
	 setTimeout(function(){
	document.getElementById('cb').classList.remove("movedialL");
	 document.getElementById('dstand').classList.remove("movestandL");
	 },2000);
	 
	 }	 
	 
}
var h1=0,h2=0,h3=0,h4=0,h5=0,h6=0,h7=0,h8=0,h9=0,THeight;
var c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0;

function ch1(){
$('#hvseudo').val(1);	
}
function ch2(){
$('#hvseudo').val(2);	
}

function ch3(){
$('#hvseudo').val(3);	
}

function ch4(){
$('#hvseudo').val(4);	
}

function ch5(){
$('#hvseudo').val(5);	
}

function ch6(){
$('#hvseudo').val(6);	
}

function ch7(){
$('#hvseudo').val(7);	
}

function ch8(){
$('#hvseudo').val(8);	
}
function ch9(){
$('#hvseudo').val(9);	
}
var dialtheta;
function Simulate(){
	
	var a = $('#hvseudo').val();
	//c1++;
	if(a == 1){
		
		h1 = 0.5;
		
	}
	if(a == 2){
		//c2++
		h2 = 1;
	}
	if(a == 3){
		//c3+=5;
		h3 = 5;
	}
	if(a == 4){
		//c4+=10;
		h4 = 10;
	}
	if(a == 5){
		//c5+=20;
		h5 = 20;
	}
	if(a == 6){
		//c6+=30;
		h6 = 30;
	}
	if(a == 7){
		//c7+=50;
		h7 = 50;
	}
	if(a == 8){
		//c8+=2;
		h8 = 2;
	}
	if(a == 9){
		//c9+=3;
		h9 = 3;
	}
	
	THeight = math.add(h1,h2,h3,h4,h5,h6,h7,h8,h9);
	
	document.getElementById('hvalue').value = THeight;
	var L = 127;///in mm
	var H = document.getElementById('hvalue').value;
	var theta = math.asin(math.divide(H,L));
	
	if(document.getElementById('chkside').value == 1){
	document.getElementById('slipgauge').style.height = THeight+ '%';
	var thetad = -math.divide(math.multiply(theta,180),math.pi);
	}
	else if(document.getElementById('chkside').value == 2){
	document.getElementById('slipgauge2').style.height = THeight + '%';
	var thetad = math.divide(math.multiply(theta,180),math.pi);
	}	
	 
	 dialtheta = math.abs(thetad);
	 
	document.getElementById("bar").style.transform = "rotate("+thetad+ "deg)";
	document.getElementById("obj").style.transform = "rotate("+thetad+ "deg)";
	
	if(document.getElementById('chkobj').value == 2){///v block
	if(document.getElementById('chkside').value == 1){
	document.getElementById("obj").style.transformOrigin="-4% 40%";
	document.getElementById("bar").style.transformOrigin="10% 40%";
	}
	
	else if(document.getElementById('chkside').value == 2){
	document.getElementById("obj").style.transformOrigin="110% 40%";
	document.getElementById("bar").style.transformOrigin="90% 40%";
	}
	}
	
	if(document.getElementById('chkobj').value == 1){///one side taper
	
	document.getElementById("obj").style.transformOrigin="-70% 105%";
	document.getElementById("bar").style.transformOrigin="10% 40%";
	
	}
	
	
}

function removeH(){
	
	$('#hvseudo').val(0);
	h1 = 0;
	h2=0;
	h3=0;
	h4=0;
	h5=0;h6=0;h7=0;h8=0;h9=0;
	//c1=0;c2=0;c3=0;c4=0;c5=0;c6=0;c7=0;c8=0;c9=0;
	if(document.getElementById('chkside').value == 1){
	document.getElementById('slipgauge').style. height = 0 +"%";
	}
	if(document.getElementById('chkside').value == 2){
	document.getElementById('slipgauge2').style. height = 0 +"%";
	}
	THeight = 0;
	document.getElementById('hvalue').value =0;
	
	document.getElementById("bar").style.transform = "rotate("+0+ "deg)";
	document.getElementById("obj").style.transform = "rotate("+0+ "deg)";
	 nValue = '';
	$('#dial')[0].value = nValue;
	
	
	
}

 
 /////////////////////////////////////Table Creation//////////////////////////////////////////////////////////EDIT it
 
var tabrowindex = 0;
var arr = [];

var table;



//------------------------------------------------- Table Creation -----------------------------------------------//
function CreateTable() {


    arr[0] = tabrowindex+1 ;
    arr[1] = $('#hvalue').val();
    arr[2] = dialtheta;
	
   
	
	table = document.getElementById("obsT");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 3; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  




/// clear button function


function Refresh(){
	
	var Dtable= document.getElementById('obsT');
	
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){

	Dtable.deleteRow(i);
	}
	
	tabrowindex=0;
	removeH();
	
 }