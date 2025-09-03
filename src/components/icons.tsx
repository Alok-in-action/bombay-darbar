import type { LucideProps } from "lucide-react";
import { Leaf } from "lucide-react";

export const VegIcon = (props: LucideProps) => (
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100" title="Vegetarian">
    <Leaf className="h-3 w-3 text-green-700" {...props} />
  </div>
);

export const NonVegIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <div className="flex h-5 w-5 items-center justify-center" title="Non-Vegetarian">
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M6 1 L11 10 H1 Z" fill="#C62828" />
        </svg>
    </div>
);
