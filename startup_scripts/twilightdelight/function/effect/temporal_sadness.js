// 莫名的悲伤效果间接实现
global.temporalSadness = ctx => {
    ctx.player.runCommandSilent(`execute at @s as @e[distance=..12] run effect give @s minecraft:weakness 60 1`)
    ctx.player.runCommandSilent(`execute at @s as @e[distance=..12] run effect give @s minecraft:slowness 60 1`)
    // 粒子效果（TODO）
    //ctx.player.tell('你周围的生物忽然感到莫名的悲伤')
}