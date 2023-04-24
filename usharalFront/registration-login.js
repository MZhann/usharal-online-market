function selected(clicked_id){
    if(clicked_id==1){
        document.getElementById(clicked_id).style.color='orange';
        document.getElementById('2').style.color='black';
        document.getElementById(clicked_id).style.borderBottom='2px solid orange';
        document.getElementById('2').style.borderBottom='none';
        document.getElementsByClassName('registration')[0].style.display='none';
        document.getElementsByClassName('vxod')[0].style.display='unset';

    }else if(clicked_id==2){
        document.getElementById(clicked_id).style.color='orange';
        document.getElementById('1').style.color='black';
        document.getElementById(clicked_id).style.borderBottom='2px solid orange';
        document.getElementById('1').style.borderBottom='none';
        document.getElementsByClassName('vxod')[0].style.display='none';
        document.getElementsByClassName('registration')[0].style.display='unset';
    }
    else{
        document.getElementById('1').style.display='none';
        document.getElementById('2').style.display='none';
        document.getElementsByClassName('vxod')[0].style.display='none';
        document.getElementsByClassName('registration')[0].style.display='none';
        document.getElementsByClassName('forgot-password')[0].style.display='unset';
    }

} 

function goBack(){
    document.getElementById('1').style.display='unset';
    document.getElementById('2').style.display='unset';
    document.getElementsByClassName('forgot-password')[0].style.display='none';
    document.getElementsByClassName('vxod')[0].style.display='unset';



}