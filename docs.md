# 🛒 Redux Toolkit + React + TypeScript Project

This project is a simple **React + Redux Toolkit** app with **TypeScript** support. It demonstrates how to manage global state for products, users, and a shopping cart. Data is fetched from public APIs and displayed in React components.

---

## 🚀 Features

* **Redux Toolkit** for state management
* **Async Thunks** for API calls
* **TypeScript** for type safety
* **React + Material UI** for UI components
* Centralized store with slices:

  * `products`
  * `users`
  * `cart`

---

## 📂 Folder Structure

```
src/
├── components/
│   ├── Products.tsx     # Displays products from Redux
│   └── Users.tsx        # Displays users from Redux
├── store/
│   ├── cartSlice.ts     # Manages cart state
│   ├── productSlice.ts  # Fetches & stores products
│   ├── userSlice.ts     # Fetches & stores users
│   └── store.ts         # Configures Redux store
├── hooks/
│   └── hooks.ts         # Typed Redux hooks
├── types.ts             # Shared TypeScript interfaces
├── App.tsx              # Root app component
├── main.tsx             # Entry point with Redux Provider
└── index.css            # Global styles
```

---

## ⚡ Data Flow in Redux

1. **Component mounts** → dispatches an action (`fetchProducts`, `fetchUsers`, etc.).
2. **Thunk runs** → fetches data from an API.
3. **Slice handles result** → updates Redux state.
4. **Component re-renders** → displays updated data.

Example flow in `Products.tsx`:

```tsx
useEffect(() => {
  dispatch(fetchProducts()); // Step 1
}, [dispatch]);

// Step 4: Component re-renders when state updates
const products = useAppSelector((state) => state.products.products);
```

---

## 🧩 Slices

### 🛍️ productSlice.ts

* State shape:

  ```ts
  interface ProductsState {
    products: Product[];
    loading: boolean;
  }
  ```
* `fetchProducts` thunk fetches data from [Fake Store API](https://fakestoreapi.com/products).
* Stores products inside `state.products`.

### 👤 userSlice.ts

* State shape:

  ```ts
  interface UsersState {
    users: User[];
  }
  ```
* `fetchUsers` thunk fetches data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
* Stores users inside `state.users`.

### 🛒 cartSlice.ts

* State shape:

  ```ts
  interface CartState {
    cart: Product[];
  }
  ```
* Reducers:

  * `addToCart(product)` → pushes product into `cart`.

---

## 🎯 Typed Hooks

Inside `hooks/hooks.ts`:

```ts
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

* `useAppDispatch` → type-safe `dispatch`.
* `useAppSelector` → type-safe `selector`.

✅ This ensures TypeScript knows what your state looks like.

---

## 🖼️ Components

### Products.tsx

* Fetches products when mounted.
* Displays them in Material UI cards.
* Reads data using `useAppSelector`.

### Users.tsx

* Same as Products, but for users.
* Lists user names.

---

## 🏗️ Store Configuration

In `store/store.ts`:

```ts
export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    cart: cartReducer,
  },
});
```

* Combines all slices into one store.
* State shape looks like:

  ```ts
  {
    products: { products: [], loading: false },
    users: { users: [] },
    cart: { cart: [] }
  }
  ```

---

## ✅ Benefits of TypeScript

* Prevents mistakes like `product.pricee` (typo).
* Ensures only valid data types go into state (e.g., only `Product[]` in cart).
* Provides IntelliSense (autocomplete + hints).

Example:

```ts
const products = useAppSelector((state) => state.products.products);
// products is automatically typed as Product[] ✅
```

---

## 🔮 Next Steps (Improvements)

* Add **loading & error states** to show spinners or error messages.
* Implement `removeFromCart` in `cartSlice`.
* Use selectors (`createSelector`) for optimized performance.
* Add unit tests with Jest.

---

## 📌 Summary

* **Slices** = state + reducers + thunks.
* **Store** = combines slices.
* **Thunk** = async API calls.
* **Components** = dispatch actions & render state.
* **TypeScript** = adds safety and better developer experience.

This project gives you a strong foundation in **Redux Toolkit with TypeScript**. 🎉
