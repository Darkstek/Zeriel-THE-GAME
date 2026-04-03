import Phaser from 'phaser'

export class Enemy {
  rectangle: Phaser.GameObjects.Rectangle
  speed: number = 1

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.rectangle = scene.add.rectangle(x, y, 32, 32, 0xff0000)
  }

  moveTowards(targetX: number, targetY: number) {
    const angle = Phaser.Math.Angle.Between(
      this.rectangle.x, this.rectangle.y,
      targetX, targetY
    )

    this.rectangle.x += Math.cos(angle) * this.speed
    this.rectangle.y += Math.sin(angle) * this.speed
  }

  distanceTo(targetX: number, targetY: number): number {
    return Phaser.Math.Distance.Between(
      this.rectangle.x, this.rectangle.y,
      targetX, targetY
    )
  }
}