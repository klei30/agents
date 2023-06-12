import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import DashboardLayout from "./Layout";
import NewRoot from "./routes/new/root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BotLayout from "./Layout/BotLayout";
import BotEmbedRoot from "./routes/bot/embed";
import BotPreviewRoot from "./routes/bot/preview";
import BotDSRoot from "./routes/bot/ds";
import BotSettingsRoot from "./routes/bot/settings";
import LoginRoot from "./routes/login/root";
import { AuthProvider } from "./context/AuthContext";
import SettingsRoot from "./routes/settings/root";
const router = createHashRouter([
  {
    element: (
      <DashboardLayout>
        <Root />
      </DashboardLayout>
    ),
    path: "/",
  },
  {
    element: (
      <DashboardLayout>
        <NewRoot />
      </DashboardLayout>
    ),
    path: "/new",
  },
  {
    path: "/bot/:id",
    element: (
      <BotLayout>
        <BotEmbedRoot />
      </BotLayout>
    ),
  },
  {
    path: "/bot/:id/preview",
    element: (
      <BotLayout>
        <BotPreviewRoot />
      </BotLayout>
    ),
  },
  {
    path: "/bot/:id/data-sources",
    element: (
      <BotLayout>
        <BotDSRoot />
      </BotLayout>
    ),
  },
  {
    path: "/bot/:id/settings",
    element: (
      <BotLayout>
        <BotSettingsRoot />
      </BotLayout>
    ),
  },
  {
    path: "/login",
    element: <LoginRoot />,
  },
  {
    path: "/settings",
    element: <DashboardLayout><SettingsRoot /></DashboardLayout>,
  }
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
