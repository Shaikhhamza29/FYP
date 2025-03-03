"use client"

import * as z from "zod";


import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { Form } from "../ui/form"
import { useForm } from "react-hook-form"


export const InitialModel = () => {

    const form = useForm({
        defaultValues : {
            name : "",
            imageUrl : "",
        }
    });
    return (
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-center text-2xl font-bold">
                        Customize Your Server
                    </DialogTitle>
                    <DialogDescription>
                        Give Your Server a name and an Image later you can chnage it ..
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}