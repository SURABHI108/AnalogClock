setInterval(()=>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //console.log(h,m,s);

    let hh = document.getElementById('hr');
    let mm = document.getElementById('mn');
    let ss = document.getElementById('sc');

    sc.style.transform = `rotate(${s * 6}deg)`;
    mm.style.transform = `rotate(${m * 6}deg)`;
    hh.style.transform = `rotate(${h * 30}deg)`;

})