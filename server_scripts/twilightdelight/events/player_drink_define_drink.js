// 饮品饮用后返回一个玻璃瓶
ItemEvents.foodEaten('#twilightdelight:define_drink', event => {
    event.player.giveInHand('minecraft:glass_bottle')
})