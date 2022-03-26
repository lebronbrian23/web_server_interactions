//LAB 9-DATA STORAGE: INDEX PAGE
//alert("home");//DELETE AFTER CONFIRMING CONNECTION

window.onload = function(){
    //variable declaration
    var form =  document.forms.infoForm;
    var name;
    var color;
    var deleteBtn = document.getElementById('btnDel');
    
    
    //variable assignment when the f_name is null a default name is set
    var name = (localStorage.getItem('f_name') === null) ? 'Welcome!': 'Welcome ' + localStorage.getItem('f_name')+'!';
   
     //variable assignment when the f_name is null a default background color is set
    var backgroundColor = (localStorage.getItem('f_color') === null ) ? '#c0c0c0' : localStorage.getItem('f_color')
        
        
    document.getElementById('newMsgBox').innerHTML = name  
    
    document.body.style.backgroundColor = backgroundColor;
    
    
    
    //fucntion to process the form
    function processForm(){
        name = form.f_name.value;
        color = form.f_color.value;
        
        localStorage.setItem('f_name' , name);
        localStorage.setItem('f_color' , color);
    
    }
    
    //function to delete stored data from local storage
    function deleteStoredData(){
        localStorage.clear();
        location.reload();
    }
    
    //listeners
    form.onsubmit = processForm;
    deleteBtn.onclick = deleteStoredData;
    
}