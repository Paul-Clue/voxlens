/**
 * @namespace commands.variance
 */

import stats from 'stats-lite';
import { generateSentence } from './helpers';
import { addThousandsSeparators } from '../utils';

/**
 * Generates the response for the "variance" command.
 * @memberOf commands.variance
 * @param {Object} data - The data from the viz.
 * @param {string[]} data.x - Values of the independent variable.
 * @param {string[]} data.y - Values of the dependent variable.
 * @param {Object} options - The options supplied to voxlens when creating the viz.
 * @param {string} options.xLabel - Label for the x-axis.
 * @param {number} options.yLabel - Label for the y-axis.
 * @returns {string} - Response for the "variance" command.
 */
const resolver = (data, options) =>
  generateSentence(
    'Variance',
    addThousandsSeparators(stats.variance(data.y)),
    options
  );

export default resolver;
