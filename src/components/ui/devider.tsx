import clsx from "clsx"; // Optionally use clsx or classnames for conditional merging

export default function Divider({ className = "" }) {
    return (
        <div className="flex justify-center w-full">
            <hr className={clsx("border-t border-gray-300 my-4", className)} />
        </div>
    );
}
