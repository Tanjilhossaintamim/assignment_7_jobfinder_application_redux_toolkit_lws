import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJob, editJob, getJobs, removeJob } from "./jobApi"

const initialState = {
    isLoading: false,
    isError: false,
    jobs: [],
    error: ''
}


const jobSlice = createSlice({
    name: 'job',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.isLoading = true;
                state.isError = false
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = action.payload
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.jobs = []
            })
            .addCase(postJob.pending, (state) => {
                state.isLoading = true;
                state.isError = false
            })
            .addCase(postJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs.push(action.payload);
            })
            .addCase(postJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;

            })
            .addCase(updateJob.pending, (state) => {
                state.isLoading = true;
                state.isError = false
            })
            .addCase(updateJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                const findUpdatedIndex = state.jobs.findIndex(job => job.id == action.payload.id);
                state.jobs[findUpdatedIndex] = action.payload;
            })
            .addCase(updateJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;

            })
            .addCase(deletejob.pending, (state) => {
                state.isLoading = true;
                state.isError = false
            })
            .addCase(deletejob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = state.jobs.filter(job => job.id != action.payload.id);
            })
            .addCase(deletejob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;

            })
    }
})

// thunks

export const fetchJobs = createAsyncThunk('job/fetchJobs', async () => {
    const jobs = await getJobs();
    return jobs
})
export const postJob = createAsyncThunk('job/postJob', async (data) => {
    const job = await addJob(data);
    return job
})

export const updateJob = createAsyncThunk('job/updateJob', async (data) => {
    const updatedJob = await editJob(data)
    return updatedJob;
})
export const deletejob = createAsyncThunk('job/deleteJob', async (id) => {
    const job = await removeJob(id);
    return job
})












export default jobSlice.reducer;