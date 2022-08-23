const rabbitmq = require('msgbroker-nxg-cg');
const {log, constants} = require('utils-nxg-cg');
const {api} = require('api-cg-lib');
const {emits} = constants;


/**
 * Method for api connections
 * @param msg
 * @param cfg
 * @param snapshot
 * @returns {Promise<void>}
 */
 module.exports.process = async function apiProcess(msg, cfg, snapshot = {}) {
    try {
        const _data = await api(msg, cfg);
        this.emit(emits.data, {data: _data});
        snapshot.lastUpdated = new Date();
        this.emit(emits.snapshot, snapshot);
        log.info(constants.FINISH_EXEC);
        this.emit(emits.end);
    } catch (e) {
        log.error(`ERROR: ${e}`);
        const emsg = e;
        this.emit('error', e);
        await rabbitmq.producerErrorMessage(msg,emsg);
    }
};