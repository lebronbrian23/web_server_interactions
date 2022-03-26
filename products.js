//LAB 9-DATA STORAGE: PRODUCTS PAGE
//alert("products");//DELETE AFTER CONFIRMING CONNECTION
window.onload = function(){
    
    //variable assignment when the f_name is null a default name is set
    var name = (localStorage.getItem('f_name') === null) ? 'Welcome!': 'Welcome ' + localStorage.getItem('f_name')+'!';
   
     //variable assignment when the f_name is null a default background color is set
    var backgroundColor = (localStorage.getItem('f_color') === null ) ? '#c0c0c0' : localStorage.getItem('f_color')
        
        
    document.getElementById('newMsgBox').innerHTML = name  
    
    document.body.style.backgroundColor = backgroundColor;
    
}