/**
 * Generates a pagination array based on the total number of data entries and entities per page.
 *
 * @param {number} totalData - The total number of data entries.
 * @param {number} entitiesPerPage - The number of entities to display per page.
 * @returns {number[]} An array representing the pagination.
 */

export function generatePagination(totalData: any, entitiesPerPage: any) {
  const totalPages = Math.ceil(totalData / entitiesPerPage);

  // Generate an array representing the pagination
  const pagination = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return pagination;
}

/**
 * Calculates the start and end indices for pagination.
 *
 * @param {number} pageNumber - The current page number.
 * @param {number} entitiesPerPage - The number of entities displayed per page.
 * @returns {{start: number, end: number}} The start and end indices.
 */
export function calculateStartEndIndices(
  pageNumber: number,
  entitiesPerPage: number
) {
  const start = (pageNumber - 1) * entitiesPerPage;
  const end = start + entitiesPerPage;
  return { start, end };
}
