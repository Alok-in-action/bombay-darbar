import type { LucideProps } from "lucide-react";
import { Leaf } from "lucide-react";

export const VegIcon = (props: LucideProps) => (
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100" title="Vegetarian">
    <Leaf className="h-3 w-3 text-green-700" {...props} />
  </div>
);

export const NonVegIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100" title="Non-Vegetarian">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-red-700"
      {...props}
    >
      <path d="M12.25 10.75 9.75 8.25" />
      <path d="M15.25 4.75S12.25 1.75 10.5 3.5c-2.25 2.25 1 5.25 1 5.25" />
      <path d="M14.25 11.75c0 4.5-3.5 8.5-8 8.5-2.5 0-4.5-1.5-5.5-3.5" />
      <path d="M15.25 10.75c3.5 0 6.5 3 6.5 6.5 0 2-1 4-2.5 5" />
    </svg>
  </div>
);
