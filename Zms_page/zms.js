var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 4000);
  };
  repeater();
};
repeat();


function show1() {
  //   console.log("yo");

  //   let main_div = document.getElementById("tab2");
  //   main_div.innerHTML = "";
  let heading_1 = document.getElementById("green1");
  heading_1.setAttribute("style", "background-color: white");
  let heading = document.getElementById("green");
  heading.setAttribute(
    "style",
    "background-color: #10a310;color:white;border-radius:8px"
  );

  let pic_1 = document.getElementById("image1");
  pic_1.innerHTML = null;
  let pic1 = document.getElementById("image1");
  let img1 = document.createElement("img");
  img1.src =
    "https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_C.c9d9a766c44e0796bce6e3bdcc65d589.jpg";
  pic1.append(img1);

  let pic_2 = document.getElementById("image2");
  pic_2.innerHTML = null;
  let pic2 = document.getElementById("image2");
  let img2 = document.createElement("img");
  img2.src =
    "https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_A.06f7fa208212fb4dc92e611fdf69304e.jpg";
  pic2.append(img2);

  let pic_3 = document.getElementById("image3");
  pic_3.innerHTML = null;
  let pic3 = document.getElementById("image3");
  let img3 = document.createElement("img");
  img3.src =
    "https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_E.43c8d28a91111b0eb44831b1d040bc79.jpg";
  pic3.append(img3);

  let image_container = document.getElementById("image_container");
  image_container.append(pic1, pic2, pic3);

  let description_1 = document.getElementById("description");
  description_1.innerHTML = null;
  let description = document.getElementById("description");
  let p = document.createElement("p");
  p.innerText = `All-in-one solution to reduce operating costs over 30% via advanced vehicle monitoring and management systems`;
  description.append(p);

  let dec_long_1 = document.getElementById("description_long");
  dec_long_1.innerHTML = null;
  let dec_long = document.getElementById("description_long");
  dec_long.innerHTML = ` <div class="feature-bullets-wrapper">
      <div class="bullet-point bottom-padding-40">
        <!---->
        <div class="primary-title">Vehicle Tracking & Safety</div>
        <div class="secondary-sub-text">
        Geo-fencing, Real time alerts, immobilization to manage 24x7
        </div>
      </div>
      <div class="bullet-point">
        <!---->
        <div class="primary-title">Fuel Management</div>
        <div class="secondary-sub-text">
        Real time fuel level monitoring and fuel theft detection mechanisms
        </div>
      </div>
    </div>
    <div class="feature-bullets-wrapper">
      <div class="bullet-point bottom-padding-40">
        <!---->
        <div class="primary-title">Driver Score</div>
        <div class="secondary-sub-text">
        Improved fuel efficiency and cost benefits from better driving behavior
        </div>
      </div>
      <div class="bullet-point">
        <!---->
        <div class="primary-title">Operations Automation</div>
        <div class="secondary-sub-text">
        Automate routine operational tasks and increase uptime over 25%
        </div>
      </div>
    </div>
    <div class="feature-bullets-wrapper">
      <div class="bullet-point bottom-padding-40">
        <!---->
        <div class="primary-title">Vehicle Health Monitoring</div>
        <div class="secondary-sub-text">
        Real-time Asset health monitoring systems for reduced downtime
        </div>
      </div>
    </div>`;

  //   main_div.append(description, image_container, dec_long);
}

function show2() {
  //   console.log("yo");
  //   let main_div = document.getElementById("tab2");
  //   main_div.innerHTML = " ";
  let heading1 = document.getElementById("green");
  heading1.setAttribute(
    "style",
    "background-color: white;color: rgb(31, 31, 31);"
  );
  let heading = document.getElementById("green1");
  heading.setAttribute(
    "style",
    "background-color: #10a310;color:white;border-radius:8px"
  );

  let pic = document.getElementById("image1");
  pic.innerHTML = null;
  let pic1 = document.getElementById("image1");
  let img1 = document.createElement("img");
  img1.src =
    "https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_F.c6cae2c0c2d78e980c507982bab4c1b9.jpg";
  pic1.append(img1);

  let pic_2 = document.getElementById("image2");
  pic_2.innerHTML = null;
  let pic2 = document.getElementById("image2");
  let img2 = document.createElement("img");
  img2.src =
    "https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_B.a4d19a95cb4faa68b9c0cdd1bf6e703e.jpg";
  pic2.append(img2);

  let pic_3 = document.getElementById("image3");
  pic_3.innerHTML = null;
  let pic3 = document.getElementById("image3");
  let img3 = document.createElement("img");
  img3.src =
    "https://www.zoomcar.com/assets/component-images/ZMS_Slide-Banner_201_D.c564a1d96dd9b4b03806837bbc51ca52.jpg";
  pic3.append(img3);

  //   let image_container = document.getElementById("image_container");
  //   image_container.append(pic1, pic2, pic3);

  let description_1 = document.getElementById("description");
  description_1.innerHTML = null;
  let description = document.getElementById("description");
  let p = document.createElement("p");
  p.innerText = `Suite of connected technologies offering fleet agnostic solutions aimed at driving higher revenue through better yield management and dual fleet utilisation to expand customer base`;
  description.append(p);

  let dec_long_1 = document.getElementById("description_long");
  dec_long_1.innerHTML = null;
  let dec_long = document.getElementById("description_long");
  dec_long.innerHTML = ` <div class="feature-bullets-wrapper">
    <div class="bullet-point bottom-padding-40">
      <!---->
      <div class="primary-title">Renter Platform</div>
      <div class="secondary-sub-text">
        Customisable stack to launch station based &amp;
        free-floating keyless renter services
      </div>
    </div>
    <div class="bullet-point">
      <!---->
      <div class="primary-title">Analytics &amp; Reporting</div>
      <div class="secondary-sub-text">
        Empower decision making through advanced Data Science and
        Analytics capabilities
      </div>
    </div>
  </div>
  <div class="feature-bullets-wrapper">
    <div class="bullet-point bottom-padding-40">
      <!---->
      <div class="primary-title">Subscription Platform</div>
      <div class="secondary-sub-text">
        Whitelabel Subscription platform that works across all
        vehicle types for higher utilization
      </div>
    </div>
    <div class="bullet-point">
      <!---->
      <div class="primary-title">Real-Time Monitoring</div>
      <div class="secondary-sub-text">
        Connectivity and Real-time monitoring features to bring more
        transparency and reliability
      </div>
    </div>
  </div>
  <div class="feature-bullets-wrapper">
    <div class="bullet-point bottom-padding-40">
      <!---->
      <div class="primary-title">Dynamic Pricing</div>
      <div class="secondary-sub-text">
        Plug and play module matching demand-supply and maximizing
        ROI
      </div>
    </div>
  </div>`;
}

let btnss=document.querySelector("sumitform")
btnss.addEventListener("click",function(){
  alert("submitted")
})