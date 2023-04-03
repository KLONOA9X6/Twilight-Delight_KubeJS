StartupEvents.registry('item', event => {
    // 荧光煲
    event.create('twilightdelight:glowstew').food(food => {
        food
            .hunger(12)
            .saturation(0.675)
            .effect('glowing', 200, 1, 1)
            .effect('farmersdelight:comfort', 1200, 1, 1)
    })
        .maxStackSize(1)
    // 荧光浇汁鹿排配意面
    event.create('twilightdelight:glow_venison_rib_with_pasta').food(food => {
        food
            .hunger(12)
            .saturation(0.7)
            .meat()
            .effect('glowing', 200, 1, 1)
            .effect('farmersdelight:nourishment', 6000, 1, 1)
    })
        .maxStackSize(16)
    // 小炒肥虫
    event.create('twilightdelight:fried_insect').food(food => {
        food
            .hunger(10)
            .saturation(0.61)
            .meat()
            .effect('farmersdelight:nourishment', 6000, 1, 1)
    })
        .maxStackSize(16)
    // 万草煲
    event.create('twilightdelight:thousand_plant_stew').food(food => {
        food
            .hunger(10)
            .saturation(0.61)
            .effect('health_boost', 600, 1, 1)
            .effect('nausea', 300, 1, 0.1)
    })
        .maxStackSize(16)
    // 炽烤恶魂肉
    event.create('twilightdelight:grilled_ghast').food(food => {
        food
            .hunger(10)
            .saturation(0.72)
            .meat()
            .effect('farmersdelight:nourishment', 6000, 1, 1)
    })
        .maxStackSize(16)
    // 盘装荷花鸡
    event.create('twilightdelight:lily_chicken').food(food => {
        food
            .hunger(16)
            .saturation(0.875)
            .meat()
            .effect('fire_resistance', 6000, 1, 1)
            .effect('farmersdelight:nourishment', 6000, 1, 1)
    })
        .maxStackSize(16)
    // 盘装炽汁蛇宴
    event.create('twilightdelight:fiery_snakes').food(food => {
        food
            .hunger(20)
            .saturation(1.9)
            .meat()
            .effect('farmersdelight:nourishment', 12000, 1, 1)
            .effect('farmersdelight:comfort', 6000, 1, 1)
            .effect('strength', 6000, 1, 1)
            .effect('regeneration', 400, 1, 1)
    })
        .maxStackSize(16)
    // 极光冰激凌
    event.create('twilightdelight:aurora_ice_cream').food(food => {
        food
           .hunger(5)
           .saturation(0.2)
           .effect('speed', 1200, 2, 1)
           .effect('slowness', 600, 0, 1)
    })
       .maxStackSize(16)
})