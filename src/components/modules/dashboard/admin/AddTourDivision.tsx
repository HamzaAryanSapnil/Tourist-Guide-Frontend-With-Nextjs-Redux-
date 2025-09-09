/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SingleFileUploader from "@/components/SingleFileUploader";
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
import { Textarea } from "@/components/ui/textarea";
import { useAddDivisionMutation } from "@/redux/features/Tour/division.api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AddTourDivisionForm() {
  const [image, setImage] = useState<File | null>(null);
  const [addDivision] = useAddDivisionMutation();
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  console.log("image", image);

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    formData.append("file", image as File);

    try {
      const res = await addDivision(formData).unwrap();
      if (res.success) {
        toast.success("Division Added");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="max-w-xl w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-xl w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Division Name</FormLabel>
                <FormControl>
                  <Input placeholder="Tour Division Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Division Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SingleFileUploader onChange={setImage} />
          <Button type="submit">Save changes</Button>
        </form>
      </Form>
    </div>
  );
}
