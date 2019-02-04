const pool = require('../../databasePool');

class TraitTable {
    static getTraitId({ traitType, traitValue }) {
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT id FROM trait WHERE "traitType" = $1 AND "traitValue" = $2',
                [traitType.traitType, traitType.traitValue],
                (error, response) => {
                    //console.log('TraitType',traitType);
                    //console.log('TraitValue', traitValue);
                    //console.log(response);

                    if (error) return reject(error);

                    resolve({ traitId: response.rows[0].id });
                }
            )
        });
    }
}


/*TraitTable.getTraitId({traitType: 'backgroundColor', traitValue: 'green'})
.then(({ traitId }) => console.log('traitId',traitId))
.catch(error => console.error('error', error));*/

module.exports = TraitTable;

