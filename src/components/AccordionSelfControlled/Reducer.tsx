export type ActionTypeAC = {
    type: string
}

export type stateType = {
    collapsed:boolean
}

export const reducer = (state: stateType, action: ActionTypeAC):stateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return  {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            // return state
            // Или
            throw new Error("Bad action type")
    }
    return state
}