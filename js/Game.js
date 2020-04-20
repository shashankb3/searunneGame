class Game {
  constructor(){
    this.gameState=0

  }


  async start(){
    if(this.gameState === 0){
      player = new Player();
          form = new Form()
      form.display();
    }

  
   
  }
  
  update(){
    this.gameState=1;
    state=this.gameState
    }

  play(){
    form.hide();
    background(rgb(198,135,103));
    image(screen1background,0,0,displayWidth,displayHeight)
   // Player.getPlayerInfo();
    
    
   
    
    

   
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
  }
}
