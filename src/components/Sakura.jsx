import React, { useEffect, useRef } from 'react';

const Sakura = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const petals = [];
        const numPetals = 50;

        class Petal {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height * 2 - height;
                this.w = 15 + Math.random() * 15;
                this.h = 20 + Math.random() * 10;
                this.opacity = this.w / 40;
                this.flip = Math.random();
                this.xSpeed = 1 + Math.random() * 2;
                this.ySpeed = 1 + Math.random() * 1;
                this.flipSpeed = Math.random() * 0.03;
            }

            draw() {
                if (this.y > height || this.x > width) {
                    this.x = -this.w;
                    this.y = Math.random() * height * 2 - height;
                    this.xSpeed = 1 + Math.random() * 2;
                    this.ySpeed = 1 + Math.random() * 1;
                    this.flip = Math.random();
                }
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.bezierCurveTo(this.x + this.w / 2, this.y - this.h / 2, this.x + this.w, this.y, this.x + this.w / 2, this.y + this.h / 2);
                ctx.bezierCurveTo(this.x, this.y + this.h, this.x - this.w / 2, this.y, this.x, this.y);
                ctx.closePath();
                ctx.fillStyle = '#FFB7C5';
                ctx.fill();
                ctx.globalAlpha = 1;
            }

            update() {
                this.x += this.xSpeed;
                this.y += this.ySpeed;
                this.flip += this.flipSpeed;
                this.draw();
            }
        }

        for (let i = 0; i < numPetals; i++) {
            petals.push(new Petal());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            petals.forEach(petal => petal.update());
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0
            }}
        />
    );
};

export default Sakura;
