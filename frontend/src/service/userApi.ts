/* eslint-disable @typescript-eslint/no-explicit-any */
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
            getUserData: builder.query<any,void>({
              query: () =>({
                url: '/getuserdata',
                method: 'GET'
              })
            }),
            logOut: builder.query<any,void>({
              query: () =>({
                url: '/logout',
                method: 'GET'
              })
            }),
        })

})

export const {useLoginUserMutation, useGetUserDataQuery,useLazyLogOutQuery} = userApi