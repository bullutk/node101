console.log("hello world");

var dcClass= [
	"sean",
	"drew",
	"Daniel",
	"Kyle",
	"Rishi"
]

console.log(dcClass[2]);
dcClass.push("Rob");
dcClass.map((member, index)=>{
	console.log(member, index);
})
console.log(this);