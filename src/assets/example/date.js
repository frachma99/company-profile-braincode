
function myFunction() {
  	var time = "2020-09-01"
    var new_date = new Date()
    var ms_one_day = 1000 * 60 * 60 * 24;
    var date_array = time.split('-')
    var convert_split = new Date(date_array[0],date_array[1],date_array[2])
    
    var date_format = new Date(time)
   
    var ms_hitung = (new_date - date_format) 
    var hasil = (ms_hitung / ms_one_day)
    
    var hasil_date = new Date(ms_hitung)
    
  document.getElementById("split").innerHTML = "split: " + date_array;
  document.getElementById("split_convert").innerHTML = "split_convert: " + convert_split;
  document.getElementById("date_format").innerHTML = "date_format: " + date_format;
  document.getElementById("date_now").innerHTML = "date_now: " + new_date;
  document.getElementById("ms_one_day").innerHTML = "ms_one_day: " + ms_one_day;
  document.getElementById("ms_hitung").innerHTML = "ms_hitung: " + ms_hitung;
  
  
  document.getElementById("hasil").innerHTML = "hasil: " + hasil.toFixed(0) + " days remaining";
  
  document.getElementById("hasil_date").innerHTML = "hasil_date: " + hasil_date + " - remaining";
}
