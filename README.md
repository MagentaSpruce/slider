# slider
Part of my 1 clone per day project.
This project is centered around building a copy of a different webpage each day with the focus on practice and on learning & discovering new properties and features being used in Web Dev.

This project is centered around a simple UI JavaScript slider which cycles between different divs using a slide bar on the side of the screen.

//Gains:
1) Better understanding of the display: infline-flex property
2) Practice constructing HTML/CSS slider
3) Practice implementing slider functionality using JavaScript

//Improvements: 
1) This page was laid out in a semi-responsive way. The design could be improved for better responsiveness. 
2) Media queries.
3) Styling improvements

********************Interesting Project Code Below**************************

```CSS
.controller {
  width: 1px;
  height: 32rem;
  display: block;
  background: #c0c0c0;
  position: absolute;
  top: 55%;
  right: 5rem;
  transform: translateY(-50%); /*adds white line*/
}

#line1,
#line2,
#line3,
#line4 {
  height: 8rem;
  width: 1rem;
  cursor: pointer;
  transform: translateX(-50%);
  /*background: red;/*shows all 4 lines together, without this only see the one white vertical line*/
}

#active {
  /*this makes the bar for the white line so you have a slider*/
  width: 0.5rem;
  height: 8rem;
  border-radius: 1rem;
  background: #fff;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  transition: all 0.5s;
}
```

This is the CSS used for creating slider UI. Four lines are used so that each line can have a click event added on a different point. The controller makes the overall line of 32 rems and then each of the lines line1-line4 are 8rem each, so each line takes up 25% of the total length of controller

```JavaScript
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
        slider.style.transform = "translateX(-75%)"; 
        active.style.top = "24rem";
      };
```

This is the JS for making the slider have functionality. Each rendition runs as follows: 
The user clicks on a point within the bounds of the slider. Depending where the user clicks, that zone will correlate to a specific line (line1-line4) and each of those lines is programmed to respond to a click by moving the slider content into and out of the screen using translateX(). At the same time, the slider bar also responds to the click by moving vertically. Each line as a prearranged stop point bewteen 0 - 24rem.

So, on a click, the slider content moves horizontally and the slider moves vertically.
