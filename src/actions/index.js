export const selectLibrary = (libraryId) => {
  return {
    type: 'selectLibrary',
    payload: libraryId
  }
}
