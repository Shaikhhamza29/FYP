"use client";

import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { Children } from "react";
import { string } from "zod";

interface ActionTooltipProps{
    label : string;
    children : React.ReactNode;
    side? : "top"|"right"|"bottom"|"left";
    align? : "start"| "center"|"end"
}

export const ActionTooltip = ({
    label,
    side,
    children,
    align
}: ActionTooltipProps) =>{
    return(
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align}>
                    <p className="font-semibold text-sm capitalize">
                        {label.toLowerCase()}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}