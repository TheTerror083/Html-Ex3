			function addBrick(){
				var newBrick = document.createElement("article");
				var addTo = document.getElementById("brickZone");
				newBrick.style.opacity=Math.random();
				addTo.appendChild(newBrick);
			}		
			window.onload=function(){
				document.getElementById("plus").onclick = addBrick;
			}