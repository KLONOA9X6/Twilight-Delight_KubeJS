// 给狼使用处于bowl_food_meat标签内的物品时给予一个碗
// 同时判定狼的Age标签是否小于等于0，InLove是否等于0(TODO)
ItemEvents.entityInteracted(event => {
    if (event.target.type == "minecraft:wolf" && event.player.getHeldItem(event.hand).hasTag('twilightdelight:bowl_food_meat')) {
        let wolfInLove = event.target.fullNBT.InLove
        let wolfAge = event.target.fullNBT.Age
        if (wolfInLove == 0 && wolfAge <= 0) {
            event.player.giveInHand('minecraft:bowl')
        }
    }
})