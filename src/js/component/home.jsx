import React, {useState} from "react"; //1. importar el hook useState

//use state = usar estado;

//create your first component
const Home = () => {

   const [color1,setColor1]= useState("");
   const [color2, setColor2]= useState("");
   const [color3, setColor3]= useState("");

	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("")
		}else{
		setColor1("btn-danger")
		setColor2("")
		setColor3("")
	}
}
function encenderAmarillo() {

	if(color2 === "btn-warning"){
		setColor2("")
	}else{
	setColor2("btn-warning")
	setColor1("")
	setColor3("")
}
}
function encenderVerde() {

	if(color3 === "btn-success"){
		setColor3("")
	}else{
	setColor3("btn-success")
	setColor1("")
	setColor2("")
}
}
function alternar(){
	if(color1 === "btn-danger"){
		setColor1("")
		setColor2("")
		setColor3("btn-success")
	}
	else if(color2 === "btn-warning"){
		setColor1("btn-danger")
		setColor2("")
		setColor3("")
	}
	else if(color3 === "btn-success"){
		setColor1("")
		setColor2("btn-warning")
		setColor3("")
	}else{
		setColor1("btn-danger")
		setColor2("")
		setColor3("")
	}
}
function celeste(){
	if(color1 === "btn-info"){
		setColor1("")
		setColor2("")
		setColor3("")
	}else{
	setColor1("btn-info")
	setColor2("btn-info")
	setColor3("btn-info")
	}
}
	return (
		
		<div className="container d-flex justify-content-center mt-5">
			<div className="card text-center d-flex flex-column bg-dark" style={{height:220, width:75}}>
				<button className={"w-100 h-100 border-black rounded-circle btn "+color1} onClick={encenderRojo}></button>
				<button className={"w-100 h-100 border-black rounded-circle btn "+color2} onClick={encenderAmarillo}></button>
				<button className={"w-100 h-100 border-black rounded-circle btn "+color3} onClick={encenderVerde}></button>
			</div>
		</div>
		
	);

};

export default Home;