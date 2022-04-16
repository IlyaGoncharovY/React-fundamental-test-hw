import {reducer, stateType} from "./Reducer";

test("collapsed should be true", () => {
    // data
    const state: stateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    //expect
    expect(newState.collapsed).toBe(true)
})
test("collapsed should be false", () => {
    // data
    const state: stateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    //expect
    expect(newState.collapsed).toBe(false)
})

test("fake should be false", () => {
    // data
    const state: stateType = {
        collapsed: true
    }
    //action
  //  const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    //expect
    expect(()=>{
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()
})