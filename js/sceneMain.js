class SceneMain extends Phaser.Scene{
    constructor(){
        super('SceneMain');
    }
    preload(){
        //load our images or sounds
        this.load.audio('cat',['audio/meow.mp3', 'audio/meow.ogg']);
        this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });

    }
    create(){
        //define our objects
        this.catSound=this.sound.add('cat');
        this.graphics=this.add.graphics();
        this.graphics.lineStyle(4,0xff0000);
        this.graphics.strokeRect(300,400,50,50);
        this.graphics.fillStyle(0xff00ff, 0.5);
        this.graphics.fillCircle(200,500,60);

        this.text1=this.add.text(game.config.width/2,game.config.height/2,"Helloww",{fontFamily:'Anton', color: '#ff0000',fontSize:'30px'});
        this.text1.setOrigin(0.5,0.5)

        this.char = this.add.sprite(game.config.width/4,game.config.height/4, 'boy');
        this.char.setInteractive();
        this.char.on('pointerdown', this.onDown, this);
        this.char.on('pointerup', this.onUp, this);
       
        const frameNames = this.anims.generateFrameNumbers('boy');

        this.anims.create({
            key: 'walk',
            frames: frameNames,
            frameRate: 12,
            repeat: -1
        });
        // this.char.play('walk');

        // this.doWalk();

    }
    onDown(){
        this.char.alpha=.5;
        this.catSound.play();
    }
    onUp(){
        this.char.alpha=1;
    }
    doWalk(){
        this.tweens.add({targets: this.char,duration: 2000,x:game.config.width, y:0, onComplete:this.onCompleteHandeler.bind(this)});
    }
    onCompleteHandeler(tween, targets, scope){
        let char = targets[0];
        char.x = 0;
        char.y = game.config.height/2;
        this.doWalk();


    }
    update(){
        //constant running loop
        
    }
}