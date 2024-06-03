import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    prompt: "",
    resultData: "",
    prevPrompt: [],
    newDoubt: false,
}

const promptSlice = createSlice({
    name: "doubts",
    initialState: initialState,
    reducers: {
        setprompt: (state, value) => {
            state.prompt = value.payload;
        },
        setResultData: (state, value) => {
            state.resultData = value.payload;
        },
        setPrevPrompt: (state, value) => {
            state.prevPrompt.push(value.payload);
        },
        setNewDoubt: (state, value) => {
            state.newDoubt = value.payload;
        }
    }
});

export const { setprompt, setNewDoubt, setPrevPrompt, setResultData } = promptSlice.actions;

export default promptSlice.reducer;
