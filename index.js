async function login()
{

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if(username==""||password=="")
  {
    alert("Please Fill All the fields");
  }
  else
  {
    $('body').loadingModal('show');

    if(username==='jigu1997' && password==='Jigu@174285396')
    {
      $('body').loadingModal('hide');
      window.location.href = 'dashboard.html';
    }
    else
    {
      $('body').loadingModal('hide');
      alert('Invalid Credentials');
    }
    
  }
}

function loading()
{
    $('body').loadingModal({
    position: 'auto',
    text: 'Signing In...',
    color: '#fff',
    opacity: '0.8',
    backgroundColor: 'rgb(0,0,0)',
    animation: 'wave'
  });
}
