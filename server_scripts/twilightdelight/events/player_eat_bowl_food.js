// 碗装食物食用后返回一个碗
ItemEvents.foodEaten('#twilightdelight:bowl_food', event => {
    event.player.giveInHand('minecraft:bowl')
})