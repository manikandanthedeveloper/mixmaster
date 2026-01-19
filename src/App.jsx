import { RouterProvider } from "react-router";
import AppRouter from "./AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 minutes
			refetchOnWindowFocus: false,
		},
	},
});

const App = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={AppRouter(queryClient)} />
			</QueryClientProvider>
		</div>
	);
};

export default App;
