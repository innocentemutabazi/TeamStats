const team = {
    _players: [],
    _games: [],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            newOpponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        this._games.push(game);
    },
};
team.addPlayer('Bugs', 'Bunny', 76)
console.log(team.players)
team.addGame('Titans', 98, 100)
console.log(team.games)
team.addPlayer('Gisa', 'Loic', 9)
console.log(team.players)
team.addGame('Roblox', 79,87)
console.log(team.games)