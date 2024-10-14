## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


### Links

- Solution URL: [Github](https://github.com/EAguayodev/intro-section-with-dropdown-navigation/tree/main/intro-section-with-dropdown-navigation-main)
- Live Site URL: [Vercel](https://intro-section-with-dropdown-navigation-omega-green.vercel.app/)

## My process

HTML Structure: I started by defining the necessary navigation elements in HTML, organizing the menu items into lists and sublists for dropdowns. Each dropdown was structured with nested <ul> and <li> elements inside the main menu.

CSS for Styling & Transitions: Next, I applied CSS to style the navigation bar, focusing on typography, padding, and background colors for both the main menu and the dropdowns. To create a smooth dropdown effect, I used transition properties on the dropdown’s height and opacity, giving it a fluid appearance when opened or closed.

JavaScript for Interaction: To handle the toggle functionality of the dropdown, I wrote JavaScript that listens for click events on each menu item. When clicked, the script dynamically adds/removes classes that control the visibility of the dropdown, enhancing the user experience by preventing overlap of multiple dropdowns.

Responsiveness: Ensuring the dropdown was responsive, I used media queries in CSS to adjust the layout for different screen sizes. The navigation transitioned from a horizontal to a vertical stack on smaller devices, while the dropdown functionality remained intact. I also adjusted padding and font sizes for mobile-friendly viewing.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- Desktop-first workflow


### What I learned

What I learned in this challenge was to complete a smooth dropdown menu on mobile using if else statements to open and close the menu with Javascript. In addition, I learned to use css styling to make the menu drop underneath the dropdown menu.


```html
  <ul class="menu mobile-menu" id="mobile-menu">
        <li>
          <img class="icon-menu__close" id="menu-toggle__close" src="images/icon-close-menu.svg" alt="icon menu">
        </li>
        <li>
          <a href="#">Features <img class="arrow-icon" src="images/icon-arrow-down.svg" alt="icon arrow"></a>
          <!-- dropdown 1 start -->
          <ul class="dropdown-box">
            <li>
              <img class="icon icon-todo" src="images/icon-todo.svg" alt="icon todo">
              <a href="#">Todo List</a>
            </li>
            <li>
              <img class="icon icon-calendar" src="images/icon-calendar.svg" alt="icon calendar">
              <a href="#">Calendar</a>
            </li>
            <li>
              <img class="icon icon-reminders" src="images/icon-reminders.svg" alt="icon reminders">
              <a href="#">Reminders</a>
            </li>
            <li>
              <img class="icon icon-planning" src="images/icon-planning.svg" alt="planning icon">
              <a href="#">Planning</a>
            </li>
          </ul>
          <!-- dropdown 1 end -->
        </li>
        <li>
          <a href="#">Company <img class="arrow-icon" src="images/icon-arrow-down.svg" alt="icon arrow"></a>
          <!-- dropdown 2 start -->
          <ul class="dropdown-box drop-2">
            <li><a href="#">History</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <!-- dropdown 2 end -->
        </li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">About</a></li>
      </ul>
```
```css

  .dropdown-box {
    display: none;
    list-style: none;
    text-decoration: none;
    background-color: var(--almost-white);
    box-shadow: none;
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    left: 0;
    top: 100%;
    z-index: 1;
    max-height: 400px;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
```
```js
const hamburger = document.getElementById("menu-toggle__open");
const menuMobile = document.getElementById('mobile-menu');
const iconClose = document.getElementById("menu-toggle__close");

hamburger.addEventListener("click", function () {
  if (menuMobile) {
    document.getElementById("mobile-menu").style.display = "block";
  } else {
    document.getElementById("mobile-menu").style.display = "none";
  }
});

iconClose.addEventListener("click", function () {
  if (menuMobile) {
    document.getElementById("mobile-menu").style.display = "none";
  } else {
    document.getElementById("mobile-menu").style.display = "block";
  }
});
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.


### Useful resources

- [w3schools](https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp) - This resource helped me create and get an idea of how to build a responsive dropdown menu.

## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/EAguayodev)