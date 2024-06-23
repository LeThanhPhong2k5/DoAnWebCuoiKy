// <!-- Js lựa chọn kiểu chuyển khoản -->

function showSecondSelect7() {
    var firstSelect = document.getElementById("choose-pay7").value;
    var secondSelectContainer = document.getElementById("select2Container7");
    var secondSelect = document.getElementById("select27");

    // Xóa các tùy chọn hiện tại
    secondSelect.innerHTML = "";

    // Khai báo biến options
    var options = [];

    // Xác định các tùy chọn dựa trên giá trị của lựa chọn đầu tiên
    if (firstSelect === "choose-pay-mobile-banking7") {
        options = ["Vietcombank", "Techcombank", "VPBank", "BIDV", "MBBank", "Agribank"];
    } else if (firstSelect === "choose-pay-atm7") {
        options = ["Visa", "Mastercard", "American Express", "JCB", "Discover"];
    } else if (firstSelect === "choose-pay-cash7") {
        options = ["Không có"];
    }

    // Populate second select with new options
    if (options.length > 0) {
        for (var i = 0; i < options.length; i++) {
            var opt = document.createElement("option");
            opt.value = options[i];
            opt.innerHTML = options[i];
            secondSelect.appendChild(opt);
        }

        // Hiển thị lựa chọn thứ 2
        secondSelectContainer.hidden = false;
    } else {
        // Ẩn lựa chọn thứ 2 nếu không có tùy chọn hợp lệ
        secondSelectContainer.hidden = true;
    }
}

  

    
    //   <!-- thông tin trong table  -->
        function saveInfo7() {
                var name = document.getElementById("custom7").value;
                var phone = document.getElementById("phone7").value;
                var address = document.getElementById("address7").value;
                var car = document.getElementById("car7").value;
                var paymentMethod = document.getElementById("choose-pay7").value;
                var bank = document.getElementById("select27").value;
                var price = document.getElementById("money7").value;

                if (!name || !phone || !address || !car || !paymentMethod || !bank) {
                    alertWarning7("Vui lòng điền đầy đủ thông tin!");
                } else {
                    if (paymentMethod === "choose-pay-cash7") {
                       paymentMethod = "Tiền mặt";
                    } else if (paymentMethod === "choose-pay-mobile-banking7") {
                       paymentMethod = "Chuyển khoản qua Ngân Hàng";
                    } else if (paymentMethod === "choose-pay-atm7") {
                       paymentMethod = "Thẻ tín dụng, thẻ ghi nợ";
                    }

                    //Kiểm tra xem trình duyệt có hỗ trợ chức năng lưu trữ dữ liệu không
                if(typeof(Storage) !== "undefined")
                    {
                        try {
                            var userInfoArray = JSON.parse(localStorage.getItem('userInfoArray')) || [];

                            let code = (userInfoArray.length + 1).toString().padStart(6, '0');
                            userInfoArray.push({ 
                                code: code,
                                name: name,
                                phone: phone,
                                address: address,
                                car: car,
                                paymentMethod: paymentMethod,
                                bank: bank,
                                price: price
                             });
            
            
                            // Lưu mảng đã cập nhật vào localStorage
                             localStorage.setItem('userInfoArray', JSON.stringify(userInfoArray));
            
                             alertSuccess7("Đặt hàng thành công");
            
                             displayInfo();

                             console.log("Thông tin đã được lưu trữ thành công");
                        }  catch(e){
                            console.log("Đã xảy ra lỗi khi lưu trữ dữ liệu");
                        }
                    }
                else {
                    console.log("Trình duyệt không hỗ trợ localStorage");
                }
                
              }
            
       }

       function alertSuccess7(message) {
         var alertBox = $('<div class="alert alert-success alert-dismissible fade show" role="alert">' + 
                         '<strong>Đặt hàng thành công!</strong> '  +
                         '</div>');
         $('#alerts7').append(alertBox);
         setTimeout(function() {
          alertBox.alert('close');
          }, 1000); 
       }

       function alertWarning7(message) {
        var alertBox = $('<div class="alert alert-warning alert-dismissible fade show" role="alert">' + 
                     '<strong>Vui lòng điền đầy đủ thông tin!</strong> ' +     
                     '</div>');
        $('#alerts7').append(alertBox);
       setTimeout(function() {
       alertBox.alert('close');
       }, 1000); 
      }

      function displayInfo() {
        // Kiểm tra xem bảng tồn tại hay không
        if (document.getElementById("infoTable")) {
            var userInfoArray = localStorage.getItem('userInfoArray');
            if (userInfoArray) {
                userInfoArray = JSON.parse(userInfoArray);
    
                var table = document.getElementById("infoTable");
                var tableBody = table.getElementsByTagName('tbody')[0];
                tableBody.innerHTML = ""; 
    
                userInfoArray.forEach(function(userInfo) {
                    var row = tableBody.insertRow(-1);
    
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    var cell7 = row.insertCell(6);
                    var cell8 = row.insertCell(7);
                    var cell9 = row.insertCell(8);
    
                    cell1.innerHTML = userInfo.code;
                    cell2.innerHTML = userInfo.name;
                    cell3.innerHTML = userInfo.phone;
                    cell4.innerHTML = userInfo.address;
                    cell5.innerHTML = userInfo.car;
                    cell6.innerHTML = userInfo.paymentMethod;
                    cell7.innerHTML = userInfo.bank;
                    cell8.innerHTML = userInfo.price;

                    var deleteBtn = document.createElement("button");
                    deleteBtn.className = "btn btn-danger btn-sm delete-btn";
                    deleteBtn.innerHTML = "Hủy đơn xe";
                    deleteBtn.onclick  = function() {
                        deleteRow(this)
                    };
                    cell9.appendChild(deleteBtn);
                });
            }
        }
        
    }
    
    // Gọi hàm hiển thị khi trang được tải
    window.onload = function() {
        displayInfo();
    };

    // Hàm xóa hàng khỏi bảng
    function deleteRow(button) {
        // Xóa hàng chứa nút "Xóa" được nhấn
        var row = button.closest('tr');
        var code = row.cells[0].innerText; // Giả sử mã đơn hàng ở cột đầu tiên
        row.remove();
 
        // Cập nhật lại dữ liệu trong localStorage
          var userInfoArray = JSON.parse(localStorage.getItem('userInfoArray'));
            userInfoArray = userInfoArray.filter(function(userInfo) {
            return userInfo.code !== code;
         });
         localStorage.setItem('userInfoArray', JSON.stringify(userInfoArray));
     }
