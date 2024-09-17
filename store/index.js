import "./config.js"
import storeSlices from "./*/*.slice.js"

// Minimal check to see if imported slice has all properties of an actual slice
const isValid = slice => {
  const sliceProps = [
    "actions",
    "caseReducers",
    "name",
    "reducer",
    "getInitialState"
  ]
  /**
   * Checks if all properties of the slice object are included in the sliceProps array
   * @param {Object} slice - The slice object to check
   * @param {Array} sliceProps - An array of allowed property names
   /**
    /**
     * Maps over an array of slices and extracts the 'slice' property from each slice's value.
     * @param {Array} slices - An array of objects containing a 'value' property with a 'slice' sub-property.
     * @returns {Array} A new array containing only the 'slice' values from each input object.
     */
    * Filters an array of slices based on the validity of their 'value.slice' property
    * @param {Array} slices - An array of slice objects to filter
    * @param {Function} isValid - A function that checks the validity of a slice
    * @returns {Array} An array of slice objects that have a valid 'value.slice' property
    */
   * @returns {boolean} True if all properties of slice are included in sliceProps, false otherwise
   */
  return Object.keys(slice).every(prop => sliceProps.includes(prop))
}

export const slices = storeSlices
  .filter(slice => slice.value.slice && isValid(slice.value.slice))
  .map(slice => slice.value.slice)

export const connectors = slices.reduce((acc, slice) => {
  let name = slice.name.charAt(0).toUpperCase() + slice.name.slice(1)
  acc[name] = slice.reducer
  return acc
}, {})
