var n_day = ['SUN', 'MON', 'TUS', 'WED', 'THR', 'FRI', 'SAT'];
function re_time() {
  setTimeout("re_time()", 1000);
  nt = new Date();
  n_hour = nt.getHours(); //時
  n_min = nt.getMinutes();//分
  n_sec = nt.getSeconds();//秒 65

  n_year = nt.getFullYear();//年
  n_moth = nt.getMonth();
  n_date = nt.getDate();
  d_item = nt.getDay();

  function chk0(num) {
    return (num < 10) ? "0" + num : num;
  }

  document.getElementById("clk2-time").textContent = `${chk0(n_hour)}:${chk0(n_min)}:${chk0(n_sec)}`;
  document.getElementById("clk2-date").textContent = `${n_year}-${n_moth + 1}-${n_date} ${n_day[d_item]}`;

  setInterval(function(){

  },1000);
}
re_time();