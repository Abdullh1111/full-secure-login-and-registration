import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../MainUrl";

export const verificationApi = createApi({
    reducerPath: "verification",
    baseQuery: fetchBaseQuery({
        baseUrl: `${url}/verification`,
        credentials: 'include'
        }),
        
        endpoints: (builder) => ({
            emailVerify: builder.mutation({
              query: (data) =>({
                url: '/emailverify',
                method: 'POST',
                body: data
              })
            }),
        })

})

export const {useEmailVerifyMutation} = verificationApi