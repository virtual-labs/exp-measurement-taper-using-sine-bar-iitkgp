
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



var dialtheta;
function Simulate(){
	
	document.getElementById('hvalue').value = document.getElementById('customRange').value;
	var L = 127;///in mm
	var H = document.getElementById('hvalue').value;
	var theta = math.asin(math.divide(H,L));
	
	if(document.getElementById('chkside').value == 1){
	document.getElementById('slipgauge').style.height = document.getElementById('customRange').value + '%';
	var thetad = -math.divide(math.multiply(theta,180),math.pi);
	}
	else if(document.getElementById('chkside').value == 2){
	document.getElementById('slipgauge2').style.height = document.getElementById('customRange').value + '%';
	var thetad = math.divide(math.multiply(theta,180),math.pi);
	}	
	 
	 dialtheta = math.abs(thetad);
	 
	document.getElementById("bar").style.transform = "rotate("+thetad+ "deg)";
	document.getElementById("obj").style.transform = "rotate("+thetad+ "deg)";
	
	if(document.getElementById('chkside').value == 1){
	document.getElementById("obj").style.transformOrigin="-4% 40%";
	document.getElementById("bar").style.transformOrigin="10% 40%";
	}
	
	else if(document.getElementById('chkside').value == 2){
	document.getElementById("obj").style.transformOrigin="110% 40%";
	document.getElementById("bar").style.transformOrigin="90% 40%";
	}
	
	
	
}

function removeH(){
	if(document.getElementById('chkside').value == 1){
	document.getElementById('slipgauge').style. height = 0 +"%";
	}
	if(document.getElementById('chkside').value == 2){
	document.getElementById('slipgauge2').style. height = 0 +"%";
	}
	document.getElementById('customRange').value =0;
	
	document.getElementById("bar").style.transform = "rotate("+0+ "deg)";
	document.getElementById("obj").style.transform = "rotate("+0+ "deg)";
	document.getElementById('dial').value =" ";
	
	
	
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