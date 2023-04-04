// 饮用后给予玩家4点伤害并检查其是否死亡
global.thornRoseTeaDamage = ctx => {
    ctx.server.runCommandSilent(`gamerule showDeathMessages false`)
    if (ctx.player.getHealth() <= 4) {  // 检测玩家血量是否小于等于4
        ctx.player.kill()
        let playerName = ctx.player.displayName
        ctx.server.tell([playerName.append(Text.of('')), `承认了每朵玫瑰都有刺`])
        // 另一种写法，playerName是不可被点击的
        // let playerName = ctx.player.displayName.getString()
        // ctx.server.tell(`${playerName}承认了每朵玫瑰都有刺`)
        // 也可以这样，但是这么搞整句都可以被点击
        // ctx.server.tell(playerName.append(`承认了每朵玫瑰都有刺`))
    }
    ctx.player.attack(4)
    ctx.server.schedule(4, (callback) => {
        callback.server.runCommandSilent(`gamerule showDeathMessages true`)
    })
}