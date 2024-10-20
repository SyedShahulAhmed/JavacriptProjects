const counter = document.querySelectorAll('.count')

counter.forEach((counter)=>{
    counter.innerHTML = '0';
    addcount();
function addcount(){
    let cur_num = +counter.innerHTML;
    const data = counter.getAttribute("cell")
    const add = data/15
    cur_num = Math.ceil(cur_num + add)

    if(cur_num < data){
        counter.innerHTML = cur_num
        setTimeout(addcount,100)
    }
    else{
        counter.innerHTML = data;
    }
}
});