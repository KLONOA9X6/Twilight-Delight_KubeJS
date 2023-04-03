// 碗装食物食用后返回一个碗
ItemEvents.foodEaten(event => {
    if (event.item.hasTag('twilightdelight:bowl_food')) {
        event.player.giveInHand('minecraft:bowl')
    }
})