# SheiUn's Minecraft Server

> Base on itzg/minecraft-server

## Setup

1. `docker-compose up -d`
2. gamerule mobGriefing false
3. gamerule doFireTick false
4. gamerule keepInventory true
5. edit another files

## Save

> To restore data

1. `docker commit`
   * commit as an image

## Tips

### Server

1. `docker-compose exec minecraft rcon-cli reload`
   * reload server
2. `docker-compose exec minecraft rcon-cli list`
   * see who is online
