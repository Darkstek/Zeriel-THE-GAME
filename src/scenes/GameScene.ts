import Phaser from 'phaser'
import { Enemy } from '../entities/Enemy'

export class GameScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle
  private enemies: Enemy[] = []
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
  private scoreText!: Phaser.GameObjects.Text
  private gameOver: boolean = false
  private score: number = 0

  constructor() {
    super({ key: 'GameScene' })
  }

  preload() {}

  create() {
    this.player = this.add.rectangle(400, 300, 32, 32, 0x00ff00)
    this.cursors = this.input.keyboard!.createCursorKeys()
    this.gameOver = false
    this.score = 0

    this.scoreText = this.add.text(16, 16, 'Skóre: 0', {
      fontSize: '24px',
      color: '#ffffff'
    })

    this.time.addEvent({
      delay: 1000,
      callback: () => {
        if (this.gameOver) return
        this.score += 1
        this.scoreText.setText('Skóre: ' + this.score)
      },
      loop: true
    })

    this.time.addEvent({
      delay: 2000,
      callback: () => {
        if (this.gameOver) return
        const side = Phaser.Math.Between(0, 3)
        let x = 0
        let y = 0

        if (side === 0) { x = Phaser.Math.Between(0, 800); y = 0 }
        if (side === 1) { x = Phaser.Math.Between(0, 800); y = 600 }
        if (side === 2) { x = 0; y = Phaser.Math.Between(0, 600) }
        if (side === 3) { x = 800; y = Phaser.Math.Between(0, 600) }

        const enemy = new Enemy(this, x, y)
        this.enemies.push(enemy)
      },
      loop: true
    })
  }

  update() {
    if (this.gameOver) return

    const speed = 3
    const half = 16

    if (this.cursors.left.isDown) {
      this.player.x -= speed
    }
    if (this.cursors.right.isDown) {
      this.player.x += speed
    }
    if (this.cursors.up.isDown) {
      this.player.y -= speed
    }
    if (this.cursors.down.isDown) {
      this.player.y += speed
    }

    this.player.x = Phaser.Math.Clamp(this.player.x, half, 800 - half)
    this.player.y = Phaser.Math.Clamp(this.player.y, half, 600 - half)

    this.enemies.forEach((enemy) => {
      enemy.moveTowards(this.player.x, this.player.y)

      if (enemy.distanceTo(this.player.x, this.player.y) < 32) {
        this.gameOver = true
        this.player.setFillStyle(0xff0000)
        this.add.text(400, 280, 'GAME OVER', {
          fontSize: '48px',
          color: '#ffffff'
        }).setOrigin(0.5)
        this.add.text(400, 340, 'Přežil jsi: ' + this.score + ' sekund', {
          fontSize: '24px',
          color: '#ffff00'
        }).setOrigin(0.5)
      }
    })
  }
}