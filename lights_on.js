const li = document.querySelectorAll("li");
const h1 = document.getElementsByTagName("h1")[0];
let button = document.getElementsByClassName("start")[0];
let button2 = document.getElementsByClassName("lights-off")[0];
let destination = document.getElementById("dest");


$(".start").on("click", () => {
  $(".start").fadeOut(1000);
});

run()

button2.addEventListener("click", () => {
	reset()
	run()
});

function reset(){
	document.body.style.background = "black";
	h1.textContent = "Lights On";
	h1.style.color = "white";
	for(let i = 0; i < li.length; i++){
		li[i].style.color = "black";
	};
	button2.style.display = "none";
	button.style.display = "block";
	hint.destroy();
};

function run(){
button.addEventListener("click", () => {
numbersOn()
flash()

function numbersOn(){
setTimeout(() => {li[0].style.color = "yellow"}, 1000);
setTimeout(() => {li[1].style.color = "yellow"}, 2000);
setTimeout(() => {li[2].style.color = "yellow"}, 3000);
setTimeout(() => {li[3].style.color = "yellow"}, 4000);
setTimeout(() => {li[4].style.color = "yellow"}, 5000);
};

function flash(){
setTimeout(() => {li[4].style.color = "black"}, 5500);
setTimeout(() => {li[4].style.color = "yellow"}, 6000);
setTimeout(() => {li[4].style.color = "black"}, 6100);
setTimeout(() => {li[4].style.color = "yellow"}, 6200);
setTimeout(() => {li[4].style.color = "black"}, 6300);
}

function flashRev(){
setTimeout(() => {li[4].style.color = "yellow"}, 500);
setTimeout(() => {li[4].style.color = "black"}, 600);
setTimeout(() => {li[4].style.color = "yellow"}, 700);
setTimeout(() => {li[4].style.color = "black"}, 800);
setTimeout(() => {li[4].style.color = "yellow"}, 1800);

setTimeout(() => {
document.body.style.background = "white";
h1.style.color = "#333";
h1.textContent = "You did it!";
button2.style.display = "block";
button2.style.margin = "0 auto";
}, 1800);
}

let hint = new TypeIt("#dest", {
	startDelay: 8000,
	speed: 50,
	breaklines: true,
	waitUntilVisible: true,
	cursor: false,
    strings: "Hmm, there seems to be a problem...",
})
.pause(900)
.delete(null, {delay: 1000})
.type("Try clicking on the number 5")
.pause(1400)
.delete(null, {delay: 2000})
.go();

setTimeout(() => {
$("ul li:eq(4)").one('click', () => {
flashRev(); 
});
}, 12000);

});
};


