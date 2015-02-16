document.getElementById('smallImage').style.display = "none";
var user1 = window.localStorage.setItem('user');
if(user1 == null || user == undefined || user == 'undefined' ){
    document.getElementById('login_table').style.display = "block";
    document.getElementById('links').style.display = "none";
}else{
    document.getElementById('login_table').style.display = "none";
    document.getElementById('links').style.display = "block";
}
function register(){
    

    var ajax = new XMLHttpRequest();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var qstr = "name="+name+"&email="+email;
    document.getElementById('msg').innerHTML = '';
    ajax.open("GET","http://weblab.cs.uml.edu/~rvani/MA/registeruser.php?"+qstr,true);
    ajax.send();
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4 && (ajax.status==200||ajax.status==0)){
            
            var data = ajax.responseText;
            if(data == "Email has been sent"){
				alert("An email has been sent to you for the password.");
                }else{
                alert("Please Try again!!!");
            }
        }
    }
}
function login(){
    var ajax = new XMLHttpRequest();
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var qstr = "pass="+pass+"&email="+email;
    //alert(qstr);
    document.getElementById('msg').innerHTML = '';
    ajax.open("GET","http://weblab.cs.uml.edu/~rvani/MA/MLogin.php?"+qstr,true);
    ajax.send();
    ajax.onreadystatechange=function(){
            if(ajax.readyState==4 && (ajax.status==200||ajax.status==0)){
                    var data =  ajax.responseText;
                    alert(data);
                    if(data=="Welcome"){
                       window.localStorage.setItem('user',email);
                       document.getElementById('login_table').style.display = "none";
                       document.getElementById('links').style.display = "block";
                    }
					else{
						alert("An error occured while login");
                    }
            }
    }   
}
function Photo(){
var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // Cordova is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      // console.log(imageURI);

      // Get image handle
      //
     // var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }
}