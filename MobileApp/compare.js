$(function(){
 $.getDataFromCloud = function(lattitude,longitude){
            
            
             var minLat = lattitude - 0.000784806;
            var maxLat = lattitude + 0.000784806;
            var minLon = longitude - 0.000784806;
            var maxLon = longitude + 0.000784806;
            alert(minLat)
            alert(maxLat)
            alert(minLon)
            alert(maxLon)
            
            var ajax = new XMLHttpRequest();
            var qstr = "minlat="+minLat+"&maxlat="+maxLat+"&minlon="+minLon+"&maxlon="+maxLon;
            alert(qstr);
            ajax.open("GET","http://weblab.cs.uml.edu/~sraje/XplatformMobileDev/cloud/getDealData.php?"+qstr,true);
            ajax.send();
            alert("hjiuui");
            ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && (ajax.status==200||ajax.status==0)){
                    alert(ajax.status);
                    alert(ajax.responseText);
                    eval('var dataSet = ' + ajax.responseText + ';');
                    var display = "<table><tr><th>Dealer Name</th><th>Car Name</th><th>Car Model</th><th>Buying Option 1</th><th>Buying Option 2</th><th>Lease</th></tr>";
                    for(var i in dataSet){
                        display += "<tr><td>";
                        display += dataSet[i].Dealer_Name+"</td>";
                        display += "<td>"+dataSet[i].carname+"</td>";
                        display += "<td>"+dataSet[i].carmodel+"</td>";
                        display += "<td>"+dataSet[i].bamt1+"</td>";
                        display += "<td>"+dataSet[i].bamt2+"</td>";
                        display += "<td>"+dataSet[i].lamt+"</td></tr>";
                        
                        
                        
                    }
                    display += "</table>"; 
                    $("#comparison").html(display);
                }
           }
          
//            $.ajax({
//                url:'http://weblab.cs.uml.edu/~sraje/XplatformMobileDev/cloud/getDealData.php',
//                type:'GET',
//                data:{
//                    minlat:minLat,
//                    maxlat:maxLat,
//                    minlon:minLon,
//                    maxlon:maxLon
//                },
//                dataType:'json',
//                success:function(data){
//                    alert(data);
//                }
//                
//                
//                
//                
//                
//                
//            });
            
            
            
     }       
    $.getGeoNcloudData = function (){
            var lattitude,longitude;
            navigator.geolocation.getCurrentPosition((function(position){
                    lattitude = position.coords.latitude ;
                    longitude = position.coords.longitude; 
                    $.getDataFromCloud(lattitude,longitude);
                }), function(err){alert('hiiii')});
    }
    alert("HI");
    $.getGeoNcloudData();

});