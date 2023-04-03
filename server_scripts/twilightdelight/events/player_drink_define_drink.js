// 饮品饮用后返回一个玻璃瓶
ItemEvents.foodEaten(event => {
    if (event.item.hasTag('twilightdelight:define_drink')) {
        event.player.giveInHand('minecraft:glass_bottle')
    }
})