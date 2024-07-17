import { api } from ".";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCustomers: build.query({
      query: ({ page }) => ({
        url: `/get/customers?skip=${page}`,
      }),
      providesTags: ["Customer"],
    }),
    getCustomerById: build.query({
      query: (id) => ({
        url: `/get/customer/${id}`,
      }),
      providesTags: ["Customer"],
    }),
    createCustomer: build.mutation({
      query: (body) => ({
        url: "/create/customer",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Customer"],
    }),
    deleteCustomer: build.mutation({
      query: (id) => ({
        url: `/delete/customer/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Customer"],
    }),
    updateCustomer: build.mutation({
      query: ({ id, body }) => ({
        url: `/update/customer/${id}`,
        method: "PATCH", // or "PATCH"
        body,
      }),
      invalidatesTags: ["Customer"],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useGetCustomerByIdQuery,
  useCreateCustomerMutation,
  useDeleteCustomerMutation,
  useUpdateCustomerMutation,
} = productApi;
