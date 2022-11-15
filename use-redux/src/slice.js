import {createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name:"Theme",
    initialState:{
      isLight:true,
      msg:""
    },
    reducers:{
        setisLight:(stateObj,action)=>{
            stateObj.isLight = !stateObj.isLight
            stateObj.msg=action.payload
        }
    }
});

export const {setisLight}=themeSlice.actions;
export default themeSlice.reducer;
