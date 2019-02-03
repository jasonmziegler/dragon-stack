const pool = require('../../databasePool');
const DragonTable = require('../dragonTrait/table');

const getDragonWithTraits = ({ dragonId }) => {
    return Promise.all([
        DragonTable.getDragon({ dragonId })
    ])
};