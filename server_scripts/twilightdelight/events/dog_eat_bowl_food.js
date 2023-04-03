// 给狼使用处于bowl_food_meat标签内的物品时给予一个碗
// 淦！找不到一个读取手持物品tag的方法，先放着吧。。。
//ItemEvents.entityInteracted(event => {
//    event.server.tell(event.target.type)
//    event.server.tell(event.player.getHeldItem(event.hand))
//    if (event.target.type == "minecraft:wolf" && event.player.getHeldItem(event.hand) == '#twilightdelight:bowl_food_meat') {
//        event.player.giveInHand('minecraft:bowl')
//    }
//})