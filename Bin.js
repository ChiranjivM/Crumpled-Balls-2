class Bin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.BinWidth=200;
		this.BinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("Greenbin.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.BinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.BinWidth/2, this.y-this.BinHeight/2, this.wallThickness, this.BinHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.BinWidth/2, this.y-this.BinHeight/2, this.wallThickness, this.BinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.BinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.BinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.BinHeight/2,this.BinWidth, this.BinHeight)
			//rect(0,0,this.BinWidth, this.wallThickness);
			pop()
			
	}

}