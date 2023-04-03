StartupEvents.registry('item', event => {
    // 荆棘玫瑰茶
    event.create('twilightdelight:thorn_rose_tea').useAnimation('drink').food(food => {
        food
            .hunger(4)
            .saturation(0.25)
            .alwaysEdible()
            .effect('regeneration', 100, 1, 1)
            .eaten(ctx => global.thornRoseTeaDamage(ctx))  // 饮用后执行伤害函数
    })
    // 火炬浆果汁
    event.create('twilightdelight:torchberry_juice').useAnimation('drink').food(food => {
        food
            .hunger(4)
            .saturation(0.25)
            .alwaysEdible()
            .eaten(ctx => global.fireRange(ctx))
    })
    // 植物素汁
    event.create('twilightdelight:phytochemical_juice').useAnimation('drink').food(food => {
        food
            .hunger(4)
            .saturation(0.25)
            .alwaysEdible()
            .eaten(ctx => global.poisonRange(ctx))
    })
    // 冰川冰茶
    event.create('twilightdelight:glacier_ice_tea').useAnimation('drink').food(food => {
        food
            .hunger(4)
            .saturation(0.25)
            .alwaysEdible()
            .eaten(ctx => global.frozenRange(ctx))
    })
    // 暮色山泉™
    event.create('twilightdelight:twilight_spring').useAnimation('drink').food(food => {
        food
            .hunger(0)
            .saturation(0)
            .alwaysEdible()
            .effect('resistance', 600, 1, 1)
    })
    // 盈泪之饮
    event.create('twilightdelight:tear_drink').useAnimation('drink').food(food => {
        food
            .hunger(1)
            .saturation(0)
            .effect('fire_resistance', 24000, 0, 1)
            .eaten(ctx => global.temporalSadness(ctx))
    })
})