import PageNotFoundIcon from "@/assets/PageNotFoundIcon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

function NotFoundPage() {
  return (
    <main className="not-found">
      <PageNotFoundIcon />
      <h1>Page not found</h1>
    </main>
  );
}

export default NotFoundPage;
