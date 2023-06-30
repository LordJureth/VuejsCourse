Vue.createApp({
    data: function () {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            gameResult: null,
            battlelog: [],
        }
    },
    watch: {
        playerHealth: function (value) {
            if (isDraw(value, this.monsterHealth)) {
                this.gameResult = 1;
            }

            if (hasLost(value)) {
                this.gameResult = 2;
            }
        },
        monsterHealth: function (value) {
            if (isDraw(value, this.playerHealth)) {
                this.gameResult = 1;
            }

            if (hasLost(value)) {
                this.gameResult = 3;
            }
        },
    },
    computed: {
        monsterBarStyles: function () {
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles: function () {
            return {width: this.playerHealth + '%'}
        },
        specialAttackUsable: function () {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster: function (max = 12, min = 5) {
            this.currentRound++;
            this.monsterHealth = this.adjustHealth(
                this.monsterHealth,
                max,
                min
            );
            this.attackPlayer();
        },
        attackPlayer: function (max = 12, min = 8) {
            this.playerHealth = this.adjustHealth(
                this.playerHealth,
                max,
                min,
                true
            );
        },
        specialAttach: function () {
            this.attackMonster(25, 10);
            this.specialAttackCount++;
        },
        heal: function (max = 20, min = 8) {
            this.currentRound++;
            this.playerHealth = this.adjustHealth(
                this.playerHealth,
                max,
                min,
                false,
                true
            );
            this.attackPlayer();
        },
        surrender: function () {
            this.gameResult = 2;
        },
        resetGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.gameResult = null;
            this.battlelog = [];
        },
        logger: function (who, what, value) {
            this.battlelog.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        },
        adjustHealth: function (health, min, max, monster = false, healing = false) {
            const randomNumber = getRandomNumber(min, max);
            if (healing) {
                let newHealth = health + randomNumber
                
                if (newHealth > 100) {
                    newHealth = 100;
                }
        
                this.logger(monster ? 'Monster' : 'Player', 'heal', randomNumber);
        
                return newHealth;
            }
        
            let newHealth = health - randomNumber;
            
            if (newHealth > 100) {
                newHealth = 100;
            }
        
            if (newHealth < 0) {
                newHealth = 0;
            }
        
            this.logger(monster ? 'Monster' : 'Player', 'damage', randomNumber);
        
            return newHealth;
        }
    }
}).mount('#game');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} 

function isDraw(value1, value2 ) {
    return hasLost(value1) && hasLost(value2);
}

function hasLost(value) {
    return value <=0;
}