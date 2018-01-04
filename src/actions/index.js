// this is an action creator
// an action is an object with a property named type
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
};