class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.position = createVector(this.x, this.y);
        this.attack = 1;
        this.speed = 4.5;
        this.width = 100;
        this.height = 180;
        this.hp = 10;
        this.mhp = 10;
        this.jumpStart = false;
        this.grounded = true;
        this.jumpSpeed = 0;
        this.gravityMultiplier = 1;
        this.terminal = 3;
        this.feetY = this.height - this.height;
        //perhaps this.hat / this.armor
    }

    show() {
        fill(255);
        rect(this.position.x - this.width / 2, this.position.y - this.height / 2, this.width, this.height);
    }

    process() {
        this.feetY = this.position.y + this.height / 2;
        //gravity
        if (this.grounded == false) {
            this.y += gravity * this.gravityMultiplier;
            if(this.gravityMultiplier <= this.terminal) {
                this.gravityMultiplier += 0.15;
            }
            
        } else if (this.gravityMultiplier != 1) {
            this.gravityMultiplier = 1;
        }

        
        //movement
        if (keyIsDown(65)) {
            this.position.x -= this.speed;
            if (keyIsDown(16)) {
                this.position.x -= this.speed;
            }
        }
        if (keyIsDown(68)) {
            this.position.x += this.speed;
            if (keyIsDown(16)) {
                this.position.x += this.speed;
            }
        }

        if (keyIsDown(32) && this.jumpStart == false) {
            this.jumpStart = true;
            this.grounded = false;
            this.jumpSpeed = -10;

        }
    }

    jump() {
        if (this.jumpStart) {
            this. y += this.jumpSpeed;
//            this.jumpSpeed 
        }
        if(this.grounded) {
            this.jumpStart = false;
        }
    }

    isGrounded() {
        if (tiles.length > 0) {
            for (i = 0; i < tiles.length i++) {
                if (tiles[i].x <= this.position.x && (tiles[i].x + tiles[i].width) >= this.position.x && this.feetY >= tiles[i].y) {
                    this.grounded = true;
                } else {
                    this.grounded = false;
                }
            }
        }

    }
    
    
    //attack

}
