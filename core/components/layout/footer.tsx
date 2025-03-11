import { copyrightName, copyrightYear } from "@/core/lib/constants";

export default async function Footer() {
  return (
    <footer className="text-sm text-muted-foreground">
      <div className="border-t  py-6 text-sm dark:border-neutral-700">
        <div className="flex items-center justify-center text-center text-muted-foreground">
          <p>
            &copy; {copyrightYear} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
