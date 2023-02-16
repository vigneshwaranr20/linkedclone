var json = {"data" : [{
		"name": "fayaz",
		"height":"165 cm",
		"weight" :"65 kg",
		"age" : "21"
	}, {
	    "name": "siva",
		"height":"160 cm",
		"weight" :"55 kg",
		"age" : "23"
	}, {
		"name": "enamul",
		"height":"170 cm",
		"weight" :"755 kg",
		"age" : "21"
	}, {
		"name": "rajesh",
		"height":"170 cm",
		"weight" :"85 kg",
		"age" : "50"
	}, {
		"name": "mani",
		"height":"80 cm",
		"weight" :"35 kg",
		"age" : "10"	
	}, {
		"name": "logesh",
		"height":"165 cm",
		"weight" :"95 kg",
		"age" : "42"
	}, {
		"name": "raj",
		"height":"55 cm",
		"weight" :"15 kg",
		"age" : "2"	
	}, {
		"name": "anu",
		"height":"150 cm",
		"weight" :"70 kg",
		"age" : "25"	
	}, {
		"name": "anil",
		"height":"172 cm",
		"weight" :"75 kg",
		"age" : "25"	
	}, {
		"name": "antony",
		"height":"172 cm",
		"weight" :"79 kg",
		"age" : "24"
	}]
};	 
var input = [];
document.write("<table id=\"ageTable\" border==\"1\" width=50%><tr>");
for (input in json.data[0]) {
   document.write('<td>' + input + '</td>');
}
document.write("</tr>");
for (var i = 0; i < json.data.length; i++) {
   document.write('<tr>');
   for (input in json.data[i]) {
   document.write('<td>' + json.data[i][input] + '</td>');
  }
   document.write('</tr>');
}
document.write("</table>");

function color() {
    var table = document.getElementById("ageTable");
    for (var i = 0; i < table.rows.length; i++) {
      var age = parseInt(table.rows[i].cells[3].innerHTML);
      if (age >30)
      {
        table.rows[i].style.backgroundColor = "purple";
      }
      else if (age > 10) {
        table.rows[i].style.backgroundColor = "blue";
      }
      else if (age <=10) {
        table.rows[i].style.backgroundColor = "yellow";
      }
      else
       {
        table.rows[i].style.backgroundColor = "white";
      }
    }
  }
  window.onload = color();












