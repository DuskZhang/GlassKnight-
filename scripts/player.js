class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.position = createVector(this.x, this.y);
        this.attack = 1;
        this.speed = 6.75;
        this.width = 100;
        this.height = 180;
        this.hp = 10;
        this.mhp = 10;
        this.canJump = true;
        this.grounded = true;
        this.jumpSpeed = 0;
        this.terminal = 80;
        this.gravityMultiplier = 1;
        this.feetY = this.height - this.height;
        this.floorY = 800;
        //perhaps this.hat / this.armor
    }

    show() {
        fill(255);
        rect(this.position.x - this.width / 2, this.position.y - this.height / 2, this.width, this.height);
    }

    process() {


        if (this.grounded == false) {
            this.position.y += gravity * this.gravityMultiplier;
            if (this.gravityMultiplier <= this.terminal) {
                this.gravityMultiplier++;
            }
        }

        //movementS
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

        if (keyIsDown(32) && this.canJump || this.canJump == false) {
            this.canJump = false;
            this.grounded = false;
            this.jumpSpeed = 32;
            this.position.y -= this.jumpSpeed;
        }

    }


    //solid code
    isGrounded() {
        this.feetY = this.position.y + this.height / 2;
        if (this.floorY <= this.feetY) {
            this.grounded = true;
            this.canJump = true;
            this.gravityMultiplier = 1;
            this.jumpSpeed = 0;
            this.position.y = this.floorY - this.height / 2;
        } else {
            this.grounded = false;
        }
        //and if this is true, then ur feetY will equal the floorY

        //find this.floorY
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].x <= this.position.x && this.position.x <= tiles[i].x + tiles[i].width) {
                this.floorY = tiles[i].y;
                break;
            }
        }
    }


    //attack

}
