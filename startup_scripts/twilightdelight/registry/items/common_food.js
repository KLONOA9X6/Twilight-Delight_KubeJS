StartupEvents.registry('item', event => {
    // 九头蛇肉块
    event.create('twilightdelight:hydra_piece').food(food => {
        food
            .hunger(9)
            .saturation(2)
            .effect('regeneration', 20, 0, 1)
            .meat()
    })
    // 生鹿肉肋条
    event.create('twilightdelight:raw_venison_rib').food(food => {
        food
            .hunger(2)
            .saturation(0.25)
            .meat()
    })
    // 鹿肉肋排
    event.create('twilightdelight:cooked_venison_rib').food(food => {
        food
            .hunger(4)
            .saturation(0.875)
            .meat()
    })
    // 生牛头人肉片
    event.create('twilightdelight:raw_meef_slice').food(food => {
        food
            .hunger(1)
            .saturation(0.7)
            .meat()
    })
    // 熟牛头人肉片
    event.create('twilightdelight:cooked_meef_slice').food(food => {
        food
            .hunger(3)
            .saturation(0.6)
            .meat()
    })
    // 生虫肉
    event.create('twilightdelight:raw_insect').food(food => {
        food
            .hunger(2)
            .saturation(0.2)
            .meat()
    })
    // 熟虫肉
    event.create('twilightdelight:cooked_insect').food(food => {
        food
            .hunger(6)
            .saturation(0.6)
            .meat()
    })
    // 火炬浆果曲奇
    event.create('twilightdelight:torchberry_cookie').food(food => {
        food
            .hunger(2)
            .saturation(0.2)
    })
    // 巧克力夹心薄饼
    event.create('twilightdelight:chocolate_wafer').food(food => {
        food
            .hunger(9)
            .saturation(0.6)
    })
    // 试验物品 113
    event.create('twilightdelight:experiment_113').food(food => {
        food
            .hunger(6)
            .saturation(0.2)
            .effect('weakness', 100, 0, 0.33)
    })
    // 试验物品 110
    event.create('twilightdelight:experiment_110').food(food => {
        food
            .hunger(12)
            .saturation(0.3)
            .effect('nausea', 1200, 0, 1)
            .effect('health_boost', 2400, 0, 1)
            .effect('night_vision', 2400, 0, 1)
    })
    // 浆果串
    event.create('twilightdelight:berry_stick').food(food => {
        food
            .hunger(4)
            .saturation(0.2)
    })
})