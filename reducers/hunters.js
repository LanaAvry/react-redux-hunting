const initialState = []

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "HUNTER_CREATE": {
			let stateUpdate = [...state]
			stateUpdate.push(action.payload)
			return stateUpdate
		}
		case "HUNTER_DELETE": {
			let stateUpdate = [...state]
			stateUpdate.splice(action.payload, 1)
			return [...stateUpdate]
		}
	   	default:
	   		return state
	}
}

export default reducer
