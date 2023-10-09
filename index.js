function circleats(
  circleSpec,
  itemsNumber,
  start = 'r',
  itemSpec = [0,0]
) {
 const side = {};
 side.top = side.t = 0.5;
 side.bottom = side.b = -0.5;
 side.left = side.l = 1;
 side.right = side.r = 0;

 const {x,y,r} = circleSpec;
 const [w,h] = [
  ...[itemSpec].flat().concat(itemSpec)
 ];

 const st = Math.PI * (side[
  start.toLowerCase()
 ] || 0);
 const coords = [];
	
 for (let i = 0; ++i <= itemsNumber;) {
		const d = 2*Math.PI*((i-1)/itemsNumber)+st;
		const tx = x - 0.5 * w;
		const ty = y - 0.5 * h;
		const pointX = r * Math.cos(d) + tx;
		const pointY = r * Math.sin(d) + ty;
		
		coords.push([
			+pointX.toFixed(2),
			+pointY.toFixed(2)
		]);
 }
  
  return coords;
}
