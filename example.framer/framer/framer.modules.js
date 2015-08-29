require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"grid":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.Grid = (function(superClass) {
  extend(Grid, superClass);

  function Grid(options) {
    var context, i, x;
    if (options == null) {
      options = {};
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = "transparent";
    }
    if (options.width == null) {
      options.width = Screen.width;
    }
    if (options.height == null) {
      options.height = Screen.height;
    }
    if (options.offset == null) {
      options.offset = 10;
    }
    if (options.amount == null) {
      options.amount = 10;
    }
    if (options.gutWidth == null) {
      options.gutWidth = 20;
    }
    if (options.colWidth == null) {
      options.colWidth = 50;
    }
    if (options.gridColor == null) {
      options.gridColor = "rgba(243, 57, 52, 0.5)";
    }
    Grid.__super__.constructor.call(this, options);
    this.grid = document.createElement('canvas');
    this.grid.style.position = "absolute";
    this.grid.style.margin = 0;
    this.grid.style.top = 0;
    this.grid.style.left = 0;
    this.grid.style.display = "block";
    this.grid.width = Screen.width;
    this.grid.height = Screen.height;
    this._element.appendChild(this.grid);
    context = this.grid.getContext('2d');
    i = 0;
    while (i < options.amount) {
      x = i * options.colWidth + i * options.gutWidth + .5 * options.colWidth + options.offset;
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, this.grid.height);
      context.strokeStyle = options.gridColor;
      context.lineWidth = options.colWidth;
      context.stroke();
      i++;
    }
  }

  return Grid;

})(Layer);



},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbmlsc2hvZW5zb24vRGVza3RvcC9leGFtcGxlLmZyYW1lci9tb2R1bGVzL2dyaWQuY29mZmVlIiwiL1VzZXJzL25pbHNob2Vuc29uL0Rlc2t0b3AvZXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOzZCQUFBOztBQUFBLE9BQWEsQ0FBQztBQUNiLDBCQUFBLENBQUE7O0FBQWEsRUFBQSxjQUFDLE9BQUQsR0FBQTtBQUNaLFFBQUEsYUFBQTs7TUFEYSxVQUFVO0tBQ3ZCOztNQUFBLE9BQU8sQ0FBQyxrQkFBbUI7S0FBM0I7O01BQ0EsT0FBTyxDQUFDLFFBQVMsTUFBTSxDQUFDO0tBRHhCOztNQUVBLE9BQU8sQ0FBQyxTQUFVLE1BQU0sQ0FBQztLQUZ6Qjs7TUFHQSxPQUFPLENBQUMsU0FBVTtLQUhsQjs7TUFJQSxPQUFPLENBQUMsU0FBVTtLQUpsQjs7TUFLQSxPQUFPLENBQUMsV0FBWTtLQUxwQjs7TUFNQSxPQUFPLENBQUMsV0FBWTtLQU5wQjs7TUFPQSxPQUFPLENBQUMsWUFBYTtLQVByQjtBQUFBLElBU0Esc0NBQU0sT0FBTixDQVRBLENBQUE7QUFBQSxJQVdBLElBQUMsQ0FBQSxJQUFELEdBQVEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FYUixDQUFBO0FBQUEsSUFZQSxJQUFDLENBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFaLEdBQXVCLFVBWnZCLENBQUE7QUFBQSxJQWFBLElBQUMsQ0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQVosR0FBcUIsQ0FickIsQ0FBQTtBQUFBLElBY0EsSUFBQyxDQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBWixHQUFrQixDQWRsQixDQUFBO0FBQUEsSUFlQSxJQUFDLENBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFaLEdBQW1CLENBZm5CLENBQUE7QUFBQSxJQWdCQSxJQUFDLENBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFaLEdBQXNCLE9BaEJ0QixDQUFBO0FBQUEsSUFpQkEsSUFBQyxDQUFBLElBQUksQ0FBQyxLQUFOLEdBQWMsTUFBTSxDQUFDLEtBakJyQixDQUFBO0FBQUEsSUFrQkEsSUFBQyxDQUFBLElBQUksQ0FBQyxNQUFOLEdBQWUsTUFBTSxDQUFDLE1BbEJ0QixDQUFBO0FBQUEsSUFvQkEsSUFBQyxDQUFBLFFBQVEsQ0FBQyxXQUFWLENBQXNCLElBQUMsQ0FBQSxJQUF2QixDQXBCQSxDQUFBO0FBQUEsSUFzQkEsT0FBQSxHQUFVLElBQUMsQ0FBQSxJQUFJLENBQUMsVUFBTixDQUFpQixJQUFqQixDQXRCVixDQUFBO0FBQUEsSUF3QkEsQ0FBQSxHQUFJLENBeEJKLENBQUE7QUF5QkEsV0FBTSxDQUFBLEdBQUksT0FBTyxDQUFDLE1BQWxCLEdBQUE7QUFFQyxNQUFBLENBQUEsR0FBSSxDQUFBLEdBQUksT0FBTyxDQUFDLFFBQVosR0FBdUIsQ0FBQSxHQUFJLE9BQU8sQ0FBQyxRQUFuQyxHQUE4QyxFQUFBLEdBQUssT0FBTyxDQUFDLFFBQTNELEdBQXNFLE9BQU8sQ0FBQyxNQUFsRixDQUFBO0FBQUEsTUFFQSxPQUFPLENBQUMsU0FBUixDQUFBLENBRkEsQ0FBQTtBQUFBLE1BR0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBSEEsQ0FBQTtBQUFBLE1BSUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLElBQUMsQ0FBQSxJQUFJLENBQUMsTUFBeEIsQ0FKQSxDQUFBO0FBQUEsTUFLQSxPQUFPLENBQUMsV0FBUixHQUFzQixPQUFPLENBQUMsU0FMOUIsQ0FBQTtBQUFBLE1BTUEsT0FBTyxDQUFDLFNBQVIsR0FBb0IsT0FBTyxDQUFDLFFBTjVCLENBQUE7QUFBQSxNQU9BLE9BQU8sQ0FBQyxNQUFSLENBQUEsQ0FQQSxDQUFBO0FBQUEsTUFTQSxDQUFBLEVBVEEsQ0FGRDtJQUFBLENBMUJZO0VBQUEsQ0FBYjs7Y0FBQTs7R0FEMEIsTUFBM0IsQ0FBQTs7Ozs7QUNJQSxPQUFPLENBQUMsS0FBUixHQUFnQixZQUFoQixDQUFBOztBQUFBLE9BRU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUEsR0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU4sRUFEb0I7QUFBQSxDQUZyQixDQUFBOztBQUFBLE9BS08sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTGxCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgZXhwb3J0cy5HcmlkIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChvcHRpb25zID0ge30pIC0+XG5cdFx0b3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0b3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRvcHRpb25zLmhlaWdodCA/PSBTY3JlZW4uaGVpZ2h0XG5cdFx0b3B0aW9ucy5vZmZzZXQgPz0gMTBcblx0XHRvcHRpb25zLmFtb3VudCA/PSAxMFxuXHRcdG9wdGlvbnMuZ3V0V2lkdGggPz0gMjBcblx0XHRvcHRpb25zLmNvbFdpZHRoID89IDUwXG5cdFx0b3B0aW9ucy5ncmlkQ29sb3IgPz0gXCJyZ2JhKDI0MywgNTcsIDUyLCAwLjUpXCJcblx0XHRcblx0XHRzdXBlciBvcHRpb25zXG5cblx0XHRAZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJ2NhbnZhcydcblx0XHRAZ3JpZC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuXHRcdEBncmlkLnN0eWxlLm1hcmdpbiA9IDBcblx0XHRAZ3JpZC5zdHlsZS50b3AgPSAwXG5cdFx0QGdyaWQuc3R5bGUubGVmdCA9IDBcblx0XHRAZ3JpZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG5cdFx0QGdyaWQud2lkdGggPSBTY3JlZW4ud2lkdGhcblx0XHRAZ3JpZC5oZWlnaHQgPSBTY3JlZW4uaGVpZ2h0XG5cblx0XHRAX2VsZW1lbnQuYXBwZW5kQ2hpbGQoQGdyaWQpXG5cblx0XHRjb250ZXh0ID0gQGdyaWQuZ2V0Q29udGV4dCAnMmQnXG5cblx0XHRpID0gMFxuXHRcdHdoaWxlIGkgPCBvcHRpb25zLmFtb3VudFxuXG5cdFx0XHR4ID0gaSAqIG9wdGlvbnMuY29sV2lkdGggKyBpICogb3B0aW9ucy5ndXRXaWR0aCArIC41ICogb3B0aW9ucy5jb2xXaWR0aCArIG9wdGlvbnMub2Zmc2V0XG5cblx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcblx0XHRcdGNvbnRleHQubW92ZVRvIHgsIDBcblx0XHRcdGNvbnRleHQubGluZVRvIHgsIEBncmlkLmhlaWdodFxuXHRcdFx0Y29udGV4dC5zdHJva2VTdHlsZSA9IG9wdGlvbnMuZ3JpZENvbG9yXG5cdFx0XHRjb250ZXh0LmxpbmVXaWR0aCA9IG9wdGlvbnMuY29sV2lkdGhcblx0XHRcdGNvbnRleHQuc3Ryb2tlKClcblx0XHRcdFxuXHRcdFx0aSsrIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
