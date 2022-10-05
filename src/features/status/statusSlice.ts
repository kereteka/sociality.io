import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CheckStatus {
  value: number
}

// Define the initial state using that type
const initialState: CheckStatus = {
  value: 0,
}

export const statusSlice = createSlice({
  name: 'status',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    checkStatus: (state, action: PayloadAction<number>) => {
      if (action.payload == 0) { return 'bg-[#F6BF37' }
      if (action.payload == 1) { return 'bg-[#3BC083]' }
      if (action.payload == 2) { return 'bg-[#ACACAC]' }
      if (action.payload == 3) { return 'bg-[#68B1F1]]' }
      if (action.payload == 4) { return 'bg-[#F6F6F6]' }
      return ''
    }
  }
})

export const { checkStatus } = statusSlice.actions

export const checkStatusAsync = (amount: number) => (dispatch) => {
  setTimeout(() => {
    dispatch(checkStatus(amount))
  }, 0)
}


// Other code such as selectors can use the imported `RootState` type
export const selectStatus = (state: RootState) => state.status

export default statusSlice.reducer