export default (state = null, action) => {
  switch (action.type) {
    case 'selectLibrary':
      return action.payload
    default:
      return state
  }
}
