import Phaser from 'phaser'

export class Bullet {
  rectangle: Phaser.GameObjects.Rectangle
  speedX: number
  speedY: number

  constructor(scene: Phaser.Scene, x: number, y: number, targetX: number, targetY: number) {
    this.rectangle = scene.add.rectangle(x, y, 8, 8, 0xffff00)

    const angle = Phaser.Math.Angle.Between(x, y, targetX, targetY)
    this.speedX = Math.cos(angle) * 5
    this.speedY = Math.sin(angle) * 5
  }

  move() {
    this.rectangle.x += this.speedX
    this.rectangle.y += this.speedY
  }

  isOutOfBounds(): boolean {
    return (
      this.rectangle.x < 0 ||
      this.rectangle.x > 800 ||
      this.rectangle.y < 0 ||
      this.rectangle.y > 600
    )
  }

  destroy() {
    this.rectangle.destroy()
  }
}