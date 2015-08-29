# Framer Grid Overlay Module
A flexible Framer Module that creates a grid overlay on top of your prototype to precisely align content or experiment early on in the design process. 

## Example

#### [Pttrns website](http://share.framerjs.com/lbl0okamp6lp/)
Prototype of [Pttrns](https://pttrns.com) to show the overlay on a static image.

![AudioPlayer Prototypes Preview](https://s3.amazonaws.com/f.cl.ly/items/0X1y3I1U0m3t0a2K1i28/Image%202015-08-29%20at%202.53.23%20pm.png)

—

## Including module
To include this module, download the grid.coffee file and put it in the `/modules` folder of your prototype.

Then add the following line to your prototype.

```coffeescript
gridOverlay = require “grid”
```

## Installation

To create a grid, you add this line of code to your prototype.

```coffeescript
Grid = new gridOverlay.Grid
```

## Customization

You can pass parameters to adjust the grid to your project’s needs.

**Note: if you don't change the value of a parameter, the value will be set to the default one. **

```coffeescript
Grid = new gridOverlay.Grid
    offset: 190
    amount: 6
    gutWidth: 30
    colWidth: 145
    gridColor: "rgba(22, 89, 240, .5)"
```

## Questions/improvements
If you have questions, please [tweet me](https://twitter.com/nilshoenson/) or send me an [email](mailto:nils@hoenson.eu).

If you want to change or improve something, be sure to send a pull request.