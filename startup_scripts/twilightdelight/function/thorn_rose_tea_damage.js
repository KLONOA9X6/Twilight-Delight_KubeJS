// 饮用后给予玩家4点伤害并检查其是否死亡
global.thornRoseTeaDamage = ctx => {
    ctx.server.runCommandSilent(`gamerule showDeathMessages false`)
    ctx.player.damage(4)  // 给予玩家4点伤害(这个会导致崩溃，原因暂时不明)
    if (ctx.player.getHealth() <= 4) {  // 检测玩家血量是否小于等于4
        ctx.server.tell(ctx.player + '承认了每朵玫瑰都有刺')
    }
    ctx.server.runCommandSilent(`gamerule showDeathMessages true`)
}