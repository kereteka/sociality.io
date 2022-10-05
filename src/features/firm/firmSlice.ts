import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface FirmState {
  value: number
}

// Define the initial state using that type
const initialState: FirmState = {
  value: 0,
}

export const firmSlice = createSlice({
  name: 'status',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    firmState: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

export const { firmState } = firmSlice.actions



// Other code such as selectors can use the imported `RootState` type
export const selectStatus = (state: RootState) => state.firm

export default firmSlice.reducer