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
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12.9498 12.9497L7.00003 7L1.05032 12.9497M12.9498 1.05025L7.00003 7L1.05032 1.05025"
                stroke="#C62828"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <rect
                x="1"
                y="1"
                width="12"
                height="12"
                stroke="#C62828"
                strokeWidth="2"
            />
        </svg>
    </div>
);
