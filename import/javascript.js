



let $=document


const hourse_time = $.querySelector('.hours_Show');
const minutse_time = $.querySelector('.minutse_show');
const secend_time = $.querySelector('.secend_show');


function updateTime() {
    let date = new Date();
    let GetHourse = date.getHours();
    let GetMintse = date.getMinutes();
    let GetSecend = date.getSeconds();

    // Update the display  
    hourse_time.innerHTML = GetHourse < 10 ? '0' + GetHourse : GetHourse;
    minutse_time.innerHTML = GetMintse < 10 ? '0' + GetMintse : GetMintse;
    secend_time.innerHTML = GetSecend < 10 ? '0' + GetSecend : GetSecend;
}

updateTime()


setInterval(updateTime,1000)



