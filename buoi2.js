// truy cập phần tử html qua id
// thay đổi nội dung html (innerHTML)
let theH1 = document.getElementById("demo");

// thay đổi css
theH1.style.backgroundColor="orange";
theH1.style.color="black";
theH1.style.textAlign="center";

// lưu trữ nội dung trong html
let content = theH1.innerHTML; //nội dung ?

theH1.innerHTML += " lớp học";

// tương tác với thẻ img 
let theImg = document.getElementById("img");
theImg.src = "https://scontent.xx.fbcdn.net/v/t1.15752-9/450495094_488435380403590_3269363979055558605_n.jpg?stp=dst-jpg_s206x206&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGeU0hVgPiIFJThJRgCuvtiAmGAEwYmrU0CYYATBiatTcvNoHVpZVCnTktbNIqYdM2mmFW1oyjWNzyb9mhuK0KQ&_nc_ohc=BoeEbgETWTcQ7kNvgEGUEJL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGMc6gZXll0zfpvre8nZqn4kRcB9tbbMZtJpKzTQPClJw&oe=66C5C6DA"


document.title = "trang demo DOM"
//thay đổi màu nền, màu chữ, căn giữa cho thẻ p
let theP= document.getElementById("p");
theP.style.color="yellow";
theP.style.backgroundColor="black";
theP.style.textAlign="center";