console.log('correctoDev');

document.querySelector("#boton").addEventListener('click', traerDatos);
function traerDatos()
{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','cim_subject_areas_library.json', true);
    xhttp.send();
    xhttp.onreadystatechange=function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML='';

            for(let item of datos)
            {
                res.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.publisher}</td>
                    </tr>    

                `
            }
        }
    }

}
