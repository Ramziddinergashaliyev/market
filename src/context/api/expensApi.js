import { api } from "./index";

export const ExpensAPi = api.injectEndpoints({
  endpoints: (build) => ({
    getExpens: build.query({
      query: (params) => ({
        url: "/get/expenses",
        params,
      }),
      providesTags: ["Expens"],
    }),
    getExpensById: build.query({
      query: (id) => ({
        url: `/expens/${id}`,
      }),
      providesTags: ["Expens"],
    }),
    createExpens: build.mutation({
      query: (body) => ({
        url: "/create/expense",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Expens"],
    }),
    deleteExpens: build.mutation({
      query: (id) => ({
        url: `/delete/expense/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Expens"],
    }),
    updateExpens: build.mutation({
      query: ({ id, body }) => ({
        url: `/update/expense/${id}`,
        method: "PUT", // or "PATCH"
        body,
      }),
      invalidatesTags: ["Expens"],
    }),
  }),
});

export const {
  useGetExpensQuery,
  useGetExpensByIdQuery,
  useCreateExpensMutation,
  useDeleteExpensMutation,
  useUpdateExpensMutation,
} = ExpensAPi;
