class exports.Grid extends Layer
	constructor: (options = {}) ->
		options.backgroundColor ?= "transparent"
		options.width ?= Screen.width
		options.height ?= Screen.height
		options.offset ?= 10
		options.amount ?= 10
		options.gutWidth ?= 20
		options.colWidth ?= 78
		options.gridColor ?= "rgba(243, 57, 52, 0.5)"
		
		super options

		@grid = document.createElement 'canvas'
		@grid.style.position = "absolute"
		@grid.style.margin = 0
		@grid.style.top = 0
		@grid.style.left = 0
		@grid.style.display = "block"
		@grid.width = Screen.width
		@grid.height = Screen.height

		@_element.appendChild(@grid)

		context = @grid.getContext '2d'

		i = 0
		while i < options.amount

			x = i * options.colWidth + i * options.gutWidth + .5 * options.colWidth + options.offset

			context.beginPath()
			context.moveTo x, 0
			context.lineTo x, @grid.height
			context.strokeStyle = options.gridColor
			context.lineWidth = options.colWidth
			context.stroke()
			
			i++