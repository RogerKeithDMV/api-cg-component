const {producerErrorMessage} = require('errorhandler-nxg-cg');
const {constants} = require('utils-nxg-cg');
const {api} = require('api-cg-lib');
const {emits} = constants;
const {loging_elastic} = require('loging-elastic-cg-lib');
const {createSum, checkSumMD5} = require("md5-node-cg-lib");
const {log_levels} = constants;

/**
 * Method for api connections
 * @param msg
 * @param cfg
 * @param snapshot
 * @returns {Promise<void>}
 */
 module.exports.process = async function apiProcess(msg, cfg, snapshot = {}) {
    try {
        loging_elastic(constants.START_EXEC, log_levels.debug);
        const _data = await api(msg, cfg);
        this.emit(emits.data, {data: {content:_data}});
        snapshot.lastUpdated = new Date();
        this.emit(emits.snapshot, snapshot);
        loging_elastic(constants.FINISH_EXEC, log_levels.debug);
        this.emit(emits.end);
    } catch (e) {
        this.emit(emits.error, e);
        loging_elastic(e, log_levels.error);
        producerErrorMessage(msg, e);
    }
};