//your JS code here. If required.
function name(ms){
	return new Promise((resolve)=> {
		setTimeout(resolve,ms);
	});
}
document.getElementById("btn").addEventListener("click",async function(){
	let input = document.getElementById("text").value;
	let delay = Number(document.getElementById("delay").value);
	await name(delay);
	document.getElementById("output").innerText = input;
});
