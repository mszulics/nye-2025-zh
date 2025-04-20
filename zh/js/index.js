/**
 * Complete the functions below, then run `npm run test` in the root directory to check your work.
 * 
 * For more details on expected input and output, check the tests.
 * If all tests are green, you are done! Keep in mind that the actual implementation will be also reviewed.
 * 
 * (don't forget about the html/css task in ../html-css!)
 * 
 * If you find a buggy test, feel free to report (and/or fix) it.
 *
 * ========================================================================================================
 * */
/**
 * Creates a simple object for HTTP headers based on the input.
 * 
 * The input is in the following format:
 * [
 *  [<Header-Name>, <header-value1>, <header-value2?>, ...],
 *  ...
 * ]
 * 
 * Expected output: {
 *  <header-name>: '<header-value1>, <header-value2>, ...'
 * }
 * 
 */
module.exports.createHttpHeaders = (input) => {
    // TODO: your code here
    const headers = {};

  if (!Array.isArray(input)) return headers;

  input.forEach(([name, ...values]) => {
    const key = name.toLowerCase();
    const value = values.join(', ');

    if (headers[key]) {
      headers[key] += `, ${value}`;
    } else {
      headers[key] = value;
    }
  });

  return headers;
};

/**
 * Returns items for a paginated list.
 * 
 * The input is in the following format:
 * items: [
 *  { id: 1, title: '<main>item 1</main>', displayTitle: 'Item 1', metadata: {} },
 * ]
 * 
 * params: {
 *  page: 1,
 *  pageSize: 4,
 *  sort: 'asc',
 * }
 * 
 * Expected output:
 * [
 *  { id: 1, title: { main: 'Item 1' }  }
 * ]
 */
module.exports.getItems = (items, params) => {
    // TODO: your code here
    if (!Array.isArray(items) || typeof params !== 'object') return [];

    const { page = 1, pageSize = 10 } = params;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return items.slice(start, end).map(item => ({
        id: item.id,
        title: {
            main: item.displayTitle
        }
    }));
}
