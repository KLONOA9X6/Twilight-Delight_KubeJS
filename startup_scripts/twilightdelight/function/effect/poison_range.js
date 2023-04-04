// 剧毒范围效果间接实现
global.poisonRange = ctx => {
    ctx.player.runCommandSilent(`execute at @s as @e[distance=..12] run effect give @s minecraft:poison 1 5`)
}