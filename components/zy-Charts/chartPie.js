let axiArray = [] , indexList = [] , cloneAxiObj = {} , rateArray = [] , flag = true ,timerArr = [0,0,0],geoList = []

const  judge = (x,y,params,array) => {
	if(array.some(item => x > item.x && x < item.x + item.width && y > item.y && y < item.y + item.height)){
	   let index = array.findIndex(item => x > item.x && x < item.x + item.width && y > item.y && y < item.y + item.height)
	   if(indexList.some(item => item == index)){
		   indexList[indexList.findIndex(item => item == index)] = undefined
		   indexList = indexList.filter(item => item !== undefined)
		   return initPie(params,indexList,true)
	   }
	   indexList.push(index)
	   indexList = [...new Set(indexList)]
	   flag = false
	   initPie(params,indexList,true)
	}else{
	   flag = true
	}
}

const getAngle = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
    const dot = x1 * x2 + y1 * y2
    const det = x1 * y2 - y1 * x2
    const angle = Math.atan2(det, dot) / Math.PI * 180
    return  Math.PI*2 - ((angle + 360) % 360) / 360 * Math.PI*2
}

const initTip = (i,radius,context,options) => {
	var x0 = Math.cos(Math.PI * 2 / 360 * geoList[i]) * radius
	var y0 = Math.sin(Math.PI * 2 / 360 * geoList[i]) * radius
	var x1 = Math.cos(Math.PI * 2 / 360 * geoList[i]) * (radius + 8)
	var y1 = Math.sin(Math.PI * 2 / 360 * geoList[i]) * (radius + 8)
	if(0 <= geoList[i] && geoList[i] <= 90){
		var x3 = x1 + 8
		var y3 = y1 
	}else if(90 <= geoList[i] && geoList[i] <= 180){
		var x3 = x1 - 8
		var y3 = y1
	}else if(180 <= geoList[i] && geoList[i] <= 270){
		var x3 = x1 - 8
		var y3 = y1
	}else if(270 <= geoList[i] && geoList[i] <= 360){
		var x3 = x1 + 8
		var y3 = y1 
	}
	
	context.beginPath()
	context.setFillStyle(options.configOptions.color[i])
	context.setLineWidth(0.5)
	context.setFontSize(12)
	context.moveTo(x0,y0)
	context.lineTo(x1,y1)
	context.lineTo(x3,y3)
	if(0 <= geoList[i] && geoList[i] <= 90){
		context.fillText(options.dataList[i].value , x3 + 2 ,y3 + 6)
	}else if(90 <= geoList[i] && geoList[i] <= 180){
		context.fillText(options.dataList[i].value , x3 - context.measureText(options.dataList[i].value).width - 2 ,y3 + 6)
	}else if(180 <= geoList[i] && geoList[i] <= 270){
		context.fillText(options.dataList[i].value , x3 - context.measureText(options.dataList[i].value).width - 2 ,y3 + 6)
	}else if(270 <= geoList[i] && geoList[i] <= 360){
		context.fillText(options.dataList[i].value , x3 + 2 ,y3 + 6)
	}
	context.stroke()
	context.closePath()
}
export const judgeDeg = (x,y,opt) => {
	const angle = getAngle({
	    x,
	    y,
	}, {
	    x: parseFloat(opt.height) / 2,
	    y: 0,
	});
	if(flag){
		console.log(rateArray.findIndex(item => item.deg < angle && item.rate > angle))
		initPie(opt ,indexList ,true , rateArray.findIndex(item => item.deg < angle && item.rate > angle))
	}
}

export const axiosPieSubmit = (x,y,params,opt) => {
	judge(x , y , params ,opt.axiArray)
}

export const initPie = (options,objAxios,flag,initIndex) => {
	rateArray = []
	geoList = []
	var context = uni.createCanvasContext(options.canvasId)
	context.save()
	context.translate(parseFloat(options.width) / 2 , parseFloat(parseFloat(options.height)) / 2)
	context.rotate(0 , 0)
	var radius = 0 , totalValue = 0
	if(objAxios instanceof Array){ 
		for(let j = 0; j < objAxios.length; j++){
			totalValue += options.dataList[objAxios[j]].value
		}
		totalValue = options.dataList.map(item => item.value).reduce((prevVal , total) => prevVal + total)	 - totalValue
	}else{
	    totalValue = options.dataList.map(item => item.value).reduce((prevVal , total) => prevVal + total)	
	}
	let deg = 0,rate = 0, y = 0 , x = 0
	if(options.tipOption.position == 'top'){
		y = 0 - parseFloat(options.height) / 2;
	}
	if(options.tipOption.position == 'bottom'){
		y =(0 - parseFloat(options.height) / 2) / -1;
	}
	if(options.tipOption.marginLeft){
		x =  (0 - parseFloat(options.width)) / 2 + options.tipOption.marginLeft
	}else{
	    x = (0 - parseFloat(options.width)) / 2	
	}
	if(typeof parseFloat(options.width) == 'number' && typeof parseFloat(options.height) == 'number' && parseFloat(options.width) > parseFloat(options.height)){
		radius =  parseFloat(options.height) / 2 - parseFloat(options.tipOption.height) * 2  - parseFloat(options.tipOption.marginBottom)
	}else if(typeof parseFloat(options.width) == 'number' && typeof parseFloat(options.height) == 'number' && parseFloat(options.width) < parseFloat(options.height)){
		radius =  parseFloat(options.width) / 2 - parseFloat(options.tipOption.width) * 2 - parseFloat(options.tipOption.marginBottom)
	}else if(typeof parseFloat(options.width) == 'number' && typeof parseFloat(options.height) == 'number' && parseFloat(options.width) === parseFloat(options.height)){
		radius =  parseFloat(options.height) / 2 - parseFloat(options.tipOption.height) * 2 - parseFloat(options.tipOption.marginBottom)
	}
	for(let i = 0; i < options.dataList.length; i++){
		context.beginPath()
		context.save()
		if(objAxios instanceof Array){
			if(objAxios.some(item => item  == i)){
				rate +=  0
			}else{
				rate +=  options.dataList[i].value / totalValue 
			}
		} else {
		    rate +=  options.dataList[i].value / totalValue 	
		}
		context.setFillStyle(options.configOptions.color[i]);
		rateArray.push({
			deg:Math.PI * 2 * deg,
			rate:Math.PI * 2 * rate
		})
		timerArr[i] = deg
		if(!options.r){
			geoList.push(360 * (rate - deg))
		}
		context.moveTo(0,0)
		if(deg != rate){
			if(options.r){
			    context.arc(0 , 0, radius, Math.PI * 2 * deg + 0.01  , Math.PI * 2 * rate - 0.01, false);	
			}else{
				 context.arc(0 , 0, radius, Math.PI * 2 * deg  , Math.PI * 2 * rate, false);	
			}
		}else{
			context.arc(0 , 0, radius, Math.PI * 2 * deg , Math.PI * 2 * rate  , false);
		}
		if(indexList.length == options.dataList.length - 1){
			context.arc(0 , 0, radius, Math.PI * 2 * deg , Math.PI * 2 * rate  , false);
		}
		context.lineTo(0,0)
		context.fill()
		context.closePath()
		if(objAxios instanceof Array){
			if(objAxios.some(item => item  == i)){
				deg +=  0
			}else{
				deg +=  options.dataList[i].value / totalValue 
			} 
		} else {
		    deg += options.dataList[i].value / totalValue 
		}
		context.restore()
		context.closePath()
		context.beginPath()
		// context.translate(0 , 0)
		context.save()
		context.setFillStyle(options.configOptions.color[i])
		if(options.tipOption.position == 'bottom'){
			context.fillRect(x, y - parseFloat(options.tipOption.height),parseFloat(options.tipOption.width),parseFloat(options.tipOption.height))
		}else{
			context.fillRect(x, y ,parseFloat(options.tipOption.width),parseFloat(options.tipOption.height))
		}
		context.setFontSize(options.tipOption.fontSize)
		// console.log(x+parseFloat(options.tipOption.width)+5)
		if(flag){
			if(options.tipOption.position == 'top'){
				context.fillText(options.dataList[i].name,x+parseFloat(options.tipOption.width)+5 , y + parseFloat(options.tipOption.height) / 2 +  options.tipOption.fontSize / 4 + 1 ,parseFloat(options.width)  /  options.dataList.length )
			}else{
				context.fillText(options.dataList[i].name,x+parseFloat(options.tipOption.width)+5 , y - parseFloat(options.tipOption.height) / 2 +  options.tipOption.fontSize / 4 + 1 ,parseFloat(options.width)  /  options.dataList.length )
			}
		}else{
	       if(options.tipOption.position == 'top'){
			    context.fillText(options.dataList[i].name,x+parseFloat(options.tipOption.width)+5, y + parseFloat(options.tipOption.height) / 2 + options.tipOption.fontSize / 4 + 1,parseFloat(options.width)  /  options.dataList.length )		
		   }else{
			    context.fillText(options.dataList[i].name,x+parseFloat(options.tipOption.width)+5, y - parseFloat(options.tipOption.height) / 2 +  options.tipOption.fontSize / 4 + 1 ,parseFloat(options.width)  /  options.dataList.length )		
		   }
		}
		context.restore()
		context.closePath()	
		// console.log(geoList)
		if(!options.r && i === options.dataList.length - 1){
			geoList = geoList.map((item,index) => {
				return index == 0 ? item / 2 : item / 2 + geoList.filter((item,i) => i < index).reduce((prev , total) => prev + total)
			})
			for(let j = 0; j < geoList.length; j++){
				if(indexList.length == 0){
	                  initTip(j,radius,context,options)
				}
				options.dataList.filter((item,index) => {
					return index !== indexList[index]
				})
				if(indexList.every(item => {
					return item !== j 
				})){
				  initTip(j,radius,context,options)
				}
			}
		}
		if(objAxios instanceof Array){
			for(let j = 0; j < objAxios.length; j++){
				if(objAxios[j] == i){
				    context.beginPath()
				    context.setFillStyle('#ccc')
					if(options.tipOption.position == 'bottom'){
						context.fillRect(axiArray[i].x, axiArray[i].y ,parseFloat(options.tipOption.width),parseFloat(options.tipOption.height))
					}else{
						context.fillRect(axiArray[i].x, axiArray[i].y ,parseFloat(options.tipOption.width),parseFloat(options.tipOption.height))
					}
				    context.closePath()	
				}
			}
		}
		if(axiArray.length < options.dataList.length){
			if(options.tipOption.position == 'bottom'){
				axiArray.push({
					x,
					y: y - parseFloat(options.tipOption.height),
					width:parseFloat(options.tipOption.width),
					height:parseFloat(options.tipOption.height),
					index:i
				})
			}else{
			    axiArray.push({
			    	x,
			    	y,
			    	width:parseFloat(options.tipOption.width),
			    	height:parseFloat(options.tipOption.height),
			    	index:i
			    })	
			}
		}
		x += parseFloat(options.width)  /  options.dataList.length;
	}
	context.beginPath()
	context.setFillStyle('#fff');
	if(options.r){
		context.arc(0 , 0, radius - options.r , 0 , Math.PI * 2  , false);
	}
	context.fill()
	context.closePath()
	if(indexList.length == 0){
		if(options.r){
			context.beginPath()
			context.setFillStyle(options.configOptions.color[0]);
			context.font = options.middleOption.fontSize[0] + "px sans-serif"
			context.fillText(options.dataList[0].name , 0 - context.measureText(options.dataList[0].name).width / 2, 0 - 4)
			context.closePath()
			context.beginPath()
			context.font = options.middleOption.fontSize[1] + "px sans-serif"
			context.fillText((options.dataList[0].value / totalValue * 100).toFixed(2) + '%',0 - context.measureText((options.dataList[0].value / totalValue * 100).toFixed(2) + '%').width / 2, 20 + 4)
			context.closePath()	
		}
	}
	if(typeof initIndex == 'number'){
		console.log(options.dataList[initIndex])
		if(options.r){
			context.beginPath()
			context.setFillStyle('#fff');
			context.arc(0 , 0, radius - options.r , 0 , Math.PI * 2  , false);
			context.fill()
			context.closePath()
			context.beginPath()
			context.setFillStyle(options.configOptions.color[initIndex]);
			context.font =  options.middleOption.fontSize[0] + "px sans-serif"
			context.fillText(options.dataList[initIndex].name , 0 - context.measureText(options.dataList[initIndex].name).width / 2, 0 - 4)
			context.closePath()
			context.beginPath()
			context.font = options.middleOption.fontSize[1] + "px sans-serif"
			context.fillText((options.dataList[initIndex].value / totalValue * 100).toFixed(2) + '%',0 - context.measureText((options.dataList[initIndex].value / totalValue * 100).toFixed(2) + '%').width / 2, 20 + 4)
			context.closePath()
		}
	}	
	context.draw()
	if(typeof objAxios == 'function'){
		objAxios({
			width: parseFloat(options.width) / 2,
			height: parseFloat(options.height) / 2,
			axiArray
		})
	}
}

