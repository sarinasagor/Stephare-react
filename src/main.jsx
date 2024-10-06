import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // CSS Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JS Bootstrap
import App from "./App";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Provider } from 'react-redux';
import store from './redux/store'; 

const queryClient = new QueryClient();

import "../public/css/app.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <App />
          </MantineProvider>
        </QueryClientProvider>
      </Provider>
  </StrictMode>
);
