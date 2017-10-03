function Bird() {
    this.y = -height;// Ball position in pixel
    this.x = 64;
    this.micLevel = 0;
    this.targetLevel = 0;
    this.zeroGravity = 0;
    // this.increment = setInterval(this.addGravity, 0);
    this.gravity = 0.8;
    // bird up
    this.lift = -13;
    this.velocity = 0;

    this.show = function() {
        background(200);
        var h = -this.targetLevel/40*height + height-25;

        ellipse(width/2, h, 50, 50);
    }

    this.up = function() {
        this.velocity = 0;
        var g = -5;
        this.velocity += g;
        this.y += this.velocity;
    }


    this.update = function() {
        var spectrum = fft.analyze();
        spectrum.splice(200, spectrum.length);
        var maxSpectrum = indexOfMax(spectrum);
        if (spectrum[maxSpectrum] < 200)
            maxSpectrum = 0;
        //this.micLevel = maxSpectrum;
        this.targetLevel = maxSpectrum;


        //var g = 0.1;
        //this.velocity += g;

        //Ball Position in index form
        var ball_y = 50-(this.y/height)*50;
        console.log(this.targetLevel, ball_y, this.y);
        //naik
        if(ball_y < this.targetLevel)
        {
            this.y -= this.velocity;
        }
        else if(ball_y > this.targetLevel)
        {
            this.y += this.velocity;
        }
        else
        {
            this.velocity = 0;
        }

        if (this.y > height-10) {
            this.y = height-10;
            this.velocity = 0;
        }

        // Top limit
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

    }

}