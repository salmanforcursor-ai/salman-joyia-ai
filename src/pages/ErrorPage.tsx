import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";
import { trackError } from "@/lib/analytics";
import { useEffect } from "react";

export default function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    if (error instanceof Error) {
      trackError(error, "ErrorPage");
    }
  }, [error]);

  let errorMessage = "An unexpected error occurred";
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText || error.data?.message || errorMessage;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-6">
            <AlertTriangle size={64} className="text-destructive mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {errorStatus === 404 ? "Page Not Found" : `Error ${errorStatus}`}
            </h1>
            <p className="text-muted-foreground mb-6">
              {errorStatus === 404
                ? "The page you're looking for doesn't exist or has been moved."
                : errorMessage}
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button asChild className="gap-2">
              <Link to="/">
                <Home size={16} />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

