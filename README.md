# SheiUn's Minecraft Server

> Base on itzg/minecraft-server

## Setup

1. `docker-compose up -d`
2. gamerule mobGriefing false
3. gamerule doFireTick false
4. gamerule keepInventory true
5. edit another files

## Save

### Server

1. `git add .`
2. `git commit -m "backup"`
3. `git push`

### World

``` bash
tar -zcvf ../world.tar.gz world
tar -zcvf ../world_nether.tar.gz world_nether
tar -zcvf ../world_the_end.tar.gz world_the_end
gdrive upload ../world.tar.gz
gdrive upload ../world_nether.tar.gz
gdrive upload ../wolrd_the_end.tar.gz
rm ../*.tar.gz
```

## Tips

### Server

1. `docker-compose exec minecraft rcon-cli reload`
   * reload server
2. `docker-compose exec minecraft rcon-cli list`
   * see who is online
