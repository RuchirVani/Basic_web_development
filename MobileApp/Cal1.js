var email = window.localStorage.getItem('user');
if(email === null || user === undefined){
    document.getElementById('compare_a').style.display = "none";
}else{
       document.getElementById('compare_a').style.display = "block";
}
$.getGeoNcloudData = function (){
            var lattitude,longitude;
            navigator.geolocation.getCurrentPosition((function(position){
                    lattitude = position.coords.latitude ;
                    longitude = position.coords.longitude; 
                    document.getElementById('#lon').innerHTML=longitude;
					document.getElementById('#lan').innerHTML=lattitude;
                }), function(err){alert("Error in loding your location")});
    }
    $.getGeoNcloudData();

$('#submit').click(function(){
        $('#msg').html('');
					var store=$('#store').val();
					var carid=$('#car').val()
					var cCost = Number($('#cost').val());
                    var dwnPayment = Number($('#dwn_pymt').val());
                    var estdMlDB = Number($('#estdMlDB').val());
                    //var estdMlDL = Number($('#estdMlDB').val());
                    var period = Number($('#period').val());
                    var amtFn1 = Number($('#amt_fn_b1').val());
                    var amtFn2 = Number($('#amt_fn_b2').val());
                    var airBFirst = Number($('#airBFirst').val())/100;
                    var airBSecond = Number($('#airBSecond').val())/100;
                    var MlPrL = Number($('#MlPrL').val());
                    var dlrAddnMlPrL = Number($('#dlrAddnMlPrL').val());
                   
                                       
                    $.calMnthyPay = function (I,PV){
                        
                        return ( I * Math.pow((1 + I),period) * (cCost - dwnPayment - PV) / (Math.pow((1 + I),period) - 1));
                    }
                    $.calMnthyPayNoIntro = function(PV) {
                        
                        return ((cCost - dwnPayment - PV) / period );
                    }
                    $.showMnthyPay = function(a1,a2,a3){
                        
                        $($('#mnth_pymt').children().get(1)).html(a1.toFixed(2))
                        $($('#mnth_pymt').children().get(2)).html(a2.toFixed(2))
                        $($('#mnth_pymt').children().get(3)).html(a3.toFixed(2))
                    }
                    $.show_Total_Mnthy_Pay = function(a1,a2,a3){
                        
                        $($('#ttl_mnth_pymt').children().get(1)).html((a1*period).toFixed(2))
                        $($('#ttl_mnth_pymt').children().get(2)).html((a2.toFixed(2)*period).toFixed(2))
                        $($('#ttl_mnth_pymt').children().get(3)).html((a3.toFixed(2)*period).toFixed(2))
                    }
                    $.show_Total_Own_Cost = function(a1,a2,a3,a4,a5){
                        
                        $($('#ttl_own_cst').children().get(1)).html(a1.toFixed(2))
                        $($('#ttl_own_cst').children().get(2)).html(a2.toFixed(2))
                        $($('#ttl_own_cst').children().get(3)).html(a3.toFixed(2))
                        $($('#ttl_own_cst').children().get(4)).html(a4.toFixed(2))
                        $($('#ttl_own_cst').children().get(5)).html(a5.toFixed(2))
                    }
                    $.show_Cost_Miles_Driven = function(a1,a2,a3,a4,a5){
                        
                        $($('#cst_ml').children().get(1)).html(a1.toFixed(2))
                        $($('#cst_ml').children().get(2)).html(a2.toFixed(2))
                        $($('#cst_ml').children().get(3)).html(a3.toFixed(2))
                        $($('#cst_ml').children().get(4)).html(a4.toFixed(2))
                        $($('#cst_ml').children().get(5)).html(a5.toFixed(2))
                    }
                    $.show_Cost_Montly_Owned = function(a1,a2,a3,a4,a5){
                        
                        $($('#cst_mnth').children().get(1)).html(a1.toFixed(2))
                        $($('#cst_mnth').children().get(2)).html(a2.toFixed(2))
                        $($('#cst_mnth').children().get(3)).html(a3.toFixed(2))
                        $($('#cst_mnth').children().get(4)).html(a4.toFixed(2))
                        $($('#cst_mnth').children().get(5)).html(a5.toFixed(2))
                    }
                    $.show_Resid_Cost_Val = function(a1,a2){
                        
                        $($('#buy_cst').children().get(1)).html(a1.toFixed(2))
                        $($('#buy_cst').children().get(2)).html(a2.toFixed(2))
                    }
                    $.show_Resid_Cost_Mil_Driven = function(a1,a2){
                        
                        $($('#buy_cst_ml').children().get(1)).html(a1.toFixed(2))
                        $($('#buy_cst_ml').children().get(2)).html(a2.toFixed(2))
                    }
                    $.show_Resid_Cost_Month_Owned = function(a1,a2){
                        
                        $($('#buy_cst_mnth').children().get(1)).html(a1.toFixed(2))
                        $($('#buy_cst_mnth').children().get(2)).html(a2.toFixed(2))
                    }
       $.savedata = function(email,store,lattitude,longitude,buy1,buy2,lease){
            
            var ajax = new XMLHttpRequest();
            var qstr = "$email="+email+"&store="+store+"&lat="+lattitude+"&lon="+longitude+"&buy1="+buy1+"&buy2="+buy2+"&lease="+lease+"$=carid"+carid;
            //alert(qstr);
            ajax.open("GET","http://weblab.cs.uml.edu/~rvani/MA/savingdeal.php?"+qstr,true);
            ajax.send();
            ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && (ajax.status==200||ajax.status==0)){
                    alert(ajax.status);
                    alert(ajax.responseText);
					data=ajax.responseText;
                    alert(data);
                    if(data="){
							alert("Sucessfully");
                            document.getElementById('login').click();
                    }else{
							alert("An error occured while string the data");
//                          
                    }
                }
           }
            
            
            
        }
        $.getGeo = function (){
            navigator.geolocation.getCurrentPosition((function(position){
                    lattitude = position.coords.latitude ;
                    longitude = position.coords.longitude; 
                    alert(lattitude);
                    alert(longitude);
                    $.saveDataonCloud(email,store,lattitude,longitude,totalOwnCostBFirst,totalOwnCostBSecond,total_Own_Cost_B_L);
                }), function(err){alert("Error in loading")});
        }
        
                    var monthlyPayBFirst = (airBFirst != 0) ? $.calMnthyPay(airBFirst/12,amtFn1) : $.calMnthyPayNoIntro(amtFn1);
                    var monthlyPayBSecond = (airBSecond != 0) ? $.calMnthyPay(airBSecond/12,amtFn2) : $.calMnthyPayNoIntro(amtFn2);
                    var monthlyPayL = cCost/200;
                    $.showMnthyPay(monthlyPayBFirst,monthlyPayBSecond,monthlyPayL);
                    $.show_Total_Mnthy_Pay(monthlyPayBFirst,monthlyPayBSecond,monthlyPayL);
                    
                    //Calculating Estimeted Added miles....
                    var estdAddMLPeriod = (estdMlDB-MlPrL)*(period/12)*dlrAddnMlPrL;
                    
                    //Calculating Residual price
                    var residualPeriod = cCost*(1 - 0.146666*(period/12));
                    $('#residualPeriod').html(residualPeriod);
                    
                    //Calucalting Total Ownership cost
                    var totalOwnCostBFirst = monthlyPayBFirst*period + dwnPayment;
                    var totalOwnCostBSecond = monthlyPayBSecond*period + dwnPayment;
                    var totalOwnCostL = monthlyPayL*period + dwnPayment + estdAddMLPeriod;
                    var totalOwnCostBML = monthlyPayL*period + dwnPayment + estdAddMLPeriod + residualPeriod;
                    var total_Own_Cost_B_L = monthlyPayL*period + dwnPayment + residualPeriod;
                    $.show_Total_Own_Cost(totalOwnCostBFirst,totalOwnCostBSecond,totalOwnCostL,totalOwnCostBML,total_Own_Cost_B_L);
                    
                    //Calculating Cost per mile
                    var totalMilePerCost = estdMlDB*period/12;
//                    var ttl_mls_dr_l = estdMlDL*period/12;
                    var CostPerMileBFirst = totalOwnCostBFirst/totalMilePerCost;
                    var CostPerMileBSecond = totalOwnCostBSecond/totalMilePerCost;
                    var CostPerMileMlL = totalOwnCostL/totalMilePerCost;
                    var costPerMileCostB_M_L = totalOwnCostBML/totalMilePerCost;
                    var costPerMileCostB_L = total_Own_Cost_B_L/totalMilePerCost;
                    $.show_Cost_Miles_Driven(CostPerMileBFirst,CostPerMileBSecond,CostPerMileMlL,costPerMileCostB_M_L,costPerMileCostB_L);
                    
                    //Calculating per month owned
                    var costPerMonthOwnedBFirst = totalOwnCostBFirst/period;
                    var costPerMonthOwnedBSecond = totalOwnCostBSecond/period;
                    var costPerMonthL = totalOwnCostL/period;
                    var costPerMonthCostB_M_L = totalOwnCostBML/period;
                    var costPerMonthCostB_L = total_Own_Cost_B_L/period;
                    $.show_Cost_Montly_Owned(costPerMonthOwnedBFirst,costPerMonthOwnedBSecond,costPerMonthL,costPerMonthCostB_M_L,costPerMonthCostB_L);
                    
                    //Calculating car cost at residual value
                    var CostResidualValueBFirst = totalOwnCostBFirst - residualPeriod;
                    var CostResidualValueBSecond = totalOwnCostBSecond - residualPeriod;
                    $.show_Resid_Cost_Val(CostResidualValueBFirst,CostResidualValueBSecond);
                    
                    var CostResidualValuePerMileBFirst = CostResidualValueBFirst / (estdMlDB*(period/12));
                    var CostResidualValuePerMileBSecond = CostResidualValueBSecond / (estdMlDB*(period/12));
                    $.show_Resid_Cost_Mil_Driven(CostResidualValuePerMileBFirst,CostResidualValuePerMileBSecond);
                    
                    var CostResidualValuePerMonthBFirst = (CostResidualValueBFirst / (estdMlDB/12))*period;
                    var CostResidualValuePerMonthBSecond = (CostResidualValueBSecond / (estdMlDB/12))*period;
                    $.show_Resid_Cost_Month_Owned(CostResidualValuePerMonthBFirst,CostResidualValuePerMonthBSecond);
        $.getGeo();
        //while(lattitude === 0 || longitude === 0){}
        
       

         
        
            
    })
