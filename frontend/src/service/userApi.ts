import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../MainUrl";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${url}/user`,
        credentials: 'include'
        }),
        
        endpoints: (builder) => ({
            loginUser: builder.mutation({
              query: (data) =>({
                url: '/login',
                method: 'POST',
                body: data
              })
            }),
        })

})

export const {useLoginUserMutation} = userApi