# Include grid module
gridOverlay = require "grid"

# Create layers
scroll = new ScrollComponent width: Screen.width, height: Screen.height, backgroundColor: "transparant", scrollHorizontal: false, mouseWheelEnabled: true

site = new Layer width: Screen.width, height: 2948, image: "images/example-site.png", superLayer: scroll.content

# Create grid overlay
Grid = new gridOverlay.Grid
	offset: 190
	amount: 6
	gutWidth: 30
	colWidth: 145

# Add hidden state
Grid.states.add("hide": { opacity: 0 })

# Toggle by pressing Enter
document.addEventListener 'keydown', (e) ->
  if e.keyCode is 13
    Grid.states.next()