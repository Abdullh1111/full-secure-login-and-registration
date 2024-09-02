import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../MainUrl";
import { TUser } from "../Types/userType";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: url,
        credentials: 'include'
        }),
        
        endpoints: (builder) => ({
            registerUser: builder.mutation({
              query: (data : TUser) =>({
                url: '/register',
                method: 'POST',
                body: data
              })
            }),
        })

})

export const {useRegisterUserMutation} = userApi