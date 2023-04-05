StartupEvents.registry('block', event => {
    event.create('twilightdelight:maze_stove')
        .material('stone')
        .hardness(10)
        .requiresTool(true)
        .lightLevel(1)
    event.create('twilightdelight:lily_chicken_block')
    event.create('twilightdelight:fiery_snakes_block')
})