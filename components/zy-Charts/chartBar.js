export const chartsBar = (options) => {
	var context = uni.createCanvasContext(options.canvasId)
	options.context = context
	// console.log(options)
	var yNumber = []
	context.setFontSize(options.yFontSize)
	for (let i = 0; i < options.yAxis.limit; i++) {
		// console.log((options.yAxis.max - options.yAxis.min) / options.yAxis.limit * (i + 1))
		yNumber.push(context.measureText((options.yAxis.max - options.yAxis.min) / options.yAxis.limit * (i + 1)).width)
	}
	const obj = {
		xAxisArrowWidth: 10,
		yAxisArrowWidth: 10,
		marginLeft: Math.max(...yNumber),
		yFontSize: 12,
		barWidth: 12,
		barColor: 'blue'
	}
	for (let key in options) {
		for (let k in obj) {
			if (key == k) {
				// 基本数据类型比较
				if (typeof obj[k] == "number" || typeof obj[k] == "string" || typeof obj[k] == "boolean" || obj[
					k] == null || typeof obj[k] == "function") {
					if (typeof obj[k] !== typeof options[k]) {
						return console.log(`${k}的类型不正确`)
					}
				}
			}
		}
	}
	var options = Object.assign(obj, options)
	// 边距处理
	if (options.marginLeft && typeof options.marginLeft == "number") {
		options.marginLeft = Math.max(...yNumber) + options.marginLeft + 2
	} else {
		options.marginLeft = Math.max(...yNumber) + 2
	}
	context.save()
	initxAxis(options)
	inityAxis(options)
	initBar(options)
	if(options.Grid.show){
		initGrid(options)
	}
	context.draw()
}

const initxAxis = (options) => {
	const {
		context
	} = options
	context.beginPath()
	context.setFillStyle('#6e7079') //坐标轴颜色
	context.moveTo(options.marginLeft, parseFloat(options.height) - options
		.marginBottom) // 20 可以指定左边距需要一个显示下字体的宽度   //30 下边距
	context.lineTo(parseFloat(options.width), parseFloat(options.height) - options.marginBottom) //下边距
	context.stroke()
	context.closePath()
	options.xAxis.data.forEach((item, index) => {
		context.beginPath()
		context.moveTo((index + 1) * ((parseFloat(options.width) - options.marginLeft - options.xAxisArrowSize) / options.xAxis.data.length) + options.marginLeft, parseFloat(options.height) - options.marginBottom - options.markHeight) //下标高度
		context.lineTo((index + 1) * ((parseFloat(options.width) - options.marginLeft - options.xAxisArrowSize) / options.xAxis.data.length) + options.marginLeft, 
		parseFloat(options.height) - options.marginBottom) // 下边距
		context.stroke()
		context.setFontSize(options.yFontSize)
		context.setFillStyle('#909198')
		if (options.series[0].type == 'line') {
			console.log(options.yFontSize)
			context.fillText(item, ((index + 1) * ((parseFloat(options.width) - options.marginLeft - options.xAxisArrowSize) /
					options.xAxis.data.length) + options.marginLeft) - context.measureText(item).width /
				2, parseFloat(options.height) - options.yFontSize)
		} else if (options.series[0].type == 'bar') {
			context.fillText(item, (((index + 1) * ((parseFloat(options.width) - options.marginLeft - options.xAxisArrowSize) /
				options.xAxis.data.length) + options.marginLeft)) - (options.yAxis.max - options
				.yAxis.min) / options.yAxis.limit - context.measureText(item).width / 2, parseFloat(
				options.height) - options.yFontSize)
		}
		context.closePath()
	})
}

const inityAxis = (options) => {
	const { context } = options
	context.beginPath()
	context.setFillStyle('#6e7079')
	// 纵轴在右侧
	// context.moveTo((parseFloat(options.width) - 20) , ((parseFloat(options.height) - 30)))  //20左边距 30下边距
	// context.lineTo((parseFloat(options.width) - 20), 30) 
	// 纵轴在左侧
	context.moveTo(options.marginLeft, ((parseFloat(options.height) - options.marginBottom))) //20左边距 30下边距
	context.lineTo(options.marginLeft, options.marginTop  ) //30为上边距
	context.lineTo(options.marginLeft, options.marginTop - options.yAxisArrowSize)
	context.stroke()
	context.closePath()
	for (let i = 0; i < options.yAxis.limit; i++) {
		context.beginPath()
		context.setFillStyle('#909198')
		context.setFontSize(options.yFontSize)
		context.moveTo(options.marginLeft, (parseFloat(options.height)) - options.marginBottom - (parseFloat(options
			.height) - options.marginBottom - options.marginTop) / options.yAxis.limit * (i + 1)) // 左边距值
		context.lineTo(options.marginLeft + options.markHeight, (parseFloat(options.height)) - options
			.marginBottom - (parseFloat(options.height) - options.marginBottom - options.marginTop) / options
			.yAxis.limit * (i + 1))
		context.stroke()
		context.fillText((i + 1) * ((options.yAxis.max - options.yAxis.min) / options.yAxis.limit), 0, (parseFloat(
				options.height)) - 30 - (parseFloat(options.height) - options.marginBottom - options
			.marginTop) / options.yAxis.limit * (i + 1) + 6)
		context.closePath()
	}
}


const initBar = (options) => {
	let maxNumber;
	for (let i = 0; i < options.yAxis.limit; i++) {
		if(i == options.yAxis.limit - 1){
			maxNumber = (i  + 1) * ((options.yAxis.max - options.yAxis.min) / options.yAxis.limit)
		}
	}
	const {
		context
	} = options
	options.series[0].data.forEach((item, index) => {
		console.log((parseFloat(options.width) - options.marginLeft) / options.xAxis.data.length * index /
			2)
		context.save()
		context.beginPath()
		if(options.series[0].type == 'bar'){
			context.setFillStyle(options.barColor)
		}
		if(options.series[0].type == 'line'){
		    context.setFillStyle('transparent')	
		}
		
		if(options.series[0].type == 'bar'){
		    context.rect(
		    	(index) * ((parseFloat(options.width) - options.marginLeft - options.xAxisArrowSize) / options.xAxis.data.length) +
		    	options.marginLeft + ((parseFloat(options.width) - options.marginLeft) / options.xAxis.data.length) / 2
		    	- options.barWidth / 2,
		    	parseFloat(options.height) - options.marginBottom,
		    	options.barWidth,
		    	(item / maxNumber * (parseFloat(options.height) - options.marginBottom - options.marginTop))
		    )
		    context.translate(
		    	0,
		    	(item / maxNumber * (parseFloat(options.height) - options.marginBottom - options.marginTop)) * -1
		    )	
		}
		if(options.series[0].type == 'line'){
			context.setFillStyle(options.lineCapColor)
			context.arc(
			    (index + 1) * ((parseFloat(options.width) - options.marginLeft - options.xAxisArrowSize) / options.xAxis.data.length) +
			    options.marginLeft
			   ,
				parseFloat(options.height) - options.marginBottom,
				3,
				0,
				Math.PI*2
			)
			context.translate( 
				0,
				(item / maxNumber * (parseFloat(options.height) - options.marginBottom - options.marginTop)) * -1
			)
			
		}
		context.fill()
		context.closePath()
		context.restore()
		if(options.series[0].type == 'line'){
			context.setStrokeStyle(options.lineColor)
			if(index == 0){
				context.beginPath()
				context.moveTo(options.marginLeft , parseFloat(options.height) - options.marginBottom)
				context.lineTo(
				    (index + 1) * ((parseFloat(options.width) - options.marginLeft - options.xAxisArrowSize) / options.xAxis.data.length) +
				    options.marginLeft
				    ,
					 parseFloat(options.height) - options.marginBottom  - (item / maxNumber * (parseFloat(options.height) - options.marginBottom - options.marginTop))
					)
					// parseFloat(options.height) - options.marginTop * 2 - options.marginBottom - (item / maxNumber * (parseFloat(options.height) - options.marginBottom - options.marginTop))) 
				context.stroke()
				context.closePath()	
			}else if(index == options.series[0].data.length){
				
			}else{
				context.beginPath()
				context.moveTo((index) * ((parseFloat(options.width) - options.marginLeft - options.xAxisArrowSize) / options.xAxis.data.length) +
				    options.marginLeft
				    ,
					parseFloat(options.height) - options.marginBottom  - (options.series[0].data[index - 1] / maxNumber * (parseFloat(options.height) - options.marginBottom - options.marginTop)))
				context.lineTo(
				    (index + 1) * ((parseFloat(options.width) - options.marginLeft - options.xAxisArrowSize) / options.xAxis.data.length) +
				    options.marginLeft
				    ,
					 parseFloat(options.height) - options.marginBottom  - (item / maxNumber * (parseFloat(options.height) - options.marginBottom - options.marginTop)))
					// parseFloat(options.height) - options.marginTop * 2 - options.marginBottom - (item / maxNumber * (parseFloat(options.height) - options.marginBottom - options.marginTop))) 
				context.stroke()
				context.closePath()	
			}
		}
	})
}


const initGrid = (options) => {
	const { context } = options
	for (let i = 0; i < options.yAxis.limit; i++) {
		context.beginPath()
		context.setLineWidth(options.Grid.width)
		console.log(options.Grid.color)
		context.setStrokeStyle(options.Grid.color)
		context.moveTo(
		    options.marginLeft ,
		    (parseFloat(options.height)) - options.marginBottom - (parseFloat(options.height) - options.marginBottom - options.marginTop) / options.yAxis.limit * (i + 1)
		)
		context.lineTo(
		  options.marginLeft + parseFloat(options.width)
		  , 
		  (parseFloat(options.height)) - options.marginBottom - (parseFloat(options.height) - options.marginBottom - options.marginTop) / options.yAxis.limit * (i + 1))
		context.stroke()
		context.closePath()
	}
}