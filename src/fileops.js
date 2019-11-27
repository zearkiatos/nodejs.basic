module.exports = {
  /**
   * @params {number[]} list
   */
  incrementValues: function(list) {
    const mapIncrement = val => Number(val) + 1;
    return list.map(mapIncrement);
  },

  /**
   * @params {string[]} list
   */
  callNames: function(list) {
    const mapCall = name => `Hola ${name}! Aqui esta tu nombre.`;
    return list.map(mapCall);
  }
}
