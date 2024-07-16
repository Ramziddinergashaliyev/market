import { api } from "../api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPaymets: build.query({
      query: (params) => ({
        url: "/get/payments",
        params,
      }),
      providesTags: ["Paymet", "Customer"],
    }),
    getPaymetById: build.query({
      query: (id) => ({
        url: `/get/payments/${id}`,
      }),
      providesTags: ["Paymet", "Customer"],
    }),
    createPaymet: build.mutation({
      query: (body) => ({
        url: "/create/payment",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Paymet", "Customer"],
    }),
    deletePaymet: build.mutation({
      query: (id) => ({
        url: `/delete/payment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Paymet", "Customer"],
    }),
    updatePaymet: build.mutation({
      query: ({ id, body }) => ({
        url: `/update/payment/${id}`,
        method: "PUT", // or "PATCH"
        body,
      }),
      invalidatesTags: ["Paymet", "Customer"],
    }),
  }),
});

export const {
  useGetPaymetsQuery,
  useGetPaymetByIdQuery,
  useCreatePaymetMutation,
  useDeletePaymetMutation,
  useUpdatePaymetMutation,
} = productApi;
