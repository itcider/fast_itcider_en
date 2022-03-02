/*
skin name : fast itcider (en version)
version : v3.0
author : itcider.com
website : itcider.com
license : itcider license
warning :
Comments cannot be edited or deleted
fi skin phrase cannot be deleted
An unlimited number of skins can be applied to the site
Redistribution or unauthorized use of code is strictly prohibited
Distributable only on the itcider official website
If you do not follow the above precautions, you will not be able to use it.
*/
function clip(){

	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
}
	
	

$().ready(function () {
            $("#urlcopied").click(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center-center',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'url copied!'
                })
            });
        });

        /*
skin name : fast itcider (en version)
version : v3.0
author : itcider.com
website : itcider.com
license : itcider license
warning :
Comments cannot be edited or deleted
fi skin phrase cannot be deleted
An unlimited number of skins can be applied to the site
Redistribution or unauthorized use of code is strictly prohibited
Distributable only on the itcider official website
If you do not follow the above precautions, you will not be able to use it.
*/