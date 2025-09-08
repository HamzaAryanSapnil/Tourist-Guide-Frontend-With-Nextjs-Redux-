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
import { useForm } from "react-hook-form";

export default function AddTourTypeForm() {
  const form = useForm();

  const onSubmit = async (data: any) => {
    //    const res = await addTourType({ name: data.name }).unwrap();
    //    if (res.success) {
    //      toast.success("Tour Type Added");
    //    }
    console.log(data);
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
