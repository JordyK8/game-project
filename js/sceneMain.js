class SceneMain extends Phaser.Scene{
    constructor(){
        super('SceneMain');
    }
    preload(){
        //load our images or sounds

        this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
    }
    create(){
        //define our objects

        this.char = this.add.sprite(game.config.width/2,game.config.height/2, 'boy');
       
        const frameNames = this.anims.generateFrameNumbers('boy');

        this.anims.create({
            key: 'walk',
            frames: frameNames,
            frameRate: 12,
            repeat: -1
        });
        this.char.play('walk');
        
    }
    update(){
        //constant running loop
        this.char.x+=2;
        if(this.char.x>game.config.width){
            this.char.x=0;
        }
    }
}