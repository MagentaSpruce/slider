      const slider = document.getElementById("slider");
      const active = document.getElementById("active");
      const line1 = document.getElementById("line1");
      const line2 = document.getElementById("line2");
      const line3 = document.getElementById("line3");
      const line4 = document.getElementById("line4");

      line1.onclick = function () {
        slider.style.transform = "translateX(0)";
        active.style.top = "0px";
      };
      line2.onclick = function () {
        slider.style.transform = "translateX(-25%)";
        active.style.top = "8rem";
      };
      line3.onclick = function () {
        slider.style.transform = "translateX(-50%)";
        active.style.top = "16rem";
      };
      line4.onclick = function () {
        slider.style.transform = "translateX(-75%)"; //this all makes the slide bar change the slider text content on click - depending on where the slide bar is clicked the content will change
        active.style.top = "24rem";
      };
