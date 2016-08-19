module managers {
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public check(player: objects.GameObject, other: objects.GameObject) {
            //collision handling function


            function collision(wait: number, to: number, track: string) {
                        createjs.Sound.play(track);
                        other.changeAsset("explosion");
                        createjs.Tween.get(other)
                        .wait(wait)
                        .to({alpha:0, visible:false}, to)
                        .call(function() {  
                        other.visible = true;
                        other.alpha = 1;
                        other._reset();            
                    });
            }

            //check to see if object is colliding
            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;

                    // if plane collides with comet or asteroid
                    if(other.name === "comet1" || other.name === "comet2"||other.name === "asteroid1" ||other.name === "asteroid2"
                     ||other.name === "asteroid3") {
                         if(player.name ==="plane") {
                        collision(200, 300, "damage");
                        core.lives -= 1;
                         } else {
                        collision(500,1000,"explosion_blast");  // if plane shoots in Asteroid
                        core.score += 100;
                        player.visible = false;
                         }
                    }                   
                }
            }
            else {
                other.isColliding = false;
            }
        }
    }
}