/**
 * 把url转换为 canvas对象
 * @param url 网络图片地址必须服务器设置允许跨域
 * @returns {Promise<any>}
 */
export default function urlToCanvas (url) {
	return new Promise((resolve) => {
		var image = new Image();
		// 先设置图片跨域属性
		image.crossOrigin = 'Anonymous';
		// 再给image赋值src属性，先后顺序不能颠倒
		image.src = url;
		image.onload = function () {
			var canvas = document.createElement('CANVAS');
			// 设置canvas宽高等于图片实际宽高
			canvas.width = image.width
			canvas.height = image.height
			canvas.getContext('2d').drawImage(image, 0, 0)
			let dataURL = canvas.toDataURL("image/jpeg") // toDataUrl可以接收2个参数，参数一：图片类型，参数二： 图片质量0-1（不传默认为0.92）  			
			resolve(dataURL)	
    }
    image.onerror = () => {
      resolve({ message: '相片处理失败' })
    }
  })
}
