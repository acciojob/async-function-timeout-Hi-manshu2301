//your JS code here. If required.
fucntion name(ms){
	return new Promise((resolve)=>{
		setTimeout(resolve,ms);
	});
}
document.getElementById("btn").addEvenetListener("click",async function(){
	let input = document.getElementById("input").value;
	let delay = Number(document.getElementById("delay").value);
	await name(delay);
	document.getElementById("output").innerText = input;
})
