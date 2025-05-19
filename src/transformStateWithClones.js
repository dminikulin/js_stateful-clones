'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const history = [];
  let currentState = { ...state };

  for (const obj of actions) {
    const { type } = obj;

    if (type === 'addProperties') {
      const { extraData } = obj;

      currentState = { ...currentState, ...extraData };
    }

    if (type === 'removeProperties') {
      const { keysToRemove } = obj;

      for (const key of keysToRemove) {
        delete currentState[key];
      }
    }

    if (type === 'clear') {
      currentState = {};
    }

    history.push({ ...currentState });
  }

  return history;
}

module.exports = transformStateWithClones;
