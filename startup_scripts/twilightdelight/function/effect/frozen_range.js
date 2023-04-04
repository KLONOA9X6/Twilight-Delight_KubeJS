// 霜冻范围间接实现
global.frozenRange = ctx => {
    ctx.player.runCommandSilent(`execute at @s as @e[type=!player,distance=..12] run effect give @s twilightforest:frosted 30 4`)
}