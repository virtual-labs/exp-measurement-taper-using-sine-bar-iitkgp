
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
document.getElementById('ost').style.visibility="hidden";
}

///object movement

function MoveobjR(){
	document.getElementById('obj').classList.remove("moveLeftobj");
	document.getElementById('holder').classList.remove("moveLeftholder");
	//document.getElementById('dholder').classList.remove("moveLeftdholder");
	 document.getElementById('obj').classList.add("moveRightobj");
	 document.getElementById('holder').classList.add("moveRightholder");
	 //document.getElementById('dholder').classList.add("moveRightdholder");
	$('#chkside').val(2); 
	
	document.getElementById('cb').style.left = 82 +"%";
	document.getElementById('dstand').style.left = 93 +"%";
	document.getElementById('dial').style.left = 90 +"%";
	document.getElementById('dholder').style.left = 79 +"%";
	document.getElementById('dholder').style.top = -36 +"%";
	document.getElementById('dholder').style.height = 84 +"%";
	document.getElementById('pspan').style.left = 85 +"%";
	
	document.getElementById('cb').style.top = -75 +"%";
	document.getElementById('dstand').style.top = -29 +"%";	
	document.getElementById('pspan').style.top = -84 +"%";
	document.getElementById('dholder').style.zIndex= -1;
	
	 }

function MoveobjL(){
	if (document.getElementById('chkside').value!=1){
	document.getElementById('obj').classList.remove("moveRightobj");
	document.getElementById('holder').classList.remove("moveRightholder");
	//document.getElementById('dholder').classList.remove("moveRightdholder");
	 document.getElementById('obj').classList.add("moveLeftobj");
	 document.getElementById('holder').classList.add("moveLeftholder");
	 // document.getElementById('dholder').classList.add("moveLeftdholder");
	 $('#chkside').val(1);	
	 
	 document.getElementById('cb').style.left = -6 +"%";
	document.getElementById('dstand').style.left = 5 +"%";
	document.getElementById('dial').style.left = 1 +"%";
	document.getElementById('dholder').style.left = -8.8 +"%";
	document.getElementById('dholder').style.top = -34 +"%";
	document.getElementById('dholder').style.height = 82 +"%";
	document.getElementById('pspan').style.left = -1 +"%";
	
	document.getElementById('cb').style.top = -75 +"%";
	document.getElementById('dstand').style.top = -29 +"%";
	document.getElementById('pspan').style.top = -84 +"%";
	document.getElementById('dholder').style.zIndex= -1;
	}
}

///dial movement

function calibrate(){
	//document.getElementById('obj').classList.remove("moveLeftobj");
		//   document.getElementById('holder').classList.remove("moveLeftholder");
		if(document.getElementById('chkside').value == 1){
	 document.getElementById('cb').classList.add("movedial");
	 document.getElementById('dstand').classList.add("movestand");
	 document.getElementById('dholder').classList.add("moveholder");
	 
	 setTimeout(function(){
	document.getElementById('cb').classList.remove("movedial");
	 document.getElementById('dstand').classList.remove("movestand");
	 document.getElementById('dholder').classList.remove("moveholder");
	 },2000);
	 
	 }
	 
	 if(document.getElementById('chkside').value == 2){
	 document.getElementById('cb').classList.add("movedialL");
	 document.getElementById('dstand').classList.add("movestandL");
	  document.getElementById('dholder').classList.add("moveholderL");
	 
	 setTimeout(function(){
	document.getElementById('cb').classList.remove("movedialL");
	 document.getElementById('dstand').classList.remove("movestandL");
	 document.getElementById('dholder').classList.remove("moveholderL");
	 },2000);
	 
	 }	 
	 
}
var h1=0,h2=0,h3=0,h4=0,h5=0,h6=0,h7=0,h8=0,h9=0,THeight,Tsim,h1d=0,h2d=0,h3d=0,h4d=0,h5d=0,h6d=0,h7d=0,h8d=0,h9d=0;
var c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0;

function ch1(){
$('#hvseudo').val(1);
document.getElementById('li1').style.color= "gray";	
document.getElementById('li1').style.cursor = "no-drop";
document.getElementById('chkbtn').value = 2;
}
function ch2(){
$('#hvseudo').val(2);
document.getElementById('li2').style.color= "gray";	
document.getElementById('li2').style.cursor = "no-drop";
document.getElementById('chkbtn').value = 2;	
}

function ch3(){
$('#hvseudo').val(3);
document.getElementById('li3').style.color= "gray";	
document.getElementById('li3').style.cursor = "no-drop";
document.getElementById('chkbtn').value = 2;	
}

function ch4(){
$('#hvseudo').val(4);
document.getElementById('li4').style.color= "gray";	
document.getElementById('li4').style.cursor = "no-drop";
document.getElementById('chkbtn').value = 2;	
}

function ch5(){
$('#hvseudo').val(5);
document.getElementById('li5').style.color= "gray";	
document.getElementById('li5').style.cursor = "no-drop";
document.getElementById('chkbtn').value = 2;	
}

function ch6(){
$('#hvseudo').val(6);
document.getElementById('li6').style.color= "gray";	
document.getElementById('li6').style.cursor = "no-drop";	
document.getElementById('chkbtn').value = 2;
}

function ch7(){
$('#hvseudo').val(7);
document.getElementById('li7').style.color= "gray";	
document.getElementById('li7').style.cursor = "no-drop";
document.getElementById('chkbtn').value = 2;	
}

function ch8(){
$('#hvseudo').val(8);
document.getElementById('li8').style.color= "gray";	
document.getElementById('li8').style.cursor = "no-drop";
document.getElementById('chkbtn').value = 2;	
}
function ch9(){
$('#hvseudo').val(9);
document.getElementById('li9').style.color= "gray";	
document.getElementById('li9').style.cursor = "no-drop";
document.getElementById('chkbtn').value = 2;	
}
var dialtheta;///dial gauge calibration
function Simulate(){
	
	var a = $('#hvseudo').val();
	//c1++;
	if(a == 1){
		
		h1 = 0.5;//mm
		h1d = 1;//anim
		
	}
	if(a == 2){
		//c2++
		h2 = 1;//mm
		h2d = 2;//anim
	}
	if(a == 3){
		//c3+=5;
		h3 = 5;//mm
		h3d = 6;//anim
	}
	if(a == 4){
		//c4+=10;
		h4 = 10;//mm
		h4d = 20;//anim
	}
	if(a == 5){
		//c5+=20;
		h5 = 20;//mm
		h5d = 30;//anim
	}
	if(a == 6){
		//c6+=30;
		h6 = 30;//mm
		h6d = 40;//anim
	}
	if(a == 7){
		//c7+=50;
		h7 = 50;//mm
		h7d = 60;//anim
	}
	if(a == 8){
		//c8+=2;
		h8 = 2;//mm
		h8d = 3;//anim
	}
	if(a == 9){
		//c9+=3;
		h9 = 3;//mm
		h9d = 4;//anim
	}
	
	THeight = math.add(h1,h2,h3,h4,h5,h6,h7,h8,h9);
	//Tsim = math.add(h1d,h2d,h3d,h4d,h5d,h6d,h7d,h8d,h9d);
	
	document.getElementById('hvalue').value = THeight;
	var L = 127;///in mm
	var H = document.getElementById('hvalue').value;
	var theta = math.asin(math.divide(H,L));
	
	if(document.getElementById('chkside').value == 1){
	
	var thetad = -math.divide(math.multiply(theta,180),math.pi);///thetad is the calculated actual degree value needed for calculation 
	if(H<=100){
	var thetaAnim = thetad/1.96;
	document.getElementById('slipgauge').style.height = (THeight*1.9)+ 'px';
	if(document.getElementById('chkobj').value == 1){
	document.getElementById('bar').style.left = 9.2+"%";
	document.getElementById('obj').style.top = -8+"%";
	}
	if(document.getElementById('chkobj').value == 2){
	document.getElementById('bar').style.left = 9.2+"%";
	document.getElementById('obj').style.left = 15.2+"%";
	}
	}
	if(H>100 && H<=110){
	var thetaAnim = thetad/1.96; ///to display the animation it is needed.//2.3
	document.getElementById('slipgauge').style.height = (THeight*2)+ 'px';
	if(document.getElementById('chkobj').value == 1){
	document.getElementById('bar').style.left = 14.2+"%";
	document.getElementById('obj').style.top = 0+"%";
	}
	if(document.getElementById('chkobj').value == 2){
	document.getElementById('bar').style.left = 14.2+"%";
	document.getElementById('obj').style.left = 20.2+"%";
	}
	}
	if(H>110 && H<=120){
	var thetaAnim = thetad/1.95; ///to display the animation it is needed.//2.3
	document.getElementById('slipgauge').style.height = (THeight*2.2)+ 'px';
	if(document.getElementById('chkobj').value == 1){
	document.getElementById('bar').style.left = 14.2+"%";
	document.getElementById('obj').style.top = 0+"%";
	}
	if(document.getElementById('chkobj').value == 2){
	document.getElementById('bar').style.left = 14.2+"%";
	document.getElementById('obj').style.left = 20.2+"%";
	}
	}
	if(H>120){
	var thetaAnim = thetad/1.95; ///to display the animation it is needed.//2.3
	document.getElementById('slipgauge').style.height = (THeight*2.3)+ 'px';
	if(document.getElementById('chkobj').value == 1){
	document.getElementById('bar').style.left = 14.2+"%";
	document.getElementById('obj').style.top = 0+"%";
	}
	if(document.getElementById('chkobj').value == 2){
	document.getElementById('bar').style.left = 14.2+"%";
	document.getElementById('obj').style.left = 20.2+"%";
	}
	}
	
	document.getElementById('slipgauge2').style.height = 0 + 'px';
	}
	else if(document.getElementById('chkside').value == 2){
	//document.getElementById('slipgauge2').style.height = (THeight*2.5) + 'px';
	var thetad = math.divide(math.multiply(theta,180),math.pi);
	
	if(H<=100){
	var thetaAnim = thetad/1.96;
	document.getElementById('slipgauge2').style.height = (THeight*1.9)+ 'px';
	document.getElementById('bar').style.left = 9.2+"%";
	document.getElementById('obj').style.left = -18+"%";
	}
	if(H>100 && H<=110){
	var thetaAnim = thetad/1.96; ///to display the animation it is needed.//2.3
	document.getElementById('slipgauge2').style.height = (THeight*2)+ 'px';
	document.getElementById('bar').style.left = 9.2+"%";
	document.getElementById('obj').style.top = -18+"%";
	}
	if(H>110 && H<=120){
	var thetaAnim = thetad/1.95; ///to display the animation it is needed.//2.3
	document.getElementById('slipgauge2').style.height = (THeight*2.2)+ 'px';
	document.getElementById('bar').style.left = 5.2+"%";
	document.getElementById('obj').style.top = -15+"%";
	}
	if(H>120){
	var thetaAnim = thetad/1.95; ///to display the animation it is needed.//2.3
	document.getElementById('slipgauge2').style.height = (THeight*2.3)+ 'px';
	document.getElementById('bar').style.left = 5.2+"%";
	document.getElementById('obj').style.top = -15+"%";
	}
	document.getElementById('slipgauge').style.height = 0 + 'px';
	
	}	
	 
	 dialtheta = math.abs(thetad);
	 
	document.getElementById("bar").style.transform = "rotate("+thetaAnim+ "deg)";
	document.getElementById("obj").style.transform = "rotate("+thetaAnim+ "deg)";
	
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
	document.getElementById('refresh').disabled=false;
	document.getElementById('chkbtn').value = 1;
	if(document.getElementById('chkside').value == 1){
	document.getElementById('slipgauge').style. height = 0 +"%";
	if(document.getElementById('chkobj').value == 1){
	document.getElementById('bar').style.left = 9.2+"%";
	document.getElementById('obj').style.top = -8+"%";	
	}
	if(document.getElementById('chkobj').value == 2){
	document.getElementById('bar').style.left = 9.2+"%";
	document.getElementById('obj').style.top = -18+"%";	
	}
	}
	if(document.getElementById('chkside').value == 2){
	document.getElementById('slipgauge2').style. height = 0 +"%";
	if(document.getElementById('chkobj').value == 2){
	document.getElementById('bar').style.left = 9.2+"%";
	document.getElementById('obj').style.top = -18+"%";	
	}
	}
	THeight = 0;
	document.getElementById('hvalue').value =0;
	
	document.getElementById("bar").style.transform = "rotate("+0+ "deg)";
	document.getElementById("obj").style.transform = "rotate("+0+ "deg)";
	 nValue = '';
	$('#dial')[0].value = ' ';
	document.getElementById('ads').disabled=true;	
}

 
 /////////////////////////////////////Table Creation//////////////////////////////////////////////////////////EDIT it
 
var tabrowindex = 0;
var arr = [];

var table;



//------------------------------------------------- Table Creation -----------------------------------------------//
function CreateTable() {


    arr[0] = tabrowindex+1 ;
    arr[1] = $('#hvalue').val();
    arr[2] = dialtheta.toFixed(2);
	
   
	
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
	//removeH();
	document.getElementById('chkbtn').value = 0;
	document.getElementById('ads').disabled=false;
	
	document.getElementById('li1').style.color = "black";
	document.getElementById('li1').style.cursor = "auto";
	
	document.getElementById('li2').style.color = "black";
	document.getElementById('li2').style.cursor = "auto";
	
	document.getElementById('li3').style.color = "black";
	document.getElementById('li3').style.cursor = "auto";
	
	document.getElementById('li4').style.color = "black";
	document.getElementById('li4').style.cursor = "auto";
	
	document.getElementById('li5').style.color = "black";
	document.getElementById('li5').style.cursor = "auto";
	
	document.getElementById('li6').style.color = "black";
	document.getElementById('li6').style.cursor = "auto";
	
	document.getElementById('li7').style.color = "black";
	document.getElementById('li7').style.cursor = "auto";
	
	document.getElementById('li8').style.color = "black";
	document.getElementById('li8').style.cursor = "auto";
	
	document.getElementById('li9').style.color = "black";
	document.getElementById('li9').style.cursor = "auto";
 }