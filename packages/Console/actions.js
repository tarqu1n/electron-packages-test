export const log = message => dispatch => {
  dispatch({ type: 'LOG_MESSAGE', payload: message })
};

export default {};
