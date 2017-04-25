# vue-scroller
A very simple directive to handle vertical scrolling

## Description
This is a simple directive that automatically keeps your component scrolled down to the last visible element.
Additionally, if the user has scrolled up, it leaves the component untouched until the user scrolls back to the bottom.

## Usage
Apply the directive to your component

```html
<div ... v-scroller>
```

It is important that the element the directive is applied to, has the **overflow** style

```html
<div ... style="overflow:auto" ... v-scroller>
```

## To use it in your code
Tu use the directive in your project just include the `Vue.directive()` call.





### Credits
Thanks to AWolf for pointing me in the right direction (http://stackoverflow.com/a/41378009)
