function validate() {
  let fullName = document.getElementById("fullName").value;
  let phone = document.getElementById("phone").value;
  let date1 = document.getElementById("date1").value;
  let date2 = document.getElementById("date2").value;
  let date = new Date();

  if (_.isEmpty(fullName)) {
    document.querySelector(".name-404").innerHTML = "Nhập tên bạn";
  } else if (fullName.length <= 5) {
    document.querySelector(".name-404").innerHTML = "Tên quá ngắn";
  } else {
    document.querySelector(".name-404").innerHTML = "";
  }

  if (_.isEmpty(phone)) {
    document.querySelector(".phone-404").innerHTML = "Nhập số điện thoại";
  } else if (phone.length <= 8 || phone.length > 10) {
    document.querySelector(".phone-404").innerHTML =
      "Số điện thoại không hợp lệ";
  } else {
    document.querySelector(".phone-404").innerHTML = "";
  }

  var a = new Date(date1);
  var b = new Date(date2);
  var time = date.getTime();
  var time1 = a.getTime();
  var time2 = b.getTime();

//   console.log(time);
//   console.log(time1);
//   console.log(time2);

  if (time1 < time) {
    document.querySelector(".date1-404").innerHTML = "Ngày ko hợp lệ";
  } else if (time1 > time2) {
    document.querySelector(".date1-404").innerHTML =
      "Ngày đặt phải nhỏ hơn ngày trả";
  } else {
    document.querySelector(".date1-404").innerHTML = "";
  }

  if (time2 < time) {
    document.querySelector(".date2-404").innerHTML = "Ngày ko hợp lệ";
  } else if (time2 < time1) {
    document.querySelector(".date2-404").innerHTML =
      "Ngày trả xe phải lớn hơn ngày thuê";
  } else {
    document.querySelector(".date2-404").innerHTML = "";
  }

  let d1 = new Date(date1);
  let d2 = new Date(date2);

  let day1 = d1.getDate();
  let day2 = d2.getDate();

  var tong = day2 - day1;
  if (tong >= 1 && time1 >= time && time1 < time2 && time2 >= time) {
    document.querySelector(".thue").innerHTML = tong;
  } else {
    document.querySelector(".thue").innerHTML = "";
  }

  let car = document.getElementById("cars");
  for (var i = 0; i < car.length; i++) {
    if (i === 0 && time1 >= time && time1 < time2 && time2 >= time) {
      document.querySelector(".pay").innerHTML = tong * 400000 + "VND";
    } else if (
      i == 1 &&
      time1 >= time &&
      time1 < time2 &&
      time2 >= time >= day
    ) {
      document.querySelector(".pay").innerHTML = tong * 800000 + "VND";
    } else if (i == 2 && time1 >= time && time1 < time2 && time2 >= time) {
      document.querySelector(".pay").innerHTML = tong * 1000000 + "VND";
    } else {
      document.querySelector(".pay").innerHTML = "";
    }
  }

  /*
       let d = new Date();
       let year = d.getFullYear();
       let month = d.getMonth() + 1;
       let day = d.getDate();
       const sumd = year + month +day;
       
       let d1 = new Date(date1);
       let year1 = d1.getFullYear();
       let month1 = d1.getMonth() + 1;
       let day1 = d1.getDate();
       const sumd1 = year1 + month1 + day1;
        if(sumd1 < sumd){
            document.querySelector(".date1-404").innerHTML = "Ngày ko hợp lệ"
        }else{
            document.querySelector(".date1-404").innerHTML = ""

        }
        

      let d2 = new Date(date2);
       let year2 = d2.getFullYear();
       let month2 = d2.getMonth() + 1;
       let day2 = d2.getDate();
       const sumd2 = year2 + month2 + day2;
       if(sumd2 < sumd){
      document.querySelector(".date2-404").innerHTML = "Ngày ko hợp lệ"
    }else{
        document.querySelector(".date2-404").innerHTML = ""
    }
    var tong = day2 -day1;
    document.querySelector(".thue").innerHTML= tong
     
    
     let car = document.getElementById("cars");
        for(var i = 0; i < car.length; i++){
        if(i === 0 &&  day1 >= day && day1 < day2 && day2 >= day ){
            document.querySelector(".pay").innerHTML = tong* 400000 + "VND";
        } else if (i == 1 &&  day1 >= day && day1 < day2 && day2 >= day ){
            document.querySelector(".pay").innerHTML = tong* 800000 + "VND"

        }
        else if(i == 2 &&  day1 >= day && day1 < day2 && day2 >= day){
            document.querySelector(".pay").innerHTML = tong* 1000000 + "VND";
        }
        else{
            document.querySelector(".pay").innerHTML = "";
        }
    }*/
}

const form = document.querySelector("#form");
form.addEventListener("change", function (e) {
  e.preventDefault();
  validate();
});
