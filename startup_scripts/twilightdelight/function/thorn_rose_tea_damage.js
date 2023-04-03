// 饮用后给予玩家4点伤害并检查其是否死亡
global.thornRoseTeaDamage = ctx => {
    ctx.server.runCommandSilent(`gamerule showDeathMessages false`)
    if (ctx.player.getHealth() <= 4) {  // 检测玩家血量是否小于等于4
        let playerName = ctx.player.getName()
        ctx.server.tell(`${playerName}承认了每朵玫瑰都有刺`)
    }
    ctx.player.attack(4)  // 给予玩家4点伤害
    ctx.server.runCommandSilent(`gamerule showDeathMessages true`)
}