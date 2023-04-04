// 火焰范围效果间接实现
global.fireRange = ctx => {
    ctx.player.runCommandSilent(`execute at @s as @e[type=!player,distance=..12] run data merge entity @s {Fire:80s}`)
}