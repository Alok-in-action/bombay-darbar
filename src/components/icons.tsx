import type { LucideProps } from "lucide-react";
import { Leaf } from "lucide-react";

export const VegIcon = (props: LucideProps) => (
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100" title="Vegetarian">
    <Leaf className="h-3 w-3 text-green-700" {...props} />
  </div>
);

export const NonVegIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <div className="flex h-5 w-5 items-center justify-center rounded-sm border border-red-700" title="Non-Vegetarian">
        <svg 
            width="10" 
            height="10"
            viewBox="0 0 24 24" 
            fill="none"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            {...props}
        >
            <polygon points="12 2 22 22 2 22" fill="#C62828" stroke="#C62828" />
        </svg>
    </div>
);
