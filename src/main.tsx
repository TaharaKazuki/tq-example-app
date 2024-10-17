import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WithQuery from './pages/WithQuery.tsx';
import WithoutQuery from './pages/WithoutQuery.tsx';
import WithInfiniteQuery from './pages/WithInfiniteQuery.tsx';
import Post from './pages/Post.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  { path: '', element: <App /> },
  { path: '/withoutquery', element: <WithoutQuery /> },
  { path: '/withquery', element: <WithQuery /> },
  {
    path: '/withquery/:id',
    element: <Post />,
  },
  {
    path: '/withinfinitequery',
    element: <WithInfiniteQuery />,
  },
]);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 2000,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);
