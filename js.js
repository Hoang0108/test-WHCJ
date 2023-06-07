var isLightMode = true;
function changeBG() {
    var container = document.getElementById("change");
    isLightMode = !isLightMode;
    if (isLightMode) {
        container.style.backgroundColor = "#ffffff"; // Màu nền sáng
    } else {
        container.style.backgroundColor = "#000000"; // Màu nền tối
    }
}

function kiemtra() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "") {
        document.getElementById("errorName").innerHTML = "Không được để trống tên";
        return false;
    } else {
        document.getElementById("errorName").innerHTML = "";
    }

    if (email === "") {
        document.getElementById("errorEmail").innerHTML = "Không được để trống Email";
        return false;
    } else {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("errorEmail").innerHTML = "Email không đúng định dạng";
            return false;
        } else {
            document.getElementById("errorEmail").innerHTML = "";
        }
    }
    return true;
}
