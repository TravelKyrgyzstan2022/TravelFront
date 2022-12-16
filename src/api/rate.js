export const getAdmin = createAsyncThunk(
    "user/admin",
    async ({ userId }, { rejectWithValue }, data) => {
    try {
        const res = await API.put(
        `api/v1/superadmin/new-admin?user_id=${userId}`,
        data
        );

        return res;
    } catch (error) {
        rejectWithValue(error.response.data);
    }
    }
);