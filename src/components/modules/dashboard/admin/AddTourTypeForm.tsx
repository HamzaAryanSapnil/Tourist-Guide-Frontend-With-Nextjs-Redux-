/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddTourTypeMutation } from "@/redux/features/Tour/tour.api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AddTourTypeForm() {
  const [addTourType] = useAddTourTypeMutation();
  const form = useForm();

  const onSubmit = async (data: any) => {
    console.log(data)
       try {
        const res = await addTourType({ name: data.name }).unwrap();
        if (res.success) {
          toast.success("Tour Type Added");
        }
        console.log(res);
       } catch (error) {
        console.log(error)
       }
  };
  return (
    <div>
      <Form {...form} >
        <form id="add-tour-type" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tour Type Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tour Type Name"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" form="add-tour-type">
            Save changes
          </Button>
        </form>
      </Form>
    </div>
  );
}
