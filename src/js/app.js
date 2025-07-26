export function determineHealthStatus(player) {
    return player.health > 50 ? 'healthy' :
         player.health >= 15 ? 'wounded' : 'critical';
}