const h1 = document.getElementById('1');
const x = document.querySelectorAll('.close');
const sBiru = document.querySelector('input[name=sBiru]');
const sHijau = document.querySelector('input[name=sHijau]');
const sMerah = document.querySelector('input[name=sMerah]');

const acakWarna = document.createElement('button');
const textAcakWarna = document.createTextNode('acakWarna');

    acakWarna.appendChild(textAcakWarna);
    acakWarna.setAttribute('type', 'button');
    h1.after(acakWarna);

    acakWarna.addEventListener('click' ,function(){
        const r = Math.round(Math.random()*225 + 0);
        const g = Math.round(Math.random()*225 + 0);
        const b = Math.round(Math.random()*225 + 0);
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    });

    
    sMerah.addEventListener('input', function(){
            const r = sMerah.value;
            const g = sHijau.value;
            const b = sBiru.value;
            document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
            
    });
    
    sHijau.addEventListener('input', function(){
            const r = sMerah.value;
            const g = sHijau.value;
            const b = sBiru.value;
            document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
            
    });

    sBiru.addEventListener('input', function(){
            const r = sMerah.value;
            const g = sHijau.value;
            const b = sBiru.value;
            document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
            
    });
       